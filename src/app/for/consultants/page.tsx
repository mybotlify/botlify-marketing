import Link from 'next/link';

export default function ForConsultantsPage() {
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
        <p className="text-orange-500 font-medium mb-4">FOR CONSULTANTS</p>
        <h1 className="text-5xl text-6xl font-bold mb-6">
          You advise others.<br />
          <span className="text-gray-400">Get an advisor for yourself.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Multiple clients, complex engagements, constant context switching. 
          Botlify remembers every client detail so you deliver exceptional service.
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
            <div className="text-3xl mb-4">🔀</div>
            <h3 className="text-xl font-semibold mb-2">"Which client was that?"</h3>
            <p className="text-gray-400">
              You're on a call and can't remember if this was the client with the 
              compliance issue or the integration project. Context blur is real.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">"My notes are a mess"</h3>
            <p className="text-gray-400">
              Meeting notes everywhere. Some in docs, some in emails, some in your head. 
              Prep for each client takes way too long.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">"Billable time leaks"</h3>
            <p className="text-gray-400">
              Half your day is admin — proposals, invoices, follow-ups, scheduling. 
              Non-billable work that eats into your income.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">"Experience doesn't compound"</h3>
            <p className="text-gray-400">
              You've solved similar problems before. But finding that past work, 
              that framework, that deliverable — it's like starting over.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Botlify makes you a better consultant.</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          An AI that knows every client, every engagement, every insight — 
          and helps you deliver exceptional value without burning out.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Intelligence</h3>
            <p className="text-gray-400">
              Full context on each client. History, preferences, key contacts, past work.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Knowledge Library</h3>
            <p className="text-gray-400">
              Past deliverables, frameworks, and solutions — searchable and reusable.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Prep Automation</h3>
            <p className="text-gray-400">
              Meeting briefs generated. Context surfaced. Walk in ready every time.
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
              <h3 className="font-semibold text-lg">Premium client experience</h3>
              <p className="text-gray-400">Remember every detail. Show up prepared. Build deeper relationships.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Compound your expertise</h3>
              <p className="text-gray-400">Past work reusable. Frameworks searchable. Every engagement builds on the last.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">More billable hours</h3>
              <p className="text-gray-400">Less admin, less prep time, more time delivering value.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Handle more clients</h3>
              <p className="text-gray-400">Scale your practice without sacrificing quality or burning out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to level up your consulting?</h2>
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
  title: 'Botlify for Consultants | Client Intelligence That Compounds',
  description: 'Remember every client detail. Reuse your best work. Botlify helps consultants deliver exceptional service at scale.',
};
