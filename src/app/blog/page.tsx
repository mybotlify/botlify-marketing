import type { Metadata } from 'next';
import Link from 'next/link';
import SubscribeForm from './subscribe-form';

export const metadata: Metadata = {
  title: 'Blog — Botlify',
  description: 'Updates, insights, and behind-the-scenes from building Botlify',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Updates, insights, and behind-the-scenes from building Botlify
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-8 pb-16">
        <div className="space-y-6">
          <Link href="#" className="block group">
            <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1">
              <div className="text-sm text-white/50 mb-2">February 25, 2026</div>
              <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-brand-purple transition-colors">
                Introducing the Multi-Agent Architecture
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                How we built 13 specialized agents that work together. From JARVIS orchestrating tasks to specialized agents you configure for your needs.
              </p>
              <div className="flex gap-2">
                <span className="bg-brand-purple/20 text-brand-orange px-3 py-1 rounded-full text-xs">
                  Architecture
                </span>
                <span className="bg-brand-purple/20 text-brand-orange px-3 py-1 rounded-full text-xs">
                  Agents
                </span>
              </div>
            </article>
          </Link>

          <Link href="#" className="block group">
            <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1">
              <div className="text-sm text-white/50 mb-2">February 20, 2026</div>
              <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-brand-purple transition-colors">
                Why We Built a Memory System
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Most AI assistants forget you between sessions. We think that's broken. Here's how we built persistent memory.
              </p>
              <div className="flex gap-2">
                <span className="bg-brand-purple/20 text-brand-orange px-3 py-1 rounded-full text-xs">
                  Memory
                </span>
                <span className="bg-brand-purple/20 text-brand-orange px-3 py-1 rounded-full text-xs">
                  Product
                </span>
              </div>
            </article>
          </Link>

          <Link href="#" className="block group">
            <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1">
              <div className="text-sm text-white/50 mb-2">February 15, 2026</div>
              <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-brand-purple transition-colors">
                Building in Public: Week 1
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We're building Botlify transparently. Here's what we shipped, what broke, and what we learned.
              </p>
              <div className="flex gap-2">
                <span className="bg-brand-purple/20 text-brand-orange px-3 py-1 rounded-full text-xs">
                  Build in Public
                </span>
              </div>
            </article>
          </Link>
        </div>
      </div>

      {/* Subscribe Section */}
      <SubscribeForm />
    </>
  );
}