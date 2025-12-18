import { useEffect, useState, useRef } from 'react'

const HeroCanvas = () => {
  const [phase, setPhase] = useState(1) // 1: Engage, 2: Reward, 3: Retention
  const [headerPhase, setHeaderPhase] = useState(1) // Controls header independently
  const [step, setStep] = useState(0) // Step within current phase
  const [maxStepReached, setMaxStepReached] = useState({ phase1: 0, phase2: 0, phase3: 0 }) // Track max steps reached per phase
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)
  const isPausedRef = useRef(false)
  const chatContainerRef = useRef(null)

  // Header text for each phase
  const headers = {
    1: "When something feels off",
    2: "You’re heard and understood",
    3: "You get action & follow-through"
  }

  // Conversation flow
  const conversation = {
    phase1: {
      patient: "Hey — my legs have been really sore lately. I haven't changed my workouts or anything."
    },
    phase2: {
      doctor1: "I'm really glad you reached out. I see you started a new cholesterol medication recently, and muscle soreness like this can sometimes happen early on — even if nothing else has changed.",
      doctor2: "The good news is we have options. We can adjust the dose, or we can switch to a different approach that still manages cholesterol well but is less likely to cause muscle pain.",
      doctor3: "What would you prefer?",
      patient: "I'd rather switch if that makes sense.",
      doctor4: "That makes sense. I'll switch you to a non-statin option and send the prescription to your pharmacy now. We'll also keep an eye on your cholesterol to make sure it stays controlled.",
      actions: {
        label: "We took care of it",
        items: [
          "Medication updated and sent to your pharmacy",
          "Scheduled follow-up labs",
          "Check-in scheduled to see how symptoms are"
        ]
      }
    },
    phase3: {
      doctor: "I'll check back in with you in a couple of weeks to see how the soreness is doing and review your lab results together.",
      outcomes: [
        "Muscle soreness resolved",
        "Cholesterol controlled on follow-up labs"
      ]
    }
  }

  // Keep ref in sync with state
  useEffect(() => {
    isPausedRef.current = isPaused
  }, [isPaused])

  // Track max step reached for each phase
  useEffect(() => {
    if (step > 0) {
      setMaxStepReached(prev => {
        if (phase === 1) return { ...prev, phase1: Math.max(prev.phase1, step) }
        if (phase === 2) return { ...prev, phase2: Math.max(prev.phase2, step) }
        if (phase === 3) return { ...prev, phase3: Math.max(prev.phase3, step) }
        return prev
      })
    }
  }, [step, phase])

  // Reset step when phase changes
  useEffect(() => {
    setStep(0)
  }, [phase])

  // Auto-scroll to bottom when messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [phase, step, maxStepReached])

  // Update header phase based on step (header changes AS messages appear)
  useEffect(() => {
    if (phase === 1) {
      // Phase 1 header stays until first doctor message appears
      setHeaderPhase(1)
    } else if (phase === 2) {
      if (step === 0) {
        // Keep phase 1 header briefly when transitioning to phase 2
        setHeaderPhase(1)
      } else if (step >= 1 && step < 5) {
        // Header changes to phase 2 AS first doctor message appears
        setHeaderPhase(2)
      } else if (step >= 5) {
        // Header changes to phase 3 AS final doctor message appears (before transitioning)
        setHeaderPhase(3)
      }
    } else if (phase === 3) {
      // Phase 3 header stays (should already be set from step 5 of phase 2)
      setHeaderPhase(3)
    }
  }, [phase, step])

  useEffect(() => {
    if (isPaused) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      return
    }

    const advanceSequence = () => {
      if (isPausedRef.current) return

      if (phase === 1) {
        // Phase 1: Show patient message, then move to Phase 2
        setStep(1)
        timeoutRef.current = setTimeout(() => {
          if (isPausedRef.current) return
          // Move to Phase 2 (header changes as first doctor message renders)
          setPhase(2)
        }, 3000) // Slowed from 3000ms to 5000ms
      } else if (phase === 2) {
        // Phase 2: Show doctor messages sequentially
        setStep(1) // Show first doctor message
        timeoutRef.current = setTimeout(() => {
          if (isPausedRef.current) return
          setStep(2) // Show second doctor message
          timeoutRef.current = setTimeout(() => {
            if (isPausedRef.current) return
            setStep(3) // Show third doctor message
            timeoutRef.current = setTimeout(() => {
              if (isPausedRef.current) return
              setStep(4) // Show patient reply
              timeoutRef.current = setTimeout(() => {
                if (isPausedRef.current) return
                setStep(5) // Show final doctor message
                // Action block appears after a brief delay
                timeoutRef.current = setTimeout(() => {
                  if (isPausedRef.current) return
                  setStep(6) // Show action block
                  timeoutRef.current = setTimeout(() => {
                    if (isPausedRef.current) return
                    // Move to Phase 3
                    setPhase(3)
                  }, 5000) // Slowed from 3000ms to 5000ms
                }, 1000) // Added delay before action block
              }, 4000) // Slowed from 2000ms to 4000ms
            }, 4500) // Slowed from 2500ms to 4500ms
          }, 5000) // Slowed from 3000ms to 5000ms
        }, 5000) // Slowed from 3000ms to 5000ms
      } else if (phase === 3) {
        // Phase 3: Show follow-up and outcomes
        setStep(1) // Show doctor follow-up
        timeoutRef.current = setTimeout(() => {
          if (isPausedRef.current) return
          setStep(2) // Show outcomes (fade in after delay)
          timeoutRef.current = setTimeout(() => {
            if (isPausedRef.current) return
            // Loop back to Phase 1 - reset max steps
            setMaxStepReached({ phase1: 0, phase2: 0, phase3: 0 })
            setPhase(1)
            setHeaderPhase(1)
          }, 5000) // Slowed from 3000ms to 5000ms
        }, 3000) // Slowed from 1500ms to 3000ms
      }
    }

    // Start sequence when phase changes
    advanceSequence()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [phase, isPaused])

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6">
        
        {/* Dynamic Header - Above Phone */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide transition-opacity duration-500">
            {headers[headerPhase]}
          </p>
        </div>
        
        {/* Phone and Action Block Container */}
        <div className="relative flex items-center justify-center">
          {/* Phone Container */}
          <div className="w-[375px] h-[667px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* Phone Screen */}
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
            {/* Phone Notch (optional) */}
            <div className="h-6 bg-slate-900 rounded-b-2xl mx-auto w-32"></div>
            
            {/* Chat Content Inside Phone */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >

              {/* Phase 1: Patient Message - stays visible once shown */}
              {((phase === 1 && step >= 1) || maxStepReached.phase1 >= 1) && (
                <div className="flex justify-start animate-fadeIn">
                  <div className="max-w-[85%]">
                    <div className="bg-blue-50 rounded-2xl rounded-bl-sm px-4 py-2.5">
                      <p className="text-sm text-slate-800 leading-relaxed">
                        {conversation.phase1.patient}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Phase 2: Doctor Messages and Conversation - stays visible once shown */}
              {phase >= 2 && (
                <>
                  {((phase === 2 && step >= 1) || (phase > 2 && maxStepReached.phase2 >= 1)) && (
                    <div className="flex justify-end animate-fadeIn">
                      <div className="max-w-[85%]">
                        <div className="bg-slate-100 rounded-2xl rounded-br-sm px-4 py-2.5">
                          <p className="text-sm text-slate-800 leading-relaxed">
                            {conversation.phase2.doctor1}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {((phase === 2 && step >= 2) || (phase > 2 && maxStepReached.phase2 >= 2)) && (
                    <div className="flex justify-end animate-fadeIn">
                      <div className="max-w-[85%]">
                        <div className="bg-slate-100 rounded-2xl rounded-br-sm px-4 py-2.5">
                          <p className="text-sm text-slate-800 leading-relaxed">
                            {conversation.phase2.doctor2}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {((phase === 2 && step >= 3) || (phase > 2 && maxStepReached.phase2 >= 3)) && (
                    <div className="flex justify-end animate-fadeIn">
                      <div className="max-w-[85%]">
                        <div className="bg-slate-100 rounded-2xl rounded-br-sm px-4 py-2.5">
                          <p className="text-sm text-slate-800 leading-relaxed">
                            {conversation.phase2.doctor3}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {((phase === 2 && step >= 4) || (phase > 2 && maxStepReached.phase2 >= 4)) && (
                    <div className="flex justify-start animate-fadeIn">
                      <div className="max-w-[85%]">
                        <div className="bg-blue-50 rounded-2xl rounded-bl-sm px-4 py-2.5">
                          <p className="text-sm text-slate-800 leading-relaxed">
                            {conversation.phase2.patient}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {((phase === 2 && step >= 5) || (phase > 2 && maxStepReached.phase2 >= 5)) && (
                    <div className="flex justify-end animate-fadeIn">
                      <div className="max-w-[85%]">
                        <div className="bg-slate-100 rounded-2xl rounded-br-sm px-4 py-2.5">
                          <p className="text-sm text-slate-800 leading-relaxed">
                            {conversation.phase2.doctor4}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Phase 3: Follow-up - stays visible once shown */}
              {phase >= 3 && (
                <>
                  {((phase === 3 && step >= 1) || maxStepReached.phase3 >= 1) && (
                    <div className="flex justify-end animate-fadeIn">
                      <div className="max-w-[85%]">
                        <div className="bg-slate-100 rounded-2xl rounded-br-sm px-4 py-2.5">
                          <p className="text-sm text-slate-800 leading-relaxed">
                            {conversation.phase3.doctor}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

            </div>
          </div>
        </div>

          {/* Action Block - Right of Phone */}
          {((phase === 2 && step >= 6) || maxStepReached.phase2 >= 6) && (
            <div className="absolute left-full ml-8 w-[280px] bg-white rounded-2xl p-6 shadow-lg border border-slate-200 animate-fadeIn">
              <p className="text-sm font-semibold text-slate-800 mb-4">
                {conversation.phase2.actions.label}
              </p>
              <div className="space-y-3">
                {conversation.phase2.actions.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-600 font-semibold text-sm mt-0.5 flex-shrink-0">✔</span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
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

export default HeroCanvas
