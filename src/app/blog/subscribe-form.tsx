'use client';

export default function SubscribeForm() {
  return (
    <div className="max-w-lg mx-auto px-8 pb-16">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">Stay Updated</h2>
        <p className="text-white/60 mb-6">Get notified when we publish new posts</p>
        <form 
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks!');
          }}
        >
          <input 
            type="email" 
            placeholder="you@email.com" 
            required
            className="flex-1 px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-brand-purple/50 transition-colors"
          />
          <button 
            type="submit"
            className="bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-brand-orange/25 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}