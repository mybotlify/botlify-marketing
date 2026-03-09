'use client';

export default function ContactForm() {
  return (
    <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8">
      <h2 className="mb-6 text-xl font-semibold">Send a Message</h2>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We'll get back to you.");
          (e.target as HTMLFormElement).reset();
        }}
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm text-white/60">Name</label>
          <input 
            type="text" 
            required 
            placeholder="Your name"
            className="w-full py-3.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-inherit text-base focus:outline-none focus:border-brand-purple/50"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 text-sm text-white/60">Email</label>
          <input 
            type="email" 
            required 
            placeholder="you@email.com"
            className="w-full py-3.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-inherit text-base focus:outline-none focus:border-brand-purple/50"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 text-sm text-white/60">Message</label>
          <textarea 
            required 
            placeholder="What's on your mind?"
            className="w-full py-3.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-inherit text-base focus:outline-none focus:border-brand-purple/50 min-h-[150px] resize-y"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full py-4 bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white border-none rounded-xl font-semibold text-base cursor-pointer shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}