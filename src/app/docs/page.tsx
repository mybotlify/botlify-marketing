export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-brand-fg">Documentation</h1>
        <p className="text-brand-muted text-xl">
          Everything you need to get started with Botlify
        </p>
      </div>
      
      {/* Documentation Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        <a
          href="#quickstart"
          className="block p-8 bg-brand-bg/50 backdrop-blur-xl border border-brand-border rounded-2xl text-center transition-all duration-300 hover:border-brand-accent/30 hover:-translate-y-1 group"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2 text-brand-fg">Quick Start</h3>
          <p className="text-brand-muted text-sm">Get up and running in 5 minutes</p>
        </a>
        
        <a
          href="https://dashboard.botlify.ai/agents.html"
          className="block p-8 bg-brand-bg/50 backdrop-blur-xl border border-brand-border rounded-2xl text-center transition-all duration-300 hover:border-brand-accent/30 hover:-translate-y-1 group"
        >
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2 text-brand-fg">Agents Guide</h3>
          <p className="text-brand-muted text-sm">Meet the 13 specialized agents</p>
        </a>
        
        <a
          href="https://dashboard.botlify.ai/chat.html"
          className="block p-8 bg-brand-bg/50 backdrop-blur-xl border border-brand-border rounded-2xl text-center transition-all duration-300 hover:border-brand-accent/30 hover:-translate-y-1 group"
        >
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-semibold mb-2 text-brand-fg">Chat Interface</h3>
          <p className="text-brand-muted text-sm">How to talk to Botlify</p>
        </a>
        
        <a
          href="https://dashboard.botlify.ai/memory.html"
          className="block p-8 bg-brand-bg/50 backdrop-blur-xl border border-brand-border rounded-2xl text-center transition-all duration-300 hover:border-brand-accent/30 hover:-translate-y-1 group"
        >
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-semibold mb-2 text-brand-fg">Memory System</h3>
          <p className="text-brand-muted text-sm">How Botlify remembers you</p>
        </a>
        
        <a
          href="https://dashboard.botlify.ai/workflow.html"
          className="block p-8 bg-brand-bg/50 backdrop-blur-xl border border-brand-border rounded-2xl text-center transition-all duration-300 hover:border-brand-accent/30 hover:-translate-y-1 group"
        >
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2 text-brand-fg">Workflows</h3>
          <p className="text-brand-muted text-sm">Automate complex tasks</p>
        </a>
        
        <a
          href="https://dashboard.botlify.ai/integrations.html"
          className="block p-8 bg-brand-bg/50 backdrop-blur-xl border border-brand-border rounded-2xl text-center transition-all duration-300 hover:border-brand-accent/30 hover:-translate-y-1 group"
        >
          <div className="text-4xl mb-4">🔌</div>
          <h3 className="text-xl font-semibold mb-2 text-brand-fg">Integrations</h3>
          <p className="text-brand-muted text-sm">Connect your tools</p>
        </a>
      </div>
      
      {/* Quick Start Guide */}
      <section id="quickstart" className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-fg">Quick Start Guide</h2>
        
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand-fg">Create an Account</h3>
              <p className="text-brand-muted">
                Sign up at{" "}
                <a
                  href="https://dashboard.botlify.ai/signup.html"
                  className="text-brand-accent hover:underline"
                >
                  dashboard.botlify.ai
                </a>
                . It's free.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand-fg">Open the Chat</h3>
              <p className="text-brand-muted">
                Head to the chat interface and say hello. Botlify will introduce itself.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand-fg">Try Commands</h3>
              <p className="text-brand-muted">
                Explore agents with:{" "}
                <code className="bg-brand-bg/80 px-2 py-1 rounded text-brand-fg font-mono text-sm">
                  "What agents do you have?"
                </code>
              </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand-fg">Connect Integrations</h3>
              <p className="text-brand-muted">
                Connect Telegram, Google Calendar, or other services in Settings.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <div className="text-center mt-16 p-12 bg-gradient-to-br from-brand-bg/70 to-brand-accent/10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-2 text-brand-fg">Ready to Get Started?</h2>
        <p className="text-brand-muted mb-6">Join thousands using Botlify daily.</p>
        <a
          href="https://dashboard.botlify.ai"
          className="inline-block px-8 py-3 bg-brand-accent hover-bg-accent text-white rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/40"
        >
          Try Botlify Free →
        </a>
      </div>
    </div>
  );
}