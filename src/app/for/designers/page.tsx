import Link from 'next/link';

export default function ForDesignersPage() {
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
        <p className="text-orange-500 font-medium mb-4">FOR DESIGNERS</p>
        <h1 className="text-5xl text-6xl font-bold mb-6">
          You create beautiful work.<br />
          <span className="text-gray-400">Stop losing it in the chaos.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Feedback scattered everywhere. Versions lost. Context forgotten. 
          Botlify remembers everything so your creativity can flow.
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
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">"Feedback is everywhere"</h3>
            <p className="text-gray-400">
              Slack comments. Email threads. Figma notes. Meeting mentions. 
              Piecing it all together takes longer than the design itself.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-2">"Why did we change that?"</h3>
            <p className="text-gray-400">
              Three months later, no one remembers why the button is blue. 
              The decision context is lost. You're redesigning from scratch.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">"Where's that asset?"</h3>
            <p className="text-gray-400">
              That icon you made last month. The color palette discussion. 
              The brand guidelines update. Finding things is a treasure hunt.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">"Meetings break my flow"</h3>
            <p className="text-gray-400">
              Creative work needs deep focus. But your calendar is fragmented 
              with standups, reviews, and "quick" syncs.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Botlify protects your creative flow.</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          An AI that captures feedback, remembers decisions, and handles the logistics — 
          so you can focus on what you do best: design.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feedback Aggregation</h3>
            <p className="text-gray-400">
              All feedback in one place. No more hunting through tools.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Decision History</h3>
            <p className="text-gray-400">
              Why did we choose that? Instant answer. Context preserved forever.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Focus Protection</h3>
            <p className="text-gray-400">
              Batches notifications. Protects deep work time. Handles async communication.
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
              <h3 className="font-semibold text-lg">More time designing</h3>
              <p className="text-gray-400">Less time in meetings, searching for files, or piecing together feedback.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Better design decisions</h3>
              <p className="text-gray-400">Context preserved. You can explain "why" even months later.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Smoother stakeholder management</h3>
              <p className="text-gray-400">Track feedback, follow up on approvals, keep everyone aligned.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Creative flow protected</h3>
              <p className="text-gray-400">Deep work time respected. Context switches minimized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to protect your creative flow?</h2>
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
  title: 'Botlify for Designers | Protect Your Creative Flow',
  description: 'Stop losing feedback in the chaos. Botlify aggregates feedback, preserves context, and protects your deep work time.',
};
