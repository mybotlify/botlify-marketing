import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-lg border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gradient">Botlify</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-brand-muted hover:text-brand-fg transition-colors">Features</Link>
            <Link href="/pricing" className="text-brand-muted hover:text-brand-fg transition-colors">Pricing</Link>
            <Link href="/docs" className="text-brand-muted hover:text-brand-fg transition-colors">Docs</Link>
            <Link href="/login" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card border border-brand-border text-brand-muted text-sm mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Now accepting early access
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-brand-fg mb-6 leading-tight">
            An AI That Actually{' '}
            <span className="text-gradient">Remembers You</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-muted mb-10 max-w-2xl mx-auto">
            Your personal AI assistant with infinite memory. Automates your life,
            saves you money, and <strong className="text-brand-fg">you own everything</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary text-lg px-8 py-4">
              Start Free →
            </Link>
            <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-4 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            They Talk. <span className="text-gradient">We Work.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border">
              <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Other AI Assistants</h3>
              <ul className="space-y-3 text-brand-muted">
                <li>• Forget everything between sessions</li>
                <li>• Can only talk, can&apos;t take action</li>
                <li>• Train on your private data</li>
                <li>• No automation or workflows</li>
                <li>• Locked to their platform</li>
              </ul>
            </div>
            
            {/* Solution */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-orange-500/10 border border-brand-accent/30">
              <h3 className="text-xl font-semibold text-brand-accent mb-4">✅ Botlify</h3>
              <ul className="space-y-3 text-brand-fg">
                <li>• <strong>Remembers</strong> — Infinite context, forever</li>
                <li>• <strong>Acts</strong> — Sends emails, manages calendar, automates tasks</li>
                <li>• <strong>Private</strong> — Your data stays yours, always</li>
                <li>• <strong>Powerful</strong> — Skills system for any workflow</li>
                <li>• <strong>Yours</strong> — Self-host or we host, your choice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything You Need
          </h2>
          <p className="text-brand-muted text-center mb-16 max-w-2xl mx-auto">
            A complete AI assistant that grows with you
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🧠', title: 'Infinite Memory', desc: 'Never forgets a conversation, preference, or task' },
              { icon: '⚡', title: 'Real Actions', desc: 'Emails, calendar, files, APIs — actually does the work' },
              { icon: '🔒', title: 'Privacy First', desc: 'Your data never trains models. Period.' },
              { icon: '🛠️', title: 'Skills System', desc: 'Extensible with custom automations and workflows' },
              { icon: '📱', title: 'Multi-Channel', desc: 'Telegram, Discord, WhatsApp, web — wherever you are' },
              { icon: '🏠', title: 'Self-Hostable', desc: 'Run on your own infrastructure if you want' },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-brand-card border border-brand-border card-hover">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-brand-fg mb-2">{feature.title}</h3>
                <p className="text-brand-muted text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-brand-muted mb-12">Pay for the platform. Bring your own AI keys, or use ours.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border">
              <h3 className="text-lg font-semibold mb-2">Free</h3>
              <div className="text-3xl font-bold mb-4">$0</div>
              <p className="text-brand-muted text-sm">100 messages/mo with basic models</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-brand-accent/20 to-orange-500/10 border border-brand-accent/30 scale-105">
              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">$19<span className="text-sm text-brand-muted">/mo</span></div>
              <p className="text-brand-muted text-sm">Unlimited with BYOK. All features.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border">
              <h3 className="text-lg font-semibold mb-2">Team</h3>
              <div className="text-3xl font-bold mb-4">$49<span className="text-sm text-brand-muted">/mo</span></div>
              <p className="text-brand-muted text-sm">Multi-user. Shared memory. Priority support.</p>
            </div>
          </div>
          
          <Link href="/pricing" className="inline-block mt-8 text-brand-accent hover:underline">
            View full pricing →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-brand-muted mb-8">
            Join thousands who&apos;ve upgraded their productivity with Botlify.
          </p>
          <Link href="/signup" className="btn-primary text-lg px-8 py-4">
            Start Free Today →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-brand-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-brand-muted text-sm">
            © 2026 Botlify. All rights reserved.
          </div>
          <div className="flex gap-6 text-brand-muted text-sm">
            <Link href="/privacy" className="hover:text-brand-fg transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-fg transition-colors">Terms</Link>
            <a href="https://twitter.com/botlifyai" className="hover:text-brand-fg transition-colors">Twitter</a>
            <a href="https://discord.gg/botlify" className="hover:text-brand-fg transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}