'use client'

import { useState, useEffect, useRef } from 'react'

// Declare YouTube IFrame API types
declare global {
  interface Window {
    YT: typeof YT
    onYouTubeIframeAPIReady: () => void
  }
}

declare namespace YT {
  interface Player {
    playVideo(): void
    pauseVideo(): void
    getPlayerState(): number
  }
  
  interface PlayerOptions {
    height: string
    width: string
    videoId: string
    events: {
      onReady?: (event: any) => void
      onStateChange?: (event: any) => void
    }
  }
  
  class Player {
    constructor(elementId: string, options: PlayerOptions)
  }
  
  const PlayerState: {
    UNSTARTED: number
    ENDED: number
    PLAYING: number
    PAUSED: number
    BUFFERING: number
    CUED: number
  }
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const playerRef = useRef<YT.Player | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load YouTube IFrame API dynamically
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      // Create global callback for API ready
      window.onYouTubeIframeAPIReady = () => {
        initializePlayer()
      }
    } else if (window.YT && window.YT.Player) {
      initializePlayer()
    }

    function initializePlayer() {
      if (containerRef.current) {
        playerRef.current = new window.YT.Player('youtube-player', {
          height: '1',
          width: '1',
          videoId: 'y8LM1bYsJW8',
          events: {
            onReady: () => {
              setIsReady(true)
            },
            onStateChange: (event: any) => {
              setIsPlaying(event.data === window.YT.PlayerState.PLAYING)
            }
          }
        })
      }
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current = null
        } catch (e) {
          // Cleanup error handling
        }
      }
    }
  }, [])

  const togglePlayback = () => {
    if (!playerRef.current || !isReady) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Hidden YouTube player container */}
      <div 
        ref={containerRef}
        className="absolute -top-10 -left-10 opacity-0 pointer-events-none"
        style={{ width: '1px', height: '1px' }}
      >
        <div id="youtube-player"></div>
      </div>

      {/* Toggle button */}
      <button
        onClick={togglePlayback}
        disabled={!isReady}
        className={`
          w-12 h-12 rounded-full 
          bg-brand-600 hover:bg-brand-700 
          text-white text-xl
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isPlaying 
            ? 'shadow-lg shadow-indigo-500/50 ring-2 ring-indigo-400/30' 
            : 'shadow-md hover:shadow-lg'
          }
        `}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '🔊' : '🎵'}
      </button>
    </div>
  )
}