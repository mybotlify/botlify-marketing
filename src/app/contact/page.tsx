import Link from 'next/link';
import ContactForm from './contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="max-w-2xl mx-auto px-8 pt-32 pb-16">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-6xl font-bold text-center mb-0 bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
            Get in Touch
          </h1>
        </section>
        
        <p className="text-white/60 text-center mb-12 text-lg">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
        
        {/* Contact Options */}
        <div className="grid gap-4 mb-12">
          <Link 
            href="mailto:mybotlify@gmail.com" 
            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 text-white no-underline transition-all duration-300 hover:border-brand-purple/30 hover:translate-x-1 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center text-2xl">
              📧
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Email Us</h3>
              <p className="text-white/60 text-sm m-0">mybotlify@gmail.com</p>
            </div>
          </Link>
          
          <Link 
            href="https://twitter.com/botlifyai" 
            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 text-white no-underline transition-all duration-300 hover:border-brand-purple/30 hover:translate-x-1 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center text-2xl">
              𝕏
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Twitter / X</h3>
              <p className="text-white/60 text-sm m-0">@botlifyai — DMs open</p>
            </div>
          </Link>
          
          <Link 
            href="https://github.com/botlifyai" 
            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 text-white no-underline transition-all duration-300 hover:border-brand-purple/30 hover:translate-x-1 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center text-2xl">
              🐙
            </div>
            <div>
              <h3 className="mb-1 font-semibold">GitHub</h3>
              <p className="text-white/60 text-sm m-0">Report issues or contribute</p>
            </div>
          </Link>
        </div>
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}