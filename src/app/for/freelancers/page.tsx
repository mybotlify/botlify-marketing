import Link from 'next/link';

export default function ForFreelancersPage() {
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
        <p className="text-orange-500 font-medium mb-4">FOR FREELANCERS</p>
        <h1 className="text-5xl text-6xl font-bold mb-6">
          You're a one-person show.<br />
          <span className="text-gray-400">Get an AI teammate.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Clients, projects, invoices, admin — you're doing it all alone. 
          Botlify handles the overhead so you can focus on billable work.
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
            <div className="text-3xl mb-4">🤹</div>
            <h3 className="text-xl font-semibold mb-2">"I'm juggling too much"</h3>
            <p className="text-gray-400">
              Client A needs revisions. Client B wants a call. Client C's invoice is overdue. 
              Meanwhile, you're trying to actually do the work.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">"Admin eats my time"</h3>
            <p className="text-gray-400">
              Proposals, contracts, invoices, follow-ups — half your week is unpaid work. 
              You're not billing for any of it.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">"Where's that conversation?"</h3>
            <p className="text-gray-400">
              The client mentioned feedback somewhere — email? Slack? Text? 
              You spend 10 minutes hunting every time.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">😰</div>
            <h3 className="text-xl font-semibold mb-2">"Did I forget something?"</h3>
            <p className="text-gray-400">
              That nagging feeling you're missing something. A deadline. A follow-up. 
              Something is slipping but you don't know what.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Botlify is your backstage crew.</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          An AI that remembers every client, every project, every conversation — 
          and handles the admin so you can do what you love.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Memory</h3>
            <p className="text-gray-400">
              Knows each client's preferences, history, and communication style.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Deadline Tracking</h3>
            <p className="text-gray-400">
              Never miss a deadline. Proactive reminders before things get urgent.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">✉️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Follow-Up Automation</h3>
            <p className="text-gray-400">
              Tracks who needs a response. Drafts follow-ups. You just approve and send.
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
              <h3 className="font-semibold text-lg">More billable hours</h3>
              <p className="text-gray-400">Less time on admin = more time doing paid work.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Professional client experience</h3>
              <p className="text-gray-400">Fast responses, no dropped balls, happy clients who refer you.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Peace of mind</h3>
              <p className="text-gray-400">Know that nothing is slipping. Stop the 3am anxiety.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Scale without hiring</h3>
              <p className="text-gray-400">Handle more clients without burning out or hiring an assistant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to stop doing it all alone?</h2>
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
  title: 'Botlify for Freelancers | Your AI Business Partner',
  description: 'Stop juggling everything alone. Botlify handles client management, deadlines, and admin — so you can focus on billable work.',
};
