import Link from 'next/link';

const roles = [
  {
    slug: 'developers',
    title: 'Developers',
    icon: '💻',
    description: 'Stay in the zone. Less context switching, more coding.',
  },
  {
    slug: 'founders',
    title: 'Founders',
    icon: '🚀',
    description: 'Stop drowning in chaos. Your AI second brain.',
  },
  {
    slug: 'freelancers',
    title: 'Freelancers',
    icon: '🎯',
    description: 'Handle clients like a pro. Scale without burning out.',
  },
  {
    slug: 'designers',
    title: 'Designers',
    icon: '🎨',
    description: 'Protect your creative flow. Track feedback effortlessly.',
  },
  {
    slug: 'marketers',
    title: 'Marketers',
    icon: '📈',
    description: 'Remember what worked. Launch campaigns faster.',
  },
  {
    slug: 'consultants',
    title: 'Consultants',
    icon: '💼',
    description: 'Know every client. Compound your expertise.',
  },
  {
    slug: 'writers',
    title: 'Writers',
    icon: '✍️',
    description: 'Capture ideas. Track research. Never lose inspiration.',
    comingSoon: true,
  },
  {
    slug: 'salespeople',
    title: 'Sales Professionals',
    icon: '🤝',
    description: 'Remember every deal. Close faster.',
    comingSoon: true,
  },
  {
    slug: 'researchers',
    title: 'Researchers',
    icon: '🔬',
    description: 'Organize findings. Connect the dots.',
    comingSoon: true,
  },
  {
    slug: 'managers',
    title: 'Managers',
    icon: '👔',
    description: 'Track your team. Never drop the ball.',
    comingSoon: true,
  },
  {
    slug: 'teachers',
    title: 'Teachers',
    icon: '📚',
    description: 'Remember every student. Personalize learning.',
    comingSoon: true,
  },
  {
    slug: 'lawyers',
    title: 'Lawyers',
    icon: '⚖️',
    description: 'Track cases. Recall precedents instantly.',
    comingSoon: true,
  },
];

export default function ForPage() {
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
        <h1 className="text-5xl text-6xl font-bold mb-6">
          Botlify for <span className="text-orange-500">You</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          An AI assistant that remembers everything — tailored to how you work. 
          Find your role below.
        </p>
      </section>

      {/* Roles Grid */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div key={role.slug} className="relative">
              {role.comingSoon ? (
                <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 opacity-60">
                  <div className="text-4xl mb-4">{role.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{role.description}</p>
                  <span className="text-xs text-gray-600 font-medium">Coming soon</span>
                </div>
              ) : (
                <Link 
                  href={`/for/${role.slug}`}
                  className="block p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 hover:bg-gray-900 transition-all group"
                >
                  <div className="text-4xl mb-4">{role.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{role.description}</p>
                  <span className="text-orange-500 text-sm font-medium group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-16 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">Don't see your role?</h2>
        <p className="text-xl text-gray-400 mb-8">
          Botlify works for anyone who needs to remember things and stay organized. 
          Try it free — customize it for how you work.
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
  title: 'Botlify for Your Role | AI Assistant for Every Professional',
  description: 'Find how Botlify helps your specific role. Developers, founders, freelancers, designers, marketers, consultants — and more.',
};
