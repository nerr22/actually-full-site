import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
// import HeroCanvas from './components/HeroCanvas'
import HeroTimeline from './components/HeroTimeline'

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How does Actually Health work?",
      answer: "Actually Health provides 24/7 virtual care through a dedicated team of nurse practitioners, doctors, and specialists. You can message your care team anytime, get prescriptions, order labs, and receive referrals—all through our messaging-first platform."
    },
    {
      question: "Do you accept insurance?",
      answer: "We don't take insurance, which means we work only for you. However, you can still use your insurance for prescriptions or labs, or pay affordable cash prices. Our membership model ensures transparent pricing without the complexity of insurance."
    },
    {
      question: "What's included in the membership?",
      answer: "Your membership includes unlimited virtual care consultations, messaging with your care team, prescription management, lab ordering, specialist referrals, and integration with your health data including past records, wearables, and genetics."
    },
    {
      question: "How quickly can I get care?",
      answer: "With Actually Health, you get 24/7 access to your care team. No waiting rooms, no scheduling delays—just message when you need care and get personalized responses from doctors who know your full health picture."
    },
    {
      question: "Can you help with chronic conditions?",
      answer: "Yes! Actually Health specializes in chronic condition management. Our team approach means multiple specialists work together to see your full health picture, not just disconnected snapshots. We provide comprehensive care plans tailored to your specific needs."
    },
    {
      question: "What makes Actually Health different?",
      answer: "We're designed by doctors and global health experts from Johns Hopkins, Weill Cornell, and the FDA. Every answer, prescription, and plan is reviewed to meet the highest standards of medical quality and safety. Plus, we work with all your health data to provide truly personalized care."
    }
  ]

  const leadershipTeam = [
    {
      name: "Noah Ullman",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    },
    {
      name: "Simon Mathews",
      role: "Co-Founder & COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    }
  ]

  const advisors = [
    {
      name: "Susan Monarez",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    },
    {
      name: "Janet Woodcock",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    },
    {
      name: "Milind Kamkolkar",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
    },
    {
      name: "Neel Madukahr",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    },
    {
      name: "Carly Strife",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    },
    {
      name: "Dave Latishaw II",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces",
    }
  ]

  const features = [
    {
      icon: "🟢",
      title: "We don't stop at the first answer",
      description: "Care doesn't end with advice or a prescription. We stay engaged, adjust when things don't improve, and carry responsibility forward."
    },
    {
      icon: "🔵",
      title: "Real specialty care, not referral dead ends",
      description: "When care needs depth, it happens here — instead of sending you off to months-long waits with no follow-up."
    },
    {
      icon: "🟠",
      title: "Clinically rigorous and accountable to you",
      description: "Care follows medical evidence and guidelines. And because we don't take insurance, our only obligation is to your outcome."
    }
  ]

  const howItWorks = [
    {
      step: "01",
      title: "You reach out when something feels off",
      description: "When you're worried, confused, or waiting on results, you can message us right away. No appointments. No deciding if it's \"worth\" a visit."
    },
    {
      step: "02",
      title: "We help you make sense of it",
      description: "A clinician reviews your message and responds with a clear explanation of what's likely going on and what your options are."
    },
    {
      step: "03",
      title: "We handle the next steps together",
      description: "If you need labs, medication changes, or further evaluation, we take care of it with you — not just advice and a send-off."
    },
    {
      step: "04",
      title: "We stay with you and follow up",
      description: "We check back in, review results, and adjust care if needed. You don't have to chase updates or start over with someone new."
    }
  ]


  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setMobileMenuOpen(false)
              }}
              className="flex items-center space-x-2 group"
            >
              <span className="text-2xl sm:text-3xl font-bold text-[#0b1b3b] tracking-tight group-hover:text-blue-600 transition-colors">
                Actually Health
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#story" onClick={(e) => handleNavClick(e, 'story')} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Our Story</a>
              <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Team</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">FAQ</a>
              <div className="h-6 w-px bg-slate-300"></div>
              <a href="#login" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Log into app</a>
              <a href="#signup" className="rounded-xl border border-blue-600/10 bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">Sign up</a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-slate-200">
              <a href="#story" onClick={(e) => handleNavClick(e, 'story')} className="block px-4 py-2 text-base font-medium text-slate-700 hover:text-blue-600">Our Story</a>
              <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="block px-4 py-2 text-base font-medium text-slate-700 hover:text-blue-600">Team</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block px-4 py-2 text-base font-medium text-slate-700 hover:text-blue-600">FAQ</a>
              <a href="#login" className="block px-4 py-2 text-base font-medium text-slate-700 hover:text-blue-600">Log into app</a>
              <a href="#signup" className="block mx-4 px-4 py-2.5 text-base font-medium text-center text-white bg-blue-500 rounded-xl">Sign up</a>
            </div>
          )}
        </div>
      </nav>

      <div className="h-16 sm:h-20"></div>

      {/* Hero Section with Image */}
      <section className="relative min-h-[90vh] flex items-center bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                  <span className="text-lg">🔵</span>
                  <p className="text-sm font-semibold text-blue-700">
                    Florida Patients Only: Limited Founding Member Spots Available
                  </p>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0b1b3b] mb-6 leading-tight">
                World-class medical care, on your terms.
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 mb-8">
                Continuous primary & chronic care from expert clinicians who know your history, personalize every decision, and follow through with every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#waitlist" className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                  Get started for $25/month
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Already a member? <a href="#login" className="text-blue-600 underline">Log in to your account</a>
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <HeroTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1b3b] mb-4 max-w-3xl mx-auto">
              What Makes Actually Health Different
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#0b1b3b] mb-3">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1b3b] mb-4">
              What happens when you message us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-[#0b1b3b] mb-3">{step.title}</h3>
                <p className="text-slate-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1b3b] mb-8 text-center">Our Story</h2>
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Actually Health exists because medical decisions shape your life — and most patients are shut out of them.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                I learned that the hard way as a kid, spending a year misdiagnosed while something serious went unseen. What saved me wasn't just good doctors — it was someone who could explain what was happening, what mattered, and what came next.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We're building care that gives patients that same clarity, control, and follow-through — every time.
              </p>
              <div className="pt-4 border-t border-slate-200">
                <Link to="/our-story" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read Noah's story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1b3b] mb-4">Our Team</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Led by experienced founders and guided by world-class advisors
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1b3b] mb-8 text-center">Leadership Team</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadershipTeam.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-blue-50">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#0b1b3b] mb-2">{member.name}</h4>
                    <p className="text-blue-600 font-semibold text-lg">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1b3b] mb-8 text-center">Advisors</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-blue-50 scale-[0.67] origin-center">
                  <div className="flex justify-center items-center py-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden bg-slate-100 rounded-full">
                      <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#0b1b3b] mb-1">{advisor.name}</h4>
                    <p className="text-blue-600 font-medium">{advisor.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1b3b] mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-blue-50 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-blue-50/30 transition-colors"
                  >
                    <span className="text-lg font-semibold text-[#0b1b3b] pr-4">{faq.question}</span>
                    <svg className={`w-6 h-6 text-blue-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1b3b] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Actually Health</h3>
              <p className="text-sm text-slate-300">Healthcare that actually understands you.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#story" className="hover:text-white">Our Story</a></li>
                <li><a href="#team" className="hover:text-white">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Get Started</h3>
              <a href="#signup" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                Sign up
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>Copyright © 2025 Actually Labs, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
