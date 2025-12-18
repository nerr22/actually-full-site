import { Link } from 'react-router-dom'

const OurStory = () => {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <main className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 sm:mb-12 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Home
        </Link>

        <div className="mb-12" style={{ opacity: 1, transform: 'none' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0b1b3b] mb-4">
            Why Actually Health?
          </h1>
        </div>

        <article className="prose prose-lg prose-slate max-w-none" style={{ opacity: 1, transform: 'none' }}>
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              In medical reform, the focus always seems to be on the big stuff: the surgeries, high-cost drugs, the insurance battles. But the part no one talks about is the medical decisions. The calls that decide what is wrong with you, that decide what happens to you, when, and why. Everyone treats that as just the doctor's problem. It isn't. It's profoundly the patient's problem. Your whole life hangs on those choices, and you almost never get to see the logic.
            </p>

            <p>
              Most people already feel it. Three in five Americans say the healthcare system is a hassle and stress about just trying to navigate it. Seven in ten say it doesn't meet their needs. Only four in ten believe it works in the patient's best interest.
            </p>

            <p>
              Each year, an estimated twelve million adults in outpatient care are misdiagnosed, and nearly 800,000 people are permanently disabled or die because of diagnostic errors. And those are just the ones who make it in the door. Tens of millions more delay or skip care altogether. People who get brushed off, misdirected, or give up trying to get help because the process feels impossible.
            </p>

            <p>
              That uncertainty eats at you. It's exhausting. You lie awake replaying every <em>what if</em>, not knowing if you're weeks from recovery or relapse. Not knowing if you forgot to mention the one symptom that might have changed everything. The anxiety is constant because the decisions, directions, and logic feel invisible and out of your hands.
            </p>

            <p className="font-semibold text-[#0b1b3b] text-lg">
              I know, because I've lived it.
            </p>

            <p>
              When I was 13, I started having awful bouts of headaches and dizziness. I threw up constantly and could barely keep my head up. I gained weight, my mood was all over the place. At that age your body is changing so fast anyway, and I was already a bit of a hypochondriac, so I kept wondering: is this real or in my head? The symptoms were vague enough that the guesses piled up: BPPV, migraines, gut issues, psychosomatic.
            </p>

            <div className="my-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                alt="In the hospital" 
                className="w-full h-auto" 
                src="/assets/noah_hospital-DqRDbHtC.JPG"
              />
            </div>

            <p>
              I spent months bouncing from specialist to specialist. Neurologists, eye doctors, therapists, anyone who might have an answer. Every visit was another round of tests, another "maybe this will work", another pill or procedure that gave me a week of hope before collapsing into disappointment. That cycle wears you down. The fatigue is more than physical. It's emotional. It's existential. Getting your hopes up, then being told again and again it's nothing, or worse, that it's all in your head. Which, in my case, turned out to be the cruelest irony.
            </p>

            <p>
              Nearly a year after my symptoms started, an MRI revealed the truth: a mass in my brain. I still remember sitting there, staring at the word on the report. <strong>Mass</strong>.
            </p>

            <p>
              Within weeks I had a date on the calendar at Children's Hospital of Philadelphia, months out. The best hospital I could hope for, but still a long stretch of waiting, knowing what was inside me and not knowing what it meant.
            </p>

            <p>
              But that's the thing... even once we knew, the uncertainty didn't end. It just changed shape. The conversations shifted from "maybe it's migraines" to "maybe we place a shunt to drain the cerebrospinal fluid," "maybe we try steroids," "maybe we attempt a full resection." Every plan started with maybe. Every option carried risk. Was I buying more time, or making trade-offs I didn't understand?
            </p>

            <p>
              And here's the part I haven't said yet: two years earlier, my mom died of a glioblastoma after a grueling 4 year battle. So when my dad told me they found a mass on the MRI, I thought I already knew the ending. I spent a lot of nights wondering if I could survive what she went through. The truth is, I knew I couldn't. And when you're fourteen and staring down something that feels like a death sentence, that doesn't leave a lot of options. I won't lie. There were nights where I considered taking the easy way out.
            </p>

            <p className="font-semibold text-[#0b1b3b] text-lg">
              What saved me was my dad.
            </p>

            <div className="my-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                alt="With my dad" 
                className="w-full h-auto" 
                src="/assets/wedding-COzxohTp.png"
              />
            </div>

            <p>
              He's a doctor. Not just a doctor but an incredible one. Thoughtful, caring, and unfortunately for him, deeply experienced in navigating brain tumor treatment. He could sit me down when I was spiraling and explain what the scans meant, what the next twelve months might look like, what was happening inside me. He was the only one who could tell me: "No. Odds are, it's not as bad as you think." "Breathe." "Wait for the biopsy." "We'll get chicken nuggets at the McDonald's in CHOP."
            </p>

            <p>
              I've never even told my dad what he saved me from. I don't think I could look him in the eye and say it. I'm sure he knows how dark those times were. I'm sure they were probably harder on him. He used to sleep on a twin mattress on the floor in my room just so he could be there if I woke up scared.
            </p>

            <p>
              He saved me because he gave me something I didn't think I had anymore: <strong>control</strong>. For the first time in months I could see a path forward. The fear was still there, but it wasn't endless. Decisions weren't being made in a black box. I could understand them. I could discuss them with the team at CHOP, and they would listen.
            </p>

            <p>
              We were a team. The best way I can describe it is like a Formula 1 driver with a garage full of brilliant mechanics. Not that I can compare my physical performance to one of those cars, but you get the idea. I gave them feedback on how the car felt. They made the plans, told me what it would do, and together we moved forward, understanding the risks, celebrating the wins.
            </p>

            <p>
              That's what I want for you too. Care that is accessible anytime, anywhere. Care that is tailored to you, and of empirically the highest quality. Care that doesn't shove you into a template, but meets you where you are. Care that doesn't hide the decisions, but walks you through them until you understand.
            </p>

            <p className="font-semibold text-[#0b1b3b] text-lg">
              That's why we're building Actually Health.
            </p>

            <p>
              A virtual clinic built around you. You're the driver; we're the engineers in the garage, tuning the car while you tell us how it feels. You tell us what's working, what isn't, and where you want to go next. We listen, we plan, and we keep you moving forward.
            </p>

            <p>
              We don't take insurance, on purpose. Not because we're against it, but because we never want to answer to anyone but you. You can still use insurance for labs and medications, but the care itself stays between us and <strong>you</strong>. The way it should be.
            </p>

            <blockquote className="my-10 border-l-4 border-blue-500 bg-blue-50/30 rounded-r-lg pl-8 pr-6 py-6">
              <p className="font-bold text-[#0b1b3b] text-xl mb-4">Our promise to you:</p>
              <ul className="space-y-3 list-none pl-0 text-base text-slate-700">
                <li>You will always be seen and heard.</li>
                <li>You will get answers, not waiting rooms.</li>
                <li>Your care will be shaped to you, not forced into a template.</li>
                <li>You will understand what's happening, no matter how long it takes.</li>
                <li>We won't just advise and disappear. We will prescribe, refer, and follow up.</li>
                <li>We will measure success by your health and your life, not by how fast we close a case.</li>
                <li>We will learn from every patient we see, every story we're trusted with, so the care you get tomorrow is even better than today.</li>
              </ul>
            </blockquote>

            <p>
              This is for everyone who knows that uncertainty. From the random pain that shows up once a year and makes you wonder if you should get it checked, to managing three conditions at once and feeling like no one is connecting the dots. From the people who panic when they don't understand, to the people who've been dismissed too many times to ask again.
            </p>

            <p className="text-xl font-bold text-[#0b1b3b] mt-8">
              We're building this for you. Come be part of it.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <button className="cursor-pointer inline-block rounded-2xl border border-blue-600/10 bg-blue-500 px-8 py-4 text-lg font-medium text-white shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-300">
              Join the Waitlist →
            </button>
          </div>
        </article>
      </main>

      <footer className="relative bottom-0 left-0 right-0 z-10 flex justify-center text-xs text-slate-400 py-8">
        <span>Copyright © 2025 Actually Labs, Inc. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default OurStory

