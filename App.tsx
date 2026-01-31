
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Menu,
  X,
  MapPin,
  CheckCircle2,
  Mail,
  ArrowLeft,
  Users,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import AIChatbot from './components/AIChatbot';
import WhyAIPage from './components/WhyAIPage';
import LegalPage from './components/LegalPage';

export type View = 'home' | 'why-ai' | 'privacy' | 'terms';

// The updated Google Calendar Appointment Schedule link provided by the user
const CALENDAR_URL = "https://calendar.app.google/bNCvnDYgEzMrvvgm7";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'old' | 'ai'>('old');
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    setIsMenuOpen(false);
  };

  const handleGetDemo = () => {
    window.open(CALENDAR_URL, '_blank');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'why-ai':
        return <WhyAIPage onBack={() => navigateTo('home')} onGetDemo={handleGetDemo} />;
      case 'privacy':
        return <LegalPage type="privacy" onBack={() => navigateTo('home')} />;
      case 'terms':
        return <LegalPage type="terms" onBack={() => navigateTo('home')} />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="relative py-16 lg:py-28 overflow-hidden bg-slate-900 text-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                    <MapPin size={12} /> Serving New City, Nyack, & Nanuet
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    Stop Losing Jobs to <span className="text-blue-500">Voicemail.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                    Rockland County business owners: You work too hard to let leads slip through the cracks. Anthros Digital builds AI-powered websites that answer customer questions and capture jobs 24/7 while you're in the field.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleGetDemo}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-all group shadow-xl shadow-blue-600/10"
                    >
                      GET AN AI DEMO <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => navigateTo('why-ai')}
                      className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-bold text-lg border border-slate-700"
                    >
                      LEARN WHY AI?
                    </button>
                  </div>
                  <div className="mt-12 flex items-center gap-8 border-t border-slate-800 pt-8">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <img key={i} className="w-10 h-10 rounded-full border-2 border-slate-900" src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Local Owner" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-white">50+ Local Trades</span> in Rockland already automated
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Problem / Solution Section */}
            <section id="problem" className="py-24 bg-white text-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Old School vs. AI-Powered</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Is your current website an employee that makes you money, or just an expensive digital brochure?</p>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
                  <div className={`flex-1 p-8 rounded-2xl border-2 transition-all cursor-pointer ${activeTab === 'old' ? 'border-red-200 bg-red-50/30' : 'border-slate-100 hover:border-slate-200'}`} onClick={() => setActiveTab('old')}>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                        <Phone size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100 px-2 py-1 rounded">The Old Way</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 italic text-slate-900">"The Brochure"</h3>
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex gap-3"><X className="text-red-500 shrink-0" size={20} /><span>Customer lands on your site at 8 PM, finds a static form, and leaves.</span></li>
                      <li className="flex gap-3"><X className="text-red-500 shrink-0" size={20} /><span>They have a simple question but can't find the answer—so they call the next guy.</span></li>
                      <li className="flex gap-3"><X className="text-red-500 shrink-0" size={20} /><span>You spend your Sunday night returning voicemails instead of being with family.</span></li>
                    </ul>
                  </div>
                  <div className="hidden lg:flex items-center justify-center"><Zap size={40} className="text-blue-500 fill-blue-500/20" /></div>
                  <div className={`flex-1 p-8 rounded-2xl border-2 transition-all cursor-pointer ${activeTab === 'ai' ? 'border-blue-200 bg-blue-50/30 ring-4 ring-blue-500/5' : 'border-slate-100 hover:border-slate-200'}`} onClick={() => setActiveTab('ai')}>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20"><Zap size={24} /></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-2 py-1 rounded">The AI Way</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">"The 24/7 Employee"</h3>
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex gap-3"><CheckCircle2 className="text-blue-500 shrink-0" size={20} /><span>AI Agent answers FAQs instantly, building trust before you even wake up.</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="text-blue-500 shrink-0" size={20} /><span>Qualifies the lead and books the estimate based on your service area.</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="text-blue-500 shrink-0" size={20} /><span>Sends an SMS to your phone immediately so you can strike while the iron's hot.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-slate-50 border-y border-slate-200 text-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Boots-on-the-Ground Tech Solutions</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">We don't build sites for Silicon Valley. We build them for plumbers in New City and HVAC techs in Pearl River. Tech that works as hard as you do.</p>
                    <div className="space-y-6">
                      <div className="flex gap-5 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <div className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><Smartphone size={24} /></div>
                        <div><h4 className="text-xl font-bold mb-2">High-Speed Mobile Sites</h4><p className="text-slate-600">Most customers search for you from a job site or their truck. Our sites load in under 1 second on any device.</p></div>
                      </div>
                      <div className="flex gap-5 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <div className="shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center"><MessageSquare size={24} /></div>
                        <div><h4 className="text-xl font-bold mb-2">24/7 AI Customer Support</h4><p className="text-slate-600">Powered by Google Gemini. It knows your pricing, your services, and your Rockland service area inside and out.</p></div>
                      </div>
                      <div className="flex gap-5 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <div className="shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center"><Zap size={24} /></div>
                        <div><h4 className="text-xl font-bold mb-2">Lead-to-SMS Automation</h4><p className="text-slate-600">Stop checking emails. Get a text the second a new job comes in. Response time is everything in the trades.</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative bg-slate-900 rounded-3xl p-4 shadow-2xl border-8 border-slate-800 transform rotate-2">
                      <img className="rounded-2xl" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Dashboard" />
                      <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform -rotate-3 hidden sm:block">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"><Phone size={18} /></div>
                          <div><p className="text-xs text-slate-500 font-bold uppercase">New Lead Captured</p><p className="font-bold">John D. - HVAC Repair</p></div>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-600 italic">"Captured via AI Intake Agent at 11:42 PM"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => navigateTo('home')}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">A</div>
              <div>
                <span className="text-xl font-extrabold text-slate-900 block leading-none">ANTHROS DIGITAL</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-600 font-bold">AI Web Solutions</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('home')} className={`text-sm font-semibold transition-colors ${currentView === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Home</button>
              <button onClick={() => navigateTo('why-ai')} className={`text-sm font-semibold transition-colors ${currentView === 'why-ai' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Why AI?</button>
              <button onClick={handleGetDemo} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95">GET A DEMO</button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">{isMenuOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 animate-in fade-in slide-in-from-top-4">
            <button onClick={() => navigateTo('home')} className="block w-full text-left text-lg font-semibold py-2">Home</button>
            <button onClick={() => navigateTo('why-ai')} className="block w-full text-left text-lg font-semibold py-2">Why AI?</button>
            <button onClick={handleGetDemo} className="w-full bg-blue-600 text-white py-3 rounded-md font-bold">GET A DEMO</button>
          </div>
        )}
      </nav>

      {renderContent()}

      {/* CTA Section (Only on Home/Why-AI) */}
      {['home', 'why-ai'].includes(currentView) && (
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-3xl"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to see your business on autopilot?</h2>
            <p className="text-xl text-blue-100 mb-12">Don't take our word for it. Let us show you exactly how an AI Intake Agent would handle your business's specific customer FAQs and lead capture.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleGetDemo} className="bg-white text-blue-600 px-10 py-5 rounded-md font-bold text-xl shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-95">GET MY AI DEMO <ArrowRight size={24} /></button>
              <a href="tel:9296101826" className="flex items-center justify-center gap-3 text-white font-bold text-xl px-10 py-5 border-2 border-white/30 rounded-md hover:bg-white/10"><Phone size={24} /> (929) 610-1826</a>
            </div>
            <p className="mt-8 text-blue-200 text-sm font-semibold uppercase tracking-widest">Proudly based in Rockland County, NY</p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-lg">A</div>
                <div><span className="text-lg font-extrabold block leading-none">ANTHROS DIGITAL</span><span className="text-[8px] uppercase tracking-widest text-blue-400 font-bold">AI Web Solutions</span></div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Premium AI-powered web design for local Rockland trade businesses. 24/7 lead generation that works as hard as you do.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-blue-500">Contact Us</h4>
              <ul className="space-y-3">
                <li><a href="tel:9296101826" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"><Phone size={16} className="text-blue-500" /> (929) 610-1826</a></li>
                <li><a href="mailto:anthrosdigitalweb@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"><Mail size={16} className="text-blue-500" /> anthrosdigitalweb@gmail.com</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-blue-500">Service Area</h4>
              <p className="text-slate-300 text-sm">Serving all of Rockland County, including New City, Nyack, Pearl River, Nanuet, and Suffern.</p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-8 text-xs font-medium text-slate-500">
              <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => navigateTo('terms')} className="hover:text-white transition-colors">Terms of Service</button>
            </div>
            <p className="text-xs text-slate-500">© 2024 Anthros Digital AI web Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <AIChatbot />
    </div>
  );
};

export default App;
