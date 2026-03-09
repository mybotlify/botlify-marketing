import Link from 'next/link';

export default function ForMarketersPage() {
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
        <p className="text-orange-500 font-medium mb-4">FOR MARKETERS</p>
        <h1 className="text-5xl text-6xl font-bold mb-6">
          You drive growth.<br />
          <span className="text-gray-400">Stop drowning in campaigns.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Social posts, email sequences, analytics, campaigns — it's nonstop. 
          Botlify remembers everything and keeps the machine running.
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
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">"What worked last time?"</h3>
            <p className="text-gray-400">
              That campaign that crushed it six months ago — what were the exact tactics? 
              The insights are buried in old spreadsheets and forgotten docs.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-2">"Too many channels"</h3>
            <p className="text-gray-400">
              Email, social, ads, SEO, events, PR — you're managing a dozen platforms 
              and context switching constantly.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">"The calendar is chaos"</h3>
            <p className="text-gray-400">
              Content calendars, campaign deadlines, launch dates — keeping track 
              of what's due when is a full-time job.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">"Proving ROI is hard"</h3>
            <p className="text-gray-400">
              Leadership wants attribution. But pulling the data, building the story, 
              remembering what you tested — it takes hours.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Botlify is your marketing memory.</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          An AI that remembers every campaign, every metric, every insight — 
          and helps you move faster without losing context.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Campaign Memory</h3>
            <p className="text-gray-400">
              What worked, what didn't, exact tactics and results. Instant recall.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Content Tracking</h3>
            <p className="text-gray-400">
              What's scheduled, what's due, what's performing. All in one place.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Insight Capture</h3>
            <p className="text-gray-400">
              Every learning preserved. Build institutional knowledge, not tribal.
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
              <h3 className="font-semibold text-lg">Launch faster</h3>
              <p className="text-gray-400">Less time searching for past work. More time executing new campaigns.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Better decisions</h3>
              <p className="text-gray-400">"What worked before?" — instant answer with context and data.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Easier reporting</h3>
              <p className="text-gray-400">ROI stories assembled from remembered insights. Less spreadsheet wrestling.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl">
            <div className="text-green-500 text-2xl">✓</div>
            <div>
              <h3 className="font-semibold text-lg">Team continuity</h3>
              <p className="text-gray-400">Onboard new team members faster. Knowledge doesn't walk out the door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to supercharge your marketing?</h2>
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
  title: 'Botlify for Marketers | Your Marketing Memory',
  description: 'Stop losing campaign insights. Botlify remembers what worked, tracks your content, and helps you prove ROI faster.',
};
