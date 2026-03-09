import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Simple, Honest Pricing
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          No hidden fees. No gotchas. Scale as you grow.
        </p>
      </section>

      {/* Pricing Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-white/20">
            <h3 className="text-2xl font-bold mb-2 text-white">Free</h3>
            <div className="text-6xl font-extrabold my-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              $0<span className="text-base">/mo</span>
            </div>
            <p className="text-white/60 mb-8">Perfect for trying things out</p>
            
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Basic chat interface
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                5 agent interactions/day
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Community support
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Public dashboard access
              </li>
            </ul>
            
            <Link 
              href="https://dashboard.botlify.ai/signup.html"
              className="block w-full py-4 px-6 rounded-xl font-semibold bg-white/5 border border-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan - Featured */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-brand-purple/50 rounded-3xl p-10 text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-brand-purple/70">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white px-4 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
            <div className="text-6xl font-extrabold my-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              $29<span className="text-base">/mo</span>
            </div>
            <p className="text-white/60 mb-8">For power users who get stuff done</p>
            
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Unlimited agent interactions
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                All 13 specialized agents
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Persistent memory
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Telegram & Discord integration
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Priority support
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Custom workflows
              </li>
            </ul>
            
            <Link 
              href="https://dashboard.botlify.ai/signup.html"
              className="block w-full py-4 px-6 rounded-xl font-semibold bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-brand-orange/30"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-white/20">
            <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
            <div className="text-6xl font-extrabold my-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Custom
            </div>
            <p className="text-white/60 mb-8">For teams and organizations</p>
            
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Self-hosted option
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Custom agents
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                SSO / SAML
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                Dedicated support
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-500 font-semibold">✓</span>
                SLA guarantee
              </li>
            </ul>
            
            <Link 
              href="/contact"
              className="block w-full py-4 px-6 rounded-xl font-semibold bg-white/5 border border-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Questions?</h2>
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Can I cancel anytime?</h3>
            <p className="text-white/60">Yes. No contracts, no hassle. Cancel with one click.</p>
          </div>
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Is my data safe?</h3>
            <p className="text-white/60">We don't train on your data. Your conversations stay yours. Enterprise users can self-host.</p>
          </div>
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-xl font-semibold mb-3 text-white">What payment methods do you accept?</h3>
            <p className="text-white/60">All major credit cards via Stripe. Enterprise can pay by invoice.</p>
          </div>
        </div>
      </section>
    </>
  );
}