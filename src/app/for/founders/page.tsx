import Link from 'next/link';

export default function ForFoundersPage() {
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
        <p className="text-orange-500 font-medium mb-4">FOR FOUNDERS</p>
        <h1 className="text-5xl text-6xl font-bold mb-6">
          You're building a company.<br />
          <span className="text-gray-400">Stop drowning in chaos.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Investors, customers, product, hiring, finances — your brain is full. 
          Botlify remembers everything so you can focus on what matters.
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
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">"I can't remember everything"</h3>
            <p className="text-gray-400">
              That investor intro from last month. The feedback from the customer call. 
              The hiring decision rationale. It's all somewhere... but where?
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2">"Inbox is overwhelming"</h3>
            <p className="text-gray-400">
              500 unread emails. Important stuff buried under noise. 
              You know something's slipping but you don't have time to find it.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold mb-2">"Everything is urgent"</h3>
            <p className="text-gray-400">
              Product needs attention. Fundraising needs attention. Hiring needs attention. 
              You're context-switching constantly and nothing gets deep work.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">😓</div>
            <h3 className="text-xl font-semibold mb-2">"I'm the bottleneck"</h3>
            <p className="text-gray-400">
              Everyone needs your input. Decisions pile up. The team is waiting. 
              You need to scale yourself but there's no time.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Botlify is your second brain.</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          An AI assistant that remembers every conversation, every decision, every context — 
          and helps you move faster without dropping balls.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Decision Memory</h3>
            <p className="text-gray-400">
              Why did we choose that vendor? What was the board's feedback? Instant recall.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inbox Triage</h3>
            <p className="text-gray-400">
              Important emails surfaced. Follow-ups tracked. Nothing falls through.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Priority Focus</h3>
            <p className="text-gray-400">
              Knows what matters most. Reminds you at the right time. Protects your focus.
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
              <h3 className="font-semibold text-lg">Stop dropping balls</h3>
              <p className="text-gray-400">Every commitment, every follow-up, every idea — captured and tracked.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Decisions with context</h3>
              <p className="text-gray-400">"Why did we decide X?" Always have the answer, even months later.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Scale yourself</h3>
              <p className="text-gray-400">Delegate to AI what doesn't need you. Focus on what only you can do.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Less stress, more clarity</h3>
              <p className="text-gray-400">Your brain is for thinking, not remembering. Offload to Botlify.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to stop the chaos?</h2>
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
  title: 'Botlify for Founders | Your AI Second Brain',
  description: 'Stop drowning in chaos. Botlify remembers every conversation, decision, and commitment — so you can focus on building your company.',
};
