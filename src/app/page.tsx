import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-bg/50 border border-brand-border text-brand-muted text-sm mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Now accepting early access signups
          </div>
          <h1 className="text-5xl sm-text-7xl font-bold text-brand-fg mb-6 leading-tight">
            An AI That Actually{' '}
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent/70 bg-clip-text text-transparent">
              Remembers You
            </span>
          </h1>
          <p className="text-xl sm-text-2xl text-brand-muted mb-10 max-w-2xl mx-auto">
            Your personal AI assistant with infinite memory. Automates your life,
            saves you money, and <strong className="text-brand-fg">you own the infrastructure</strong>.
          </p>
          <div className="flex flex-col sm-flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-brand-accent hover-bg-accent text-white font-semibold rounded-xl transition-all text-lg shadow-lg shadow-brand-accent/20"
            >
              Start for free →
            </Link>
            <Link
              href="https://x.com/botlifyai"
              target="_blank"
              className="px-8 py-4 border border-brand-border text-brand-muted font-semibold rounded-xl hover:bg-brand-bg/50 transition-colors text-lg"
            >
              Follow the journey
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-4 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-fg mb-6">
                Other AI assistants forget you exist
              </h2>
              <p className="text-lg text-brand-muted mb-6">
                ChatGPT, Claude, Gemini — they all start fresh every conversation. 
                You repeat yourself constantly. Your preferences vanish. Your context disappears.
              </p>
              <p className="text-lg text-brand-muted">
                Botlify is different. It remembers <strong className="text-brand-fg">everything</strong> — 
                your preferences, your projects, your communication style, your history. 
                Forever. And you own that data.
              </p>
            </div>
            <div className="bg-brand-bg/50 rounded-2xl p-8 border border-brand-border">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h3 className="font-semibold text-brand-fg">Infinite Memory</h3>
                    <p className="text-brand-muted text-sm">3-layer memory system: working, episodic, and semantic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <h3 className="font-semibold text-brand-fg">You Own Your Data</h3>
                    <p className="text-brand-muted text-sm">Per-user isolated database. Export anytime. Delete anytime.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-semibold text-brand-fg">Actually Useful</h3>
                    <p className="text-brand-muted text-sm">Not a chatbot. A real assistant that gets things done.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-fg mb-4">
              Everything connected. Everything remembered.
            </h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto">
              One AI that manages your communications, calendar, and tasks — 
              with memory that learns and improves over time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="📬"
              title="Unified Inbox"
              description="Email, SMS, Telegram, Slack — all in one place."
            />
            <FeatureCard
              icon="📅"
              title="Smart Scheduling"
              description="AI coordinates across your calendars and contacts."
            />
            <FeatureCard
              icon="🤖"
              title="24/7 Automation"
              description="Cron jobs, workflows, and integrations that work while you sleep."
            />
            <FeatureCard
              icon="💾"
              title="Persistent Memory"
              description="Temporal knowledge graphs track how facts change over time."
            />
            <FeatureCard
              icon="🔒"
              title="Security First"
              description="Sandboxed execution, audit logging, minimal permissions."
            />
            <FeatureCard
              icon="🌐"
              title="Open Infrastructure"
              description="Run on your servers or ours. No vendor lock-in."
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/features"
              className="text-brand-accent hover:underline font-medium"
            >
              See all 24+ features →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 border-t border-brand-border bg-brand-bg/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-fg mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-brand-muted">
              Start free. Upgrade when you need more.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard name="Free" price="$0" features={["Basic chat", "5 interactions/day", "Community support"]} />
            <PricingCard name="Pro" price="$39" features={["Unlimited memory", "10 channels", "500k AI tokens", "24/7 automation"]} highlighted />
            <PricingCard name="Ultimate" price="$89" features={["Everything in Pro", "Unlimited channels", "2M AI tokens", "API access"]} />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="text-brand-accent hover:underline font-medium"
            >
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-fg mb-6">
            Built for real people with real problems
          </h2>
          <p className="text-lg text-brand-muted mb-10 max-w-2xl mx-auto">
            From busy parents managing family schedules to entrepreneurs running their business — Botlify adapts to how you work.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
            <UseCaseCard title="Health & Wellness" description="Medication reminders, symptom tracking, appointment management" />
            <UseCaseCard title="Email Management" description="Smart inbox, draft assistance, follow-up tracking" />
            <UseCaseCard title="Family Coordination" description="Shared calendars, chore management, meal planning" />
            <UseCaseCard title="Business & Projects" description="Task management, meeting notes, client tracking" />
          </div>
          <Link
            href="/use-cases"
            className="text-brand-accent hover:underline font-medium"
          >
            Explore all use cases →
          </Link>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-4 border-t border-brand-border bg-brand-bg/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-fg mb-6">
            Security by design, not by accident
          </h2>
          <p className="text-lg text-brand-muted mb-10 max-w-2xl mx-auto">
            Most AI agents treat security as an afterthought. We built it into the foundation.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <SecurityPoint title="Per-user isolation" description="Your data is completely isolated. No cross-contamination." />
            <SecurityPoint title="Sandboxed execution" description="Agent actions run in containers with minimal permissions." />
            <SecurityPoint title="Transparent logging" description="See exactly what your AI did, when, and why." />
            <SecurityPoint title="You own everything" description="Export or delete your data anytime. Your data, your rules." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-brand-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-fg mb-6">
            Ready to get an AI that actually remembers you?
          </h2>
          <p className="text-lg text-brand-muted mb-10">
            Join the early access program. Start free, upgrade when you're ready.
          </p>
          <Link
            href="/signup"
            className="inline-flex px-8 py-4 bg-brand-accent hover-bg-accent text-white font-semibold rounded-xl transition-all text-lg shadow-lg shadow-brand-accent/20"
          >
            Get started for free →
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-brand-bg/50 rounded-xl p-6 border border-brand-border hover:border-brand-accent/30 transition-colors">
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3 className="text-xl font-semibold text-brand-fg mb-2">{title}</h3>
      <p className="text-brand-muted">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, features, highlighted }: { name: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-2xl p-8 border ${highlighted ? 'bg-gradient-to-b from-brand-accent/10 to-brand-accent/5 border-brand-accent/30' : 'bg-brand-bg/50 border-brand-border'}`}>
      <h3 className="text-xl font-semibold text-brand-fg mb-1">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-brand-fg">{price}</span>
        {price !== "Custom" && <span className="text-brand-muted">/month</span>}
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-brand-muted text-sm">
            <span className="text-green-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/signup"
        className={`block text-center py-3 rounded-lg font-medium transition-all ${highlighted ? 'bg-brand-accent text-white hover-bg-accent' : 'bg-brand-bg text-brand-fg hover:bg-brand-border'}`}
      >
        Get started
      </Link>
    </div>
  );
}

function UseCaseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-brand-bg/50 rounded-lg p-4 border border-brand-border">
      <h4 className="font-semibold text-brand-fg mb-1">{title}</h4>
      <p className="text-brand-muted text-sm">{description}</p>
    </div>
  );
}

function SecurityPoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-brand-bg/50 rounded-lg p-4 border border-brand-border">
      <h4 className="font-semibold text-brand-fg mb-1">{title}</h4>
      <p className="text-brand-muted text-sm">{description}</p>
    </div>
  );
}
