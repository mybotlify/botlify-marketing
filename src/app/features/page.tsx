export default function FeaturesPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-brand-fg">Features</h1>
        <p className="text-brand-muted text-xl">
          Everything Botlify can do to make your life easier
        </p>
      </div>
      
      {/* Health & Wellness */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-brand-border flex items-center gap-3 text-brand-fg">
          ❤️ Health &amp; Wellness
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Medication Reminders
            </h3>
            <p className="text-brand-muted text-sm">Never miss a dose with smart reminders</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Symptom Tracking
            </h3>
            <p className="text-brand-muted text-sm">Log and analyze health patterns over time</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Appointment Management
            </h3>
            <p className="text-brand-muted text-sm">Track doctor visits and follow-ups</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Health Goals
            </h3>
            <p className="text-brand-muted text-sm">Set and track wellness objectives</p>
          </div>
        </div>
      </div>
      
      {/* Email Management */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-brand-border flex items-center gap-3 text-brand-fg">
          📧 Email Management
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Smart Inbox
            </h3>
            <p className="text-brand-muted text-sm">AI-powered email prioritization</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Draft Assistance
            </h3>
            <p className="text-brand-muted text-sm">Help composing professional emails</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Follow-up Tracking
            </h3>
            <p className="text-brand-muted text-sm">Never let important threads slip</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Email Summaries
            </h3>
            <p className="text-brand-muted text-sm">Get digests of long email chains</p>
          </div>
        </div>
      </div>
      
      {/* Calendar & Time */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-brand-border flex items-center gap-3 text-brand-fg">
          📅 Calendar &amp; Time
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Smart Scheduling
            </h3>
            <p className="text-brand-muted text-sm">Find optimal meeting times automatically</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Event Reminders
            </h3>
            <p className="text-brand-muted text-sm">Contextual alerts before events</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Time Blocking
            </h3>
            <p className="text-brand-muted text-sm">Protect focus time intelligently</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Daily Briefings
            </h3>
            <p className="text-brand-muted text-sm">Morning overview of your day</p>
          </div>
        </div>
      </div>
      
      {/* Family Coordination */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-brand-border flex items-center gap-3 text-brand-fg">
          👨‍👩‍👧‍👦 Family Coordination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Shared Calendars
            </h3>
            <p className="text-brand-muted text-sm">Keep the whole family in sync</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Chore Management
            </h3>
            <p className="text-brand-muted text-sm">Fair distribution and tracking</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              School Events
            </h3>
            <p className="text-brand-muted text-sm">Never miss a parent-teacher night</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Meal Planning
            </h3>
            <p className="text-brand-muted text-sm">Weekly menus and grocery lists</p>
          </div>
        </div>
      </div>
      
      {/* Business & Projects */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-brand-border flex items-center gap-3 text-brand-fg">
          💼 Business &amp; Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Task Management
            </h3>
            <p className="text-brand-muted text-sm">Organize work with AI assistance</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Meeting Notes
            </h3>
            <p className="text-brand-muted text-sm">Automatic summaries and action items</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Project Tracking
            </h3>
            <p className="text-brand-muted text-sm">Stay on top of deadlines</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Client Management
            </h3>
            <p className="text-brand-muted text-sm">Remember important details</p>
          </div>
        </div>
      </div>
      
      {/* News & Research */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-brand-border flex items-center gap-3 text-brand-fg">
          📰 News &amp; Research
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Personalized News
            </h3>
            <p className="text-brand-muted text-sm">Topics that matter to you</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Research Assistant
            </h3>
            <p className="text-brand-muted text-sm">Deep dives on any topic</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Trend Alerts
            </h3>
            <p className="text-brand-muted text-sm">Stay ahead of your industry</p>
          </div>
          <div className="p-5 bg-brand-bg/50 rounded-lg border-l-4 border-brand-accent">
            <h3 className="text-base font-medium mb-2 flex items-center text-brand-fg">
              <span className="text-green-500 mr-2">✓</span>
              Summary Digests
            </h3>
            <p className="text-brand-muted text-sm">Quick overviews of complex topics</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center mt-16 p-12 bg-gradient-to-br from-brand-bg/70 to-brand-accent/10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-2 text-brand-fg">Ready to Get Started?</h2>
        <p className="text-brand-muted mb-6">Join thousands using Botlify daily.</p>
        <a
          href="https://dashboard.botlify.ai"
          className="inline-block px-8 py-3 bg-brand-accent hover-bg-accent text-white rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/40"
        >
          Try Botlify Free
        </a>
      </div>
    </div>
  );
}