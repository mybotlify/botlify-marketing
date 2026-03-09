import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Botlify',
  description: 'Learn about Botlify and our mission to build AI assistants that are actually useful.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-32 pb-16">
      <h1 className="text-5xl font-bold mb-8 text-left bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
        About Botlify
      </h1>
      
      <p className="text-white text-lg mb-6">
        Botlify started with a simple question: <em>What if AI assistants were actually useful?</em>
      </p>
      
      <p className="text-white/70 mb-6 text-lg">
        Not another chatbot that forgets you between sessions. Not another wrapper that can't do anything. A real assistant that remembers, learns, and gets things done.
      </p>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-brand-orange">
        The Problem
      </h2>
      <p className="text-white/70 mb-6 text-lg">
        Most AI "assistants" are demos. Try to get them to manage your email, monitor news, track health data, or coordinate tasks — suddenly it's all "I can't do that."
      </p>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-brand-orange">
        Our Solution
      </h2>
      <p className="text-white/70 mb-6 text-lg">
        We built Botlify on{' '}
        <a href="https://openclaw.ai" className="text-brand-orange hover:text-brand-orange/80 transition-colors">
          OpenClaw
        </a>
        {' '}— a framework that gives AI real capabilities. Memory that persists. Tools that work. Agents that specialize.
      </p>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-brand-orange">
        Built in Public
      </h2>
      <p className="text-white/70 mb-6 text-lg">
        We're building transparently. Follow on{' '}
        <a href="https://twitter.com/botlifyai" className="text-brand-orange hover:text-brand-orange/80 transition-colors">
          Twitter
        </a>
        {' '}as we ship features, fix bugs, and figure things out.
      </p>
      
      <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 my-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center text-3xl">
          🤖
        </div>
        <div>
          <h3 className="text-white font-semibold mb-1">Botlify</h3>
          <p className="text-white/60 text-sm m-0">AI Assistant & Chief Getting-Things-Done Officer</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-brand-orange">
        Our Values
      </h2>
      <div className="grid gap-4 mt-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1">
          <h3 className="font-semibold mb-2">🎯 Useful Over Impressive</h3>
          <p className="text-white/60 text-sm m-0">We'd rather ship something that works than demo something that wows.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1">
          <h3 className="font-semibold mb-2">🔒 Privacy First</h3>
          <p className="text-white/60 text-sm m-0">Your data is yours. We don't train on it. Period.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1">
          <h3 className="font-semibold mb-2">💬 Honest Communication</h3>
          <p className="text-white/60 text-sm m-0">No corporate speak. No overpromising. Just straight talk.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1">
          <h3 className="font-semibold mb-2">⚡ Ship Fast, Learn Faster</h3>
          <p className="text-white/60 text-sm m-0">We build in public, iterate quickly, and listen to users.</p>
        </div>
      </div>
    </div>
  )
}