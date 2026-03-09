'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-brand-fg hover:text-brand-accent transition-colors duration-200"
          >
            🤖 Botlify
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/use-cases" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Use Cases
            </Link>
            <Link 
              href="/features" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Features
            </Link>
            <Link 
              href="/why-botlify" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Why Botlify
            </Link>
            <a 
              href="https://dashboard.botlify.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-brand-bg px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200 font-medium"
            >
              Dashboard
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-brand-fg hover:text-brand-accent transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}