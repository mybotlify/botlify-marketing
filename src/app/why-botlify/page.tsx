import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Botlify? — 60+ Ways AI Can Transform Your Life & Business',
  description: 'Discover 60+ real examples of how Botlify helps everyone from busy parents to business architects. Personal productivity meets AI system design.',
}

export default function WhyBotlifyPage() {
  return (
    <>
      {/* Gradient orbs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-orange to-red-500 rounded-full blur-[150px] opacity-30 pointer-events-none z-0 -translate-y-[200px] translate-x-[150px]" />
      <div className="fixed bottom-[40%] left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-[150px] opacity-30 pointer-events-none z-0 -translate-x-[200px]" />
      <div className="fixed bottom-0 right-[20%] w-[400px] h-[400px] bg-gradient-to-br from-green-500 to-yellow-500 rounded-full blur-[150px] opacity-30 pointer-events-none z-0 -translate-y-[100px]" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-8 md:px-4">
        {/* Hero */}
        <section className="text-center py-20 md:py-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            60+ Ways <span className="bg-gradient-to-br from-brand-orange to-red-500 bg-clip-text text-transparent">Botlify</span> Helps Everyone
          </h1>
          <p className="text-xl text-brand-muted max-w-[700px] mx-auto mb-8">
            Real examples of how an AI that actually remembers you can transform daily life. From busy parents to health enthusiasts, entrepreneurs to business architects building the future.
          </p>
          
          <div className="flex justify-center gap-12 md:gap-6 mt-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-br from-brand-orange to-red-500 bg-clip-text text-transparent">60+</div>
              <div className="text-brand-muted text-sm">Real Use Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-br from-brand-orange to-red-500 bg-clip-text text-transparent">11</div>
              <div className="text-brand-muted text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-br from-brand-orange to-red-500 bg-clip-text text-transparent">∞</div>
              <div className="text-brand-muted text-sm">Memory</div>
            </div>
          </div>
        </section>
        
        {/* HEALTH & WELLNESS */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl">🏥</div>
            <h2 className="text-3xl md:text-2xl font-bold">Health & Wellness</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Stay on top of your health without the overwhelm. Botlify monitors, remembers, and connects the dots.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#1</span>
                <span>Track Symptoms Over Time</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Log headaches, energy levels, or any symptom. Botlify spots patterns you'd miss.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Show me my headache patterns for the last 3 months"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#2</span>
                <span>Medication Reminders</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Never forget a dose. Botlify reminds you and tracks compliance.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Remind me to take my vitamins at 8am and log when I do"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#3</span>
                <span>Health Content Research</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Search your health content sources and research by topic instead of manually browsing hours of material.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Search my health podcasts for information about creatine timing"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#4</span>
                <span>Supplement Stack Management</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Track what you're taking, interactions, and whether it's actually helping.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Am I still taking magnesium? When did I start?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#5</span>
                <span>Doctor Visit Prep</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Compile symptoms, questions, and history before appointments.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Prepare a summary of my symptoms for my doctor visit tomorrow"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#6</span>
                <span>Sleep Pattern Analysis</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Connect sleep quality to daily habits and find what actually helps.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "How does my sleep compare when I exercise vs skip?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#7</span>
                <span>Workout Logging</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Log workouts naturally and track progress over time.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Log that I did 3x10 squats at 185lbs today"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#8</span>
                <span>Food & Mood Correlation</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Track what you eat and how you feel. Spot food sensitivities.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Do I feel worse on days I eat dairy?"
              </div>
            </div>
          </div>
        </section>
        
        {/* EMAIL & COMMUNICATION */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl">📬</div>
            <h2 className="text-3xl md:text-2xl font-bold">Email & Communication</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Reclaim your inbox. Botlify reads, prioritizes, and helps you respond—in your voice.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#9</span>
                <span>Daily Email Digest</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Get a morning summary of what actually needs attention.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What's urgent in my inbox today?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#10</span>
                <span>Draft Responses</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Botlify knows your tone and can draft replies that sound like you.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Draft a polite decline to that vendor pitch"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#11</span>
                <span>Follow-Up Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Never let important threads slip. Get reminded when someone hasn't replied.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Remind me if John doesn't respond by Friday"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#12</span>
                <span>Email Search</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Find that email from 6 months ago without scrolling forever.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Find the email where Sarah sent me the contract"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#13</span>
                <span>Unsubscribe Management</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Identify newsletters you never read and clean up subscriptions.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Which newsletters have I not opened in 3 months?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#14</span>
                <span>Important Contact Alerts</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Get notified immediately when certain people email you.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Alert me instantly when my boss emails"
              </div>
            </div>
          </div>
        </section>
        
        {/* CALENDAR & TIME */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl">📅</div>
            <h2 className="text-3xl md:text-2xl font-bold">Calendar & Time Management</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Your AI knows your schedule, energy patterns, and priorities. Meetings become manageable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#15</span>
                <span>Daily Briefing</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Start each day knowing exactly what's ahead.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What's on my calendar today and what should I prep for?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#16</span>
                <span>Meeting Context</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Get background on who you're meeting and what you discussed last time.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What did I discuss with the marketing team last meeting?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#17</span>
                <span>Smart Scheduling</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Find optimal times based on your energy and existing commitments.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "When's the best time for a deep work block this week?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#18</span>
                <span>Travel Time Buffer</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Automatically account for commute time between meetings.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Add travel time before my downtown meetings"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#19</span>
                <span>Deadline Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                See upcoming deadlines across all projects in one view.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What deadlines do I have in the next 2 weeks?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#20</span>
                <span>Recurring Event Management</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Handle changes to recurring meetings without the headache.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Move my weekly team sync to Thursdays starting next month"
              </div>
            </div>
          </div>
        </section>
        
        {/* FAMILY & HOME */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-2xl">👨‍👩‍👧‍👦</div>
            <h2 className="text-3xl md:text-2xl font-bold">Family & Parenting</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Be the organized parent without the mental load. Botlify remembers so you don't have to.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#21</span>
                <span>Kids' Activity Schedules</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Track soccer practice, piano lessons, and playdates in one place.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "When is Emma's soccer practice this week?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#22</span>
                <span>School Events</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Never miss picture day, conferences, or field trips.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What school events are coming up this month?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#23</span>
                <span>Birthday & Gift Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Remember everyone's birthday and what gifts they'd actually like.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "When is my nephew's birthday and what did I get him last year?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#24</span>
                <span>Meal Planning</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Plan weekly meals accounting for everyone's preferences and schedules.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Plan dinners for this week—remember Jake doesn't eat fish"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#25</span>
                <span>Carpool Coordination</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Track whose turn it is and coordinate with other parents.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Whose turn is it to drive to practice Tuesday?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#26</span>
                <span>Family Health Records</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Organize your family's health information from your trusted sources and providers.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Find our pediatrician's contact info and Mia's last checkup date"
              </div>
            </div>
          </div>
        </section>
        
        {/* WORK & BUSINESS */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center text-2xl">💼</div>
            <h2 className="text-3xl md:text-2xl font-bold">Work & Business</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Never lose context. Botlify remembers decisions, tracks projects, and keeps you focused.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#27</span>
                <span>Project Status Updates</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Get instant status on any project without digging through tools.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Where are we on the website redesign?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#28</span>
                <span>Decision History</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Remember why you made decisions weeks or months ago.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Why did we decide against the blue design?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#29</span>
                <span>Client Context</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Know a client's history, preferences, and past conversations before any call.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Brief me on Acme Corp before my call"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#30</span>
                <span>Todo Prioritization</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Cut through the noise and focus on what actually matters today.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What should I focus on today based on my deadlines?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#31</span>
                <span>Meeting Notes</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Capture action items and decisions without manual note-taking.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What were the action items from yesterday's standup?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#32</span>
                <span>Business Metrics Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Log and track key metrics over time.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "How does this month's revenue compare to last month?"
              </div>
            </div>
          </div>
        </section>
        
        {/* FINANCE */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-2xl">💰</div>
            <h2 className="text-3xl md:text-2xl font-bold">Finance & Money</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Stay on top of bills, subscriptions, and spending without spreadsheet hell.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#33</span>
                <span>Bill Reminders</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Never miss a payment with smart reminders.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What bills are due this week?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#34</span>
                <span>Subscription Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Know exactly what you're paying for monthly.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "List all my active subscriptions and what they cost"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#35</span>
                <span>Expense Logging</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Log expenses naturally and categorize automatically.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Log $45 for dinner with clients"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#36</span>
                <span>Budget Check-Ins</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Regular updates on spending vs. budget.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "How am I doing on my dining out budget this month?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#37</span>
                <span>Tax Document Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Track what documents you have and what you're waiting for.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What tax documents am I still waiting for?"
              </div>
            </div>
          </div>
        </section>
        
        {/* HOME & MAINTENANCE */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl">🏠</div>
            <h2 className="text-3xl md:text-2xl font-bold">Home & Maintenance</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Keep your home running smoothly with timely reminders and organized records.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#38</span>
                <span>Maintenance Reminders</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                HVAC filters, oil changes, appliance care—never forget again.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "When did I last change the furnace filter?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#39</span>
                <span>Contractor Contacts</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Remember who fixed what and whether they were good.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Who was that plumber we used last year?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#40</span>
                <span>Warranty Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Know what's still under warranty before you pay for repairs.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Is the dishwasher still under warranty?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#41</span>
                <span>Grocery Lists</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Build and manage lists that learn your preferences.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Add milk to the grocery list and remind me we're low on coffee"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#42</span>
                <span>Home Project Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Keep track of renovation ideas, quotes, and progress.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What were the quotes we got for the deck?"
              </div>
            </div>
          </div>
        </section>
        
        {/* LEARNING & GROWTH */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl">📚</div>
            <h2 className="text-3xl md:text-2xl font-bold">Learning & Personal Growth</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Never lose an insight. Botlify captures ideas and helps you learn continuously.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#43</span>
                <span>Book Notes</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Capture key insights from books you're reading.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What were my main takeaways from Atomic Habits?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#44</span>
                <span>Idea Capture</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Log ideas whenever they strike. Find them later when relevant.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Save this business idea: subscription service for..."
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#45</span>
                <span>Learning Progress</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Track courses, skills, and progress over time.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "How far am I in my Spanish course?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#46</span>
                <span>Quote Collection</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Save quotes that resonate and surface them when needed.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Find that quote about persistence I saved"
              </div>
            </div>
          </div>
        </section>
        
        {/* SOCIAL & RELATIONSHIPS */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-2xl">💬</div>
            <h2 className="text-3xl md:text-2xl font-bold">Social & Relationships</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            Be a better friend, partner, and colleague by remembering what matters to people.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#47</span>
                <span>Contact Context</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Remember details about people—their kids' names, interests, last conversation.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "What did Mark say his new job was?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#48</span>
                <span>Follow-Up Reminders</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Stay in touch with people who matter without it falling through the cracks.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Remind me to check in with Sarah about her interview"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#49</span>
                <span>Event Planning</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Coordinate gatherings with context on everyone's preferences.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Plan a dinner—remember Tom is vegetarian"
              </div>
            </div>
          </div>
        </section>
        
        {/* TRAVEL */}
        <section className="py-12 border-t border-brand-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl">✈️</div>
            <h2 className="text-3xl md:text-2xl font-bold">Travel & Adventures</h2>
          </div>
          <p className="text-brand-muted mb-8 max-w-[700px]">
            From trip planning to loyalty programs, keep all your travel organized.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#50</span>
                <span>Trip Planning</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Research destinations and build itineraries that match your style.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Plan a 5-day Italy trip—we like food tours and hate crowds"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#51</span>
                <span>Loyalty Program Tracking</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Know your points, status, and expiration dates across programs.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "How many airline miles do I have and when do they expire?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#52</span>
                <span>Packing Lists</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Generate packing lists based on destination, weather, and trip type.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Make a packing list for a week in Colorado in January"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#53</span>
                <span>Travel Document Management</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Track passport expiration, visa requirements, and important docs.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "When does my passport expire? Do I need a visa for Japan?"
              </div>
            </div>
          </div>
        </section>
        
        {/* FOR BUILDERS & BUSINESSES */}
        <section className="py-12 border-t border-brand-border">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">For Builders & Businesses</h2>
            <p className="text-brand-muted max-w-[700px] mx-auto">
              Ready to go deeper? Botlify isn't just about personal productivity—it's about understanding <strong>AI System Architecture</strong>. 
              The emerging skill of designing systems where AI, automation, and humans work together.
            </p>
          </div>
          
          <div className="mb-8 p-6 bg-brand-orange/10 border border-brand-orange/30 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">The 2027 Market Opportunity</h3>
            <p className="text-brand-muted text-sm">
              By 2027, every mid-sized business will need AI system architects. People who understand business processes, 
              data flow, and system design—not necessarily Python. <strong>The people figuring this out now will own the market.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#54</span>
                <span>AI System Architecture</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Design systems where AI handles the right parts, humans handle the rest. A thinking skill, not a technical one.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Map our customer support process and identify where AI can help"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#55</span>
                <span>AI Training Data Curation</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Be a librarian for AI. Curate, structure, and maintain data that makes AI useful for specific businesses.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Organize our client case studies so AI can recommend solutions"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#56</span>
                <span>No-Code AI Workflows</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Build complex AI-powered workflows without code. Pull data → process with AI → route based on output.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Create a workflow that processes support tickets and routes urgent ones"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#57</span>
                <span>AI Output Quality Control</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Evaluate AI output quality at scale. Catch errors AI makes and build systems for consistent quality.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Review AI-generated proposals before they go to clients"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#58</span>
                <span>Automation Maintenance</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Be a mechanic for automated systems. Audit, fix, and optimize automations over time.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Why is our lead scoring automation sending false positives?"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#59</span>
                <span>Context Engineering</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Beyond prompt engineering. Set up AI environments with all needed context. What separates tool-AI from team-member-AI.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Configure AI to know our brand voice, past campaigns, and customer segments"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#60</span>
                <span>AI-Human Workflow Design</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Design handoff workflows: AI → Human → AI → Human. Get both speed AND quality.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "AI first draft → human review → AI revisions → human approval"
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="flex items-center gap-2 mb-2">
                <span className="text-brand-orange text-sm">#61</span>
                <span>Business Process Mapping</span>
              </h3>
              <p className="text-brand-muted text-sm mb-3 m-0">
                Understand how information flows through your business and identify automation opportunities.
              </p>
              <div className="italic text-brand-fg mt-3 p-3 bg-brand-orange/10 rounded-lg text-sm">
                "Map our sales process from lead to close"
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Start Where You Are</h3>
            <p className="text-brand-muted text-sm">
              Every expert started as a beginner. Whether you're managing your personal life or building business systems, 
              Botlify helps you understand how AI, automation, and humans can work together effectively. 
              <strong>The principles are the same—only the scale changes.</strong>
            </p>
          </div>
        </section>
        
        {/* CTA */}
        <section className="text-center py-16 md:py-8 my-12 md:my-8 bg-gradient-to-br from-brand-orange/15 to-red-500/10 border border-brand-orange/30 rounded-[20px]">
          <h2 className="text-3xl mb-4">Ready to try it yourself?</h2>
          <p className="text-brand-muted mb-8">
            These aren't hypotheticals. Real people and businesses use Botlify every day for exactly these things. 
            Start with personal productivity or jump into AI system architecture—it's all connected.
          </p>
          <a href="https://app.botlify.ai" className="inline-block bg-brand-orange hover:bg-orange-500 text-white font-semibold text-lg py-4 px-8 rounded-lg transition-colors duration-200">
            Start Free →
          </a>
        </section>
      </div>
    </>
  )
}