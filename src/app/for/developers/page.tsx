import Link from 'next/link';

export default function ForDevelopersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold">🤖 Botlify</Link>
        <Link href="/signup" className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium">
          Get Started Free
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <p className="text-orange-500 font-medium mb-4">FOR DEVELOPERS</p>
        <h1 className="text-5xl text-6xl font-bold mb-6">
          You write code.<br />
          <span className="text-gray-400">Let AI handle the rest.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Context switching kills your flow. Botlify remembers your projects, 
          your preferences, your stack — so you can stay in the zone.
        </p>
        <Link href="/signup" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-lg">
          Start for free →
        </Link>
      </section>

      {/* Pain Points */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Sound familiar?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="text-xl font-semibold mb-2">"What was I working on?"</h3>
            <p className="text-gray-400">
              You come back from a meeting and can't remember where you left off. 
              The context is gone. You spend 20 minutes getting back into flow.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-2">"Didn't I solve this before?"</h3>
            <p className="text-gray-400">
              You've definitely fixed this bug before. Or wrote that regex. Or configured 
              that build tool. But you can't find where.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">"Too many tools"</h3>
            <p className="text-gray-400">
              Slack, email, Jira, GitHub, Notion, calendar — you're drowning in tabs. 
              Half your day is spent just managing tools.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">"AI keeps forgetting"</h3>
            <p className="text-gray-400">
              ChatGPT doesn't know your codebase. Claude forgets you prefer TypeScript. 
              Every conversation starts from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Botlify remembers everything.</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Your personal AI assistant with infinite memory. It knows your projects, 
          your preferences, your patterns — and it never forgets.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Project Memory</h3>
            <p className="text-gray-400">
              Knows your codebase structure, tech stack, coding style, and past decisions.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Task Tracking</h3>
            <p className="text-gray-400">
              Captures todos from anywhere — Slack, email, meetings — and reminds you.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Context</h3>
            <p className="text-gray-400">
              "What was that API endpoint?" "How did I fix the auth bug?" Instant answers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What you get</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">2+ hours saved daily</h3>
              <p className="text-gray-400">Less context switching, less searching, more coding.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Nothing falls through the cracks</h3>
              <p className="text-gray-400">Every task, every commit, every decision — captured and searchable.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">AI that actually knows you</h3>
              <p className="text-gray-400">Your preferences, your patterns, your projects — all remembered.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Your data stays yours</h3>
              <p className="text-gray-400">Export anytime. Delete anytime. You own it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to stay in the zone?</h2>
        <p className="text-xl text-gray-400 mb-8">
          Free to start. No credit card required.
        </p>
        <Link href="/signup" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-lg">
          Get started free →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© 2026 Botlify by Unleveragable, LLC</p>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Botlify for Developers | AI That Remembers Your Code',
  description: 'Stop losing context. Botlify remembers your projects, your preferences, your patterns — so you can stay in the zone and ship faster.',
};
