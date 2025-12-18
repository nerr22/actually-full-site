import { useState, useRef, useEffect } from 'react'

const HeroTimeline = () => {
  const [hoveredWeek, setHoveredWeek] = useState(1) // Default to Week 1
  const chatContainerRef = useRef(null)

  // Headers matching touchpoints
  const headers = {
    1: "When something feels off",
    2: "We help you understand",
    3: "We follow up"
  }

  // Week data with conversations and actions
  const weekData = {
    1: {
      header: headers[1],
      conversation: [
        { type: 'patient', text: "Hey — my legs have been really sore lately. I haven't changed my workouts or anything." },
        { type: 'doctor', text: "I'm really glad you reached out. I see you started a new cholesterol medication recently, and muscle soreness like this can sometimes happen early on — even if nothing else has changed." },
        { type: 'doctor', text: "The good news is we have options. We can adjust the dose, or we can switch to a different approach that still manages cholesterol well but is less likely to cause muscle pain." },
        { type: 'doctor', text: "What would you prefer?" },
        { type: 'patient', text: "I'd rather switch if that makes sense." },
        { type: 'doctor', text: "That makes sense. I'll switch you to a non-statin option and send the prescription to your pharmacy now. We'll also keep an eye on your cholesterol to make sure it stays controlled." }
      ],
      actions: {
        label: "We took care of it",
        items: [
          "Medication updated and sent to your pharmacy",
          "Scheduled follow-up labs",
          "Check-in scheduled to see how symptoms are"
        ]
      }
    },
    2: {
      header: headers[2],
      conversation: [
        { type: 'doctor', text: "Checking in — how are you feeling on the new medication? Any changes with the muscle soreness?" },
        { type: 'patient', text: "Much better! The soreness is mostly gone. I'm feeling good." },
        { type: 'doctor', text: "That's great to hear. Your lab results came back and your cholesterol is looking good. We'll keep monitoring, but this approach seems to be working well for you." },
        { type: 'doctor', text: "Let's schedule another check-in in a few weeks to make sure everything stays on track." }
      ],
      actions: {
        label: "This week",
        items: [
          "Reviewed lab results",
          "Confirmed medication is working",
          "Scheduled next check-in"
        ]
      }
    },
    3: {
      header: headers[3],
      conversation: [
        { type: 'doctor', text: "I wanted to check back in — how are you feeling overall? Any concerns or questions?" },
        { type: 'patient', text: "Everything's been great! No more soreness, and I feel like I'm back to normal." },
        { type: 'doctor', text: "Excellent. Your latest labs show your cholesterol is well-controlled, and you're tolerating the medication perfectly. We'll continue monitoring, but you're in a great place." },
        { type: 'doctor', text: "Remember, you can message anytime if anything comes up. We're here for you." }
      ],
      actions: {
        label: "Ongoing care",
        items: [
          "Cholesterol levels stable",
          "No side effects reported",
          "Available for questions anytime"
        ]
      }
    }
  }

  // Auto-scroll to bottom when conversation changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [hoveredWeek])

  const currentWeek = weekData[hoveredWeek]

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6">
        
        {/* Phone and Action Block Container */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Phone Container */}
          <div className="w-[375px] h-[667px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
            {/* Phone Screen */}
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
              {/* Phone Notch */}
              <div className="h-6 bg-slate-900 rounded-b-2xl mx-auto w-32"></div>
              
              {/* Chat Content Inside Phone */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {currentWeek.conversation.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.type === 'patient' ? 'justify-start' : 'justify-end'} animate-fadeIn`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="max-w-[85%]">
                      <div className={`rounded-2xl px-4 py-2.5 ${
                        message.type === 'patient' 
                          ? 'bg-blue-50 rounded-bl-sm' 
                          : 'bg-slate-100 rounded-br-sm'
                      }`}>
                        <p className="text-sm text-slate-800 leading-relaxed">
                          {message.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Block - Right of Phone */}
          <div className="absolute left-full ml-8 w-[280px] bg-white rounded-2xl p-6 shadow-lg border border-slate-200 animate-fadeIn">
            <p className="text-sm font-semibold text-slate-800 mb-4">
              {currentWeek.actions.label}
            </p>
            <div className="space-y-3">
              {currentWeek.actions.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-semibold text-sm mt-0.5 flex-shrink-0">✔</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative py-4">
            {/* Connecting Lines - Desktop Only */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0">
              {/* Progress line that fills based on hovered week */}
              <div 
                className="absolute left-0 h-full bg-blue-500 transition-all duration-300 ease-in-out"
                style={{ 
                  width: hoveredWeek === 1 ? '33.33%' : hoveredWeek === 2 ? '66.66%' : '100%'
                }}
              ></div>
            </div>

            {/* Week Cards */}
            {[1, 2, 3].map((week) => {
              const isActive = hoveredWeek === week
              const isPast = hoveredWeek > week
              return (
                <div
                  key={week}
                  className={`relative z-10 bg-white rounded-xl p-6 shadow-md border-2 transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'border-blue-500 shadow-lg scale-105' 
                      : isPast
                      ? 'border-blue-300 shadow-md'
                      : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setHoveredWeek(week)}
                  style={{ minWidth: '180px', textAlign: 'center' }}
                >
                  <div className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive || isPast ? 'text-blue-600' : 'text-slate-500'
                  }`}>
                    {headers[week]}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default HeroTimeline

