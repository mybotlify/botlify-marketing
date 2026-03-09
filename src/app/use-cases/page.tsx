import Link from 'next/link'

type Avatar = {
  name: string
  role: string
}

const avatars: Avatar[] = [
  {name: "Alex Smith", role: "Entrepreneur"},
  {name: "Beth Johnson", role: "Designer"},
  {name: "Carlos Rodriguez", role: "Developer"},
  {name: "Diana Chen", role: "Marketing"},
  {name: "Erik Larsson", role: "Consultant"},
  {name: "Fiona O'Brien", role: "Writer"},
  {name: "George Kim", role: "Engineer"},
  {name: "Hannah Davis", role: "Teacher"},
  {name: "Isaac Martinez", role: "Freelancer"},
  {name: "Julia Wilson", role: "Manager"},
  {name: "Kevin Brown", role: "Analyst"},
  {name: "Lisa Thompson", role: "Researcher"},
  {name: "Michael Lee", role: "Founder"},
  {name: "Nina Patel", role: "Designer"},
  {name: "Oscar Garcia", role: "Developer"},
  {name: "Priya Sharma", role: "Product"},
  {name: "Quinn Taylor", role: "Sales"},
  {name: "Rachel Green", role: "HR"},
  {name: "Sam Walker", role: "Finance"},
  {name: "Tina Anderson", role: "Operations"},
  {name: "Uma Krishnan", role: "Data Science"},
  {name: "Victor Santos", role: "Security"},
  {name: "Wendy Liu", role: "Support"},
  {name: "Xavier Moore", role: "Legal"},
  {name: "Yuki Tanaka", role: "Creative"},
  {name: "Zara Ahmed", role: "Strategy"},
  {name: "Adam Hill", role: "Engineering"},
  {name: "Bella Ross", role: "Design"},
  {name: "Chris Evans", role: "Marketing"},
  {name: "Dana White", role: "Sales"},
  {name: "Ethan Hunt", role: "Operations"},
  {name: "Faith Morgan", role: "HR"},
  {name: "Grant Wood", role: "Finance"},
  {name: "Holly Reed", role: "Product"},
  {name: "Ivan Petrov", role: "Developer"},
  {name: "Jane Foster", role: "Research"},
  {name: "Kyle Brooks", role: "Support"},
  {name: "Luna Hayes", role: "Design"},
  {name: "Max Cooper", role: "Engineering"},
  {name: "Nora Bell", role: "Marketing"},
  {name: "Owen Price", role: "Sales"},
  {name: "Paige Turner", role: "Content"},
  {name: "Reed Murphy", role: "DevOps"},
  {name: "Sara Blake", role: "Analytics"},
  {name: "Troy Baker", role: "QA"},
  {name: "Vera Stone", role: "UX"},
  {name: "Wade Palmer", role: "Backend"},
  {name: "Xena Cross", role: "Frontend"},
  {name: "York Adams", role: "Mobile"},
  {name: "Zoe Clark", role: "AI/ML"},
  {name: "Aaron West", role: "Cloud"},
  {name: "Bianca Ford", role: "Security"},
  {name: "Caleb Young", role: "Data"},
  {name: "Daisy Lane", role: "Growth"},
  {name: "Eli North", role: "Partnerships"}
]

export default function UseCasesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-brand-gray-700">
        <Link href="/" className="text-2xl font-bold text-white hover:text-brand-blue-400 transition-colors">
          🤖 Botlify
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-brand-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/use-cases" className="text-brand-gray-400 hover:text-white transition-colors">
            Use Cases
          </Link>
          <Link href="/features" className="text-brand-gray-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/why-botlify" className="text-brand-gray-400 hover:text-white transition-colors">
            Why Botlify
          </Link>
          <a 
            href="https://dashboard.botlify.ai" 
            className="text-brand-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dashboard
          </a>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-4 text-center">Meet Our Users</h1>
        <p className="text-brand-gray-400 text-center mb-16 text-xl">
          55 people already using Botlify to transform their daily lives
        </p>
        
        {/* Avatars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mb-16">
          {avatars.map((avatar, index) => {
            const avatarNumber = String(index + 1).padStart(2, '0')
            
            return (
              <div 
                key={`${avatar.name}-${index}`}
                className="text-center p-6 bg-brand-gray-900 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1 hover:bg-brand-gray-800"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-brand-blue flex items-center justify-center text-white text-2xl font-bold">
                  {avatar.name[0]}
                </div>
                <div className="font-semibold mb-1">{avatar.name}</div>
                <div className="text-brand-gray-400 text-sm">{avatar.role}</div>
              </div>
            )
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 p-12 bg-gradient-to-br from-brand-dark-secondary to-brand-dark rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Join Them Today</h2>
          <p className="text-brand-gray-400 mb-6">
            Start your journey with an AI that actually remembers you.
          </p>
          <a
            href="https://dashboard.botlify.ai"
            className="inline-block px-8 py-3 bg-brand-blue hover:bg-brand-blue-600 text-white font-semibold rounded-lg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Use Cases | Botlify',
  description: '55 people already using Botlify to transform their daily lives. Meet our users and join them today.',
}