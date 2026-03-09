'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Internal Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <Link 
              href="/about" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              href="/docs" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Docs
            </Link>
            <Link 
              href="/pricing" 
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Pricing
            </Link>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a 
              href="mailto:mybotlify@gmail.com"
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://github.com/botlifyai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-fg hover:text-brand-accent transition-colors duration-200"
            >
              Powered by OpenClaw
            </a>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 text-brand-fg">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm">
              Currently building in public — stay tuned for updates
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}