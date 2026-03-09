import Link from 'next/link';

// 60+ Business Roles
const businessRoles = [
  // Customer Service
  { dept: 'Customer Service', roles: ['Support Agent', 'Chat Specialist', 'Ticket Manager', 'FAQ Curator', 'Escalation Handler'] },
  // Sales
  { dept: 'Sales', roles: ['Lead Qualifier', 'Follow-up Agent', 'Demo Scheduler', 'Proposal Writer', 'CRM Manager'] },
  // Marketing
  { dept: 'Marketing', roles: ['Content Writer', 'Social Manager', 'Email Marketer', 'SEO Analyst', 'Campaign Tracker'] },
  // HR
  { dept: 'HR', roles: ['Recruiter Assistant', 'Onboarding Guide', 'Policy Explainer', 'Leave Manager', 'Interview Scheduler'] },
  // Finance
  { dept: 'Finance', roles: ['Invoice Processor', 'Expense Tracker', 'Budget Monitor', 'Report Generator', 'Compliance Checker'] },
  // Operations
  { dept: 'Operations', roles: ['Task Coordinator', 'Meeting Scheduler', 'Document Manager', 'Process Automator', 'Inventory Tracker'] },
  // IT
  { dept: 'IT', roles: ['Help Desk Agent', 'System Monitor', 'Password Reset', 'Ticket Router', 'Knowledge Base'] },
  // Legal
  { dept: 'Legal', roles: ['Contract Reviewer', 'NDA Generator', 'Compliance Monitor', 'Policy Updater', 'Risk Assessor'] },
  // Executive
  { dept: 'Executive', roles: ['Executive Assistant', 'Report Summarizer', 'Meeting Prep', 'Decision Support', 'Priority Manager'] },
  // Research
  { dept: 'Research', roles: ['Data Analyst', 'Trend Spotter', 'Competitor Monitor', 'Market Researcher', 'Report Compiler'] },
  // Product
  { dept: 'Product', roles: ['Feature Tracker', 'Feedback Analyzer', 'Roadmap Assistant', 'Bug Triager', 'User Researcher'] },
  // Personal
  { dept: 'Personal', roles: ['Life Admin', 'Health Tracker', 'Finance Manager', 'Learning Coach', 'Travel Planner'] },
];

// AI Comparison
const comparison = [
  { feature: 'Remembers conversations', us: true, chatgpt: false, grok: false, gemini: false, copilot: false },
  { feature: 'Takes real actions', us: true, chatgpt: false, grok: false, gemini: false, copilot: true },
  { feature: 'Multi-channel (Telegram, Discord)', us: true, chatgpt: false, grok: false, gemini: false, copilot: false },
  { feature: 'Custom automations', us: true, chatgpt: false, grok: false, gemini: false, copilot: false },
  { feature: 'Self-improving', us: true, chatgpt: false, grok: false, gemini: false, copilot: false },
  { feature: 'Privacy-first (your data stays yours)', us: true, chatgpt: false, grok: false, gemini: false, copilot: false },
  { feature: 'Self-hostable', us: true, chatgpt: false, grok: false, gemini: false, copilot: false },
  { feature: 'Works while you sleep', us: true, chatgpt: false, grok: false, gemini: false, copilot: false },
];

// Use Cases
const useCases = [
  { icon: '📧', title: 'Email Triage', desc: 'Automatically categorize, summarize, and draft responses to your inbox' },
  { icon: '📅', title: 'Calendar Management', desc: 'Schedule meetings, send reminders, and prep you for upcoming events' },
  { icon: '📊', title: 'Report Generation', desc: 'Pull data, analyze trends, and create reports automatically' },
  { icon: '🔍', title: 'Research Assistant', desc: 'Deep dive into any topic with multi-source research and synthesis' },
  { icon: '💬', title: 'Customer Support', desc: 'Handle tickets, answer FAQs, and escalate when needed' },
  { icon: '📝', title: 'Content Creation', desc: 'Draft posts, emails, and documents in your voice' },
  { icon: '💰', title: 'Expense Tracking', desc: 'Log expenses, categorize spending, and generate reports' },
  { icon: '🎯', title: 'Task Management', desc: 'Track todos, set priorities, and never miss a deadline' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#ff6b35] to-orange-400 bg-clip-text text-transparent">Botlify</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#roles" className="text-gray-400 hover:text-white transition-colors">Roles</Link>
            <Link href="#compare" className="text-gray-400 hover:text-white transition-colors">Compare</Link>
            <Link href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</Link>
            <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/signup" className="px-6 py-2 bg-[#ff6b35] hover:bg-[#e55a2b] rounded-lg font-semibold transition-all">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#333] text-gray-400 text-sm mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Now accepting early access
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            An AI That Actually{' '}
            <span className="bg-gradient-to-r from-[#ff6b35] to-orange-400 bg-clip-text text-transparent">Remembers You</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            60+ business roles automated. Works 24/7. Learns and improves. 
            <strong className="text-white"> You own everything.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold rounded-xl transition-all text-lg shadow-lg shadow-[#ff6b35]/20">
              Start Free →
            </Link>
            <Link href="#compare" className="px-8 py-4 bg-[#141414] border border-[#333] text-white font-semibold rounded-xl transition-all text-lg hover:bg-[#222]">
              See Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* 60+ Business Roles */}
      <section id="roles" className="py-20 px-4 border-t border-[#333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">60+ Business Roles Automated</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            One AI assistant that handles every department
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {businessRoles.map((dept, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#141414] border border-[#333]">
                <h3 className="text-lg font-semibold text-[#ff6b35] mb-3">{dept.dept}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {dept.roles.map((role, j) => (
                    <li key={j}>• {role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section id="compare" className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            They Talk. <span className="bg-gradient-to-r from-[#ff6b35] to-orange-400 bg-clip-text text-transparent">We Work.</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">See how Botlify compares to the giants</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-4 px-4 text-center text-[#ff6b35] font-bold">Botlify</th>
                  <th className="py-4 px-4 text-center text-gray-400">ChatGPT</th>
                  <th className="py-4 px-4 text-center text-gray-400">Grok</th>
                  <th className="py-4 px-4 text-center text-gray-400">Gemini</th>
                  <th className="py-4 px-4 text-center text-gray-400">Copilot</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-[#222]">
                    <td className="py-4 px-4">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{row.us ? '✅' : '❌'}</td>
                    <td className="py-4 px-4 text-center">{row.chatgpt ? '✅' : '❌'}</td>
                    <td className="py-4 px-4 text-center">{row.grok ? '✅' : '❌'}</td>
                    <td className="py-4 px-4 text-center">{row.gemini ? '✅' : '❌'}</td>
                    <td className="py-4 px-4 text-center">{row.copilot ? '✅' : '❌'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Can Botlify Do?</h2>
          <p className="text-gray-400 text-center mb-12">Real automations, real results</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#141414] border border-[#333] hover:border-[#ff6b35]/50 transition-all">
                <div className="text-4xl mb-4">{uc.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{uc.title}</h3>
                <p className="text-gray-400 text-sm">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Honest Pricing</h2>
          <p className="text-gray-400 mb-12">Pay for the platform. Bring your own AI keys (BYOK).</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-[#141414] border border-[#333]">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="text-left text-gray-400 text-sm space-y-2 mb-6">
                <li>✓ 1 channel (Telegram or Discord)</li>
                <li>✓ Basic skills & automations</li>
                <li>✓ Memory & context</li>
                <li>✓ BYOK (bring your own keys)</li>
              </ul>
              <Link href="/signup" className="block w-full py-3 bg-[#333] hover:bg-[#444] rounded-lg font-semibold transition-all">
                Get Started
              </Link>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-b from-[#ff6b35]/20 to-[#141414] border border-[#ff6b35]/50 scale-105">
              <div className="text-xs text-[#ff6b35] font-semibold mb-2">MOST POPULAR</div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="text-left text-gray-400 text-sm space-y-2 mb-6">
                <li>✓ All channels</li>
                <li>✓ All skills & automations</li>
                <li>✓ Advanced memory</li>
                <li>✓ Research assistant</li>
                <li>✓ Priority support</li>
              </ul>
              <Link href="/signup" className="block w-full py-3 bg-[#ff6b35] hover:bg-[#e55a2b] rounded-lg font-semibold transition-all">
                Get Started
              </Link>
            </div>
            
            <div className="p-8 rounded-xl bg-[#141414] border border-[#333]">
              <h3 className="text-xl font-semibold mb-2">Team</h3>
              <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="text-left text-gray-400 text-sm space-y-2 mb-6">
                <li>✓ Everything in Pro</li>
                <li>✓ Multi-user access</li>
                <li>✓ Shared memory</li>
                <li>✓ Team automations</li>
                <li>✓ Dedicated support</li>
              </ul>
              <Link href="/signup" className="block w-full py-3 bg-[#333] hover:bg-[#444] rounded-lg font-semibold transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Work?</h2>
          <p className="text-gray-400 mb-8">Join thousands who&apos;ve upgraded to an AI that actually delivers.</p>
          <Link href="/signup" className="inline-block px-8 py-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold rounded-xl transition-all text-lg shadow-lg shadow-[#ff6b35]/20">
            Start Free Today →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">© 2026 Botlify. All rights reserved.</div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="https://twitter.com/botlifyai" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://discord.gg/botlify" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}