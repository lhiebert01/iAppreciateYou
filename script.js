// 400+ Enriched Affirmations with Meaning & Reinforcement
// Each affirmation includes deeper explanation and memorable reinforcement
const affirmations = {
    winner: [
        {
            text: "I am a winner, and I build other winners too.",
            meaning: "True winners don't just succeed alone—they lift others up. Your success multiplies when you help others succeed.",
            reinforcement: "I am a rising tide that lifts all boats. When I win, I create more winners around me."
        },
        {
            text: "Every day in every way, I feel better and better.",
            meaning: "This classic affirmation by Émile Coué rewires your brain for continuous improvement. Small daily gains compound into transformation.",
            reinforcement: "I am on an upward spiral. Each day adds another layer of strength, joy, and capability to who I am."
        },
        {
            text: "Today I focus only on what I control—my effort and my attitude.",
            meaning: "The Stoics taught that peace comes from focusing on what's within your power. Your effort and attitude are always 100% yours.",
            reinforcement: "I release what I cannot control and pour all my energy into what I can: how hard I work and how I show up."
        },
        {
            text: "I attack each day with energy, joy, and enthusiasm.",
            meaning: "Energy is contagious. When you bring enthusiasm to your day, you transform ordinary moments into opportunities.",
            reinforcement: "I don't just face the day—I charge at it. My energy is my weapon, and I wield it with joy."
        },
        {
            text: "I think big, act big, I am big.",
            meaning: "Your self-concept determines your actions. When you see yourself as capable of big things, you act accordingly.",
            reinforcement: "I don't play small. My thoughts are expansive, my actions are bold, and my life reflects that bigness."
        },
        {
            text: "I am a can-do, will-do, get-things-done person.",
            meaning: "Identity drives behavior. When you see yourself as someone who executes, you naturally take action.",
            reinforcement: "I don't make excuses—I make results. When something needs doing, I'm the one who does it."
        },
        {
            text: "I treat myself as my own best friend.",
            meaning: "Self-compassion is the foundation of all growth. Speak to yourself with the kindness you'd give your dearest friend.",
            reinforcement: "I am loyal to myself. I encourage myself, believe in myself, and never abandon myself when times get tough."
        },
        {
            text: "I am solution-oriented today.",
            meaning: "Problems are just questions waiting for answers. A solution-oriented mind finds paths where others see dead ends.",
            reinforcement: "I don't dwell on problems—I hunt solutions. My mind is trained to find the way forward."
        },
        {
            text: "I only see myself as a success.",
            meaning: "Your self-image is a self-fulfilling prophecy. When you see yourself as successful, you act in ways that create success.",
            reinforcement: "Failure is just a lesson on the way to victory. In my mind's eye, I am always winning."
        },
        {
            text: "People are naturally attracted to my energy.",
            meaning: "Positive, confident energy is magnetic. When you radiate good vibes, people want to be around you.",
            reinforcement: "I am a magnet for good people and good opportunities. My energy draws the right connections to me."
        },
        {
            text: "I am a highly intelligent person.",
            meaning: "Intelligence isn't fixed—it's developed. Believing in your intelligence opens doors to learning and growth.",
            reinforcement: "My mind is sharp, curious, and capable. I learn quickly and apply knowledge wisely."
        },
        {
            text: "My life is filled with quality and excellence today.",
            meaning: "Excellence is a habit, not an event. When you expect quality, you create it in everything you touch.",
            reinforcement: "I don't settle for mediocrity. Everything I do carries the stamp of excellence."
        },
        {
            text: "I am unstoppable when I set my mind to something.",
            meaning: "Determination is more powerful than talent. When you decide something will happen, you find a way.",
            reinforcement: "Once I commit, it's only a matter of time. Obstacles are just speed bumps on my road to victory."
        },
        {
            text: "I radiate confidence, charisma, and charm.",
            meaning: "These qualities aren't born—they're cultivated. By affirming them, you embody them more each day.",
            reinforcement: "I walk into rooms and light them up. My presence is felt, remembered, and welcomed."
        },
        {
            text: "I am becoming the best version of myself daily.",
            meaning: "Growth is a daily practice, not a destination. Each day offers a chance to be slightly better than yesterday.",
            reinforcement: "I am a masterpiece in progress. Every day I add another brushstroke to my evolving greatness."
        },
        {
            text: "Winners win, and I am a winner.",
            meaning: "Simple but powerful—identity shapes destiny. Claiming the winner identity programs you for victory.",
            reinforcement: "Winning is what I do. It's not luck—it's who I am at my core."
        },
        {
            text: "I dominate my goals with focused intensity.",
            meaning: "Intensity and focus are the twin engines of achievement. When you lock onto a goal, you become unstoppable.",
            reinforcement: "I am a laser beam of focus. My goals don't stand a chance against my concentrated effort."
        },
        {
            text: "I am wealthy in health, love, and opportunity.",
            meaning: "True wealth extends beyond money. Recognizing abundance in all areas attracts more abundance.",
            reinforcement: "I am rich in what matters most. My life overflows with health, meaningful relationships, and possibilities."
        },
        {
            text: "I make things happen—I don't wait for them to happen.",
            meaning: "Proactive people create their circumstances. Instead of reacting to life, you shape it.",
            reinforcement: "I am the cause, not the effect. I initiate, create, and make my vision reality."
        },
        {
            text: "My potential is infinite and I tap into it daily.",
            meaning: "You have reservoirs of potential you've never accessed. Daily effort unlocks more of what's possible.",
            reinforcement: "I have barely scratched the surface of what I can do. Each day I discover new depths of capability."
        },
        {
            text: "I am a leader who inspires excellence in others.",
            meaning: "Leadership isn't a title—it's influence. When you embody excellence, you naturally elevate those around you.",
            reinforcement: "My example speaks louder than words. I lead by being the standard I want to see."
        },
        {
            text: "I turn setbacks into spectacular comebacks.",
            meaning: "Every setback contains the seeds of an even greater comeback. Use adversity as fuel.",
            reinforcement: "I don't stay down. I bounce back higher than I fell. My comebacks are legendary."
        },
        {
            text: "I am in peak mental, physical, and emotional condition.",
            meaning: "Holistic wellness is the foundation of high performance. All three areas support each other.",
            reinforcement: "I am optimized in mind, body, and spirit. I fire on all cylinders every day."
        },
        {
            text: "Success is my duty, obligation, and responsibility.",
            meaning: "When you view success as a responsibility rather than a wish, you approach it with urgency and commitment.",
            reinforcement: "I don't hope for success—I demand it of myself. It's not optional; it's my obligation."
        },
        {
            text: "I am exactly where I need to be, heading exactly where I want to go.",
            meaning: "Trust your journey. Your current position is the perfect launching pad for your next level.",
            reinforcement: "I am not lost or behind. I am positioned perfectly for my breakthrough."
        },
        {
            text: "I execute with precision and power.",
            meaning: "Ideas without execution are worthless. You are someone who takes decisive, powerful action.",
            reinforcement: "I don't just plan—I execute. My actions are precise, powerful, and produce results."
        },
        {
            text: "I am a money magnet—abundance flows to me easily.",
            meaning: "Your relationship with money affects how it flows to you. Believing in abundance attracts it.",
            reinforcement: "Money is energy, and I am a powerful conductor. Wealth finds its way to me naturally."
        },
        {
            text: "I outwork and outlearn my competition daily.",
            meaning: "Consistent effort and continuous learning create compound advantages over time.",
            reinforcement: "While others rest, I improve. My daily habits are building an unbeatable edge."
        },
        {
            text: "I speak life, success, and victory into my future.",
            meaning: "Your words program your subconscious. Speaking positively about your future helps create it.",
            reinforcement: "My mouth speaks what my mind believes and what my life will become. I speak only victory."
        },
        {
            text: "I am the hero of my own story.",
            meaning: "You are the protagonist of your life, not a supporting character. Take the lead role.",
            reinforcement: "I don't wait to be saved—I save myself. This is my story, and I'm writing an epic one."
        },
        {
            text: "I am kind whenever possible—and it is always possible.",
            meaning: "Inspired by the Dalai Lama, this reminds us that kindness is always a choice we can make, regardless of circumstances.",
            reinforcement: "Even in my busiest, hardest moments, I can offer a kind word, a smile, or patience. Kindness costs nothing but means everything."
        },
        {
            text: "I lift others up because rising tides lift all boats.",
            meaning: "Your success doesn't diminish others—it inspires them. When you help others rise, you rise too.",
            reinforcement: "I am not in competition with others—I am in collaboration with them. Their wins are my wins."
        },
        {
            text: "I am grateful, humble, and hungry for more.",
            meaning: "The perfect balance: appreciating what you have while still striving for growth.",
            reinforcement: "I thank God for where I am, stay grounded in who I am, and keep pushing for where I'm going."
        },
        {
            text: "I give love freely and receive it openly.",
            meaning: "Love flows best when it's not hoarded. Give generously and receive graciously.",
            reinforcement: "I am a channel for love, not a dam. Love flows through me—out to others and back to me."
        },
        {
            text: "Today I choose joy, no matter what comes.",
            meaning: "Joy is a choice, not a circumstance. You can choose joy even in difficulty.",
            reinforcement: "I don't wait for perfect conditions to be joyful. I bring joy with me wherever I go."
        }
    ],
    confidence: [
        {
            text: "I trust myself to handle whatever comes my way.",
            meaning: "Self-trust is the foundation of confidence. When you believe in your ability to navigate challenges, you become unshakeable.",
            reinforcement: "Like a seasoned captain who has weathered many storms, I know I can steer through any rough waters. My past victories are proof of my capability."
        },
        {
            text: "I am capable of achieving great things.",
            meaning: "Your potential is not limited by your current circumstances. Every great achievement started as a thought in someone's mind.",
            reinforcement: "The oak tree was once just an acorn. My greatness is already within me, waiting to grow into something magnificent."
        },
        {
            text: "My voice matters and deserves to be heard.",
            meaning: "Your unique perspective adds value to every conversation. Speaking up is not arrogance—it's honoring your truth.",
            reinforcement: "I am not background noise; I am the melody. When I speak, I add something to the world that only I can offer."
        },
        {
            text: "I back myself completely in all I do.",
            meaning: "Self-doubt is the enemy of progress. When you're your own biggest supporter, external validation becomes optional.",
            reinforcement: "I am my own greatest investor. I bet on myself because I've seen what I'm capable of when I commit fully."
        },
        {
            text: "I am bold, brave, and unapologetically myself.",
            meaning: "Authenticity requires courage. The bravest thing you can do is show up as exactly who you are.",
            reinforcement: "I don't dim my light to make others comfortable. I shine fully, and the right people will celebrate my brightness."
        },
        {
            text: "I have everything I need within me right now.",
            meaning: "You are already whole. External things may help, but your core strength comes from within.",
            reinforcement: "Like a seed that contains the entire blueprint of a tree, I carry all the wisdom and strength I need inside me."
        },
        {
            text: "I trust my intuition to guide me.",
            meaning: "Your gut feeling is your subconscious mind processing millions of data points. It's wisdom in fast-forward.",
            reinforcement: "My inner compass has guided me through every maze. When logic runs out, my intuition lights the way."
        },
        {
            text: "I am confident in my unique abilities.",
            meaning: "No one else has your exact combination of skills, experiences, and perspectives. That's your superpower.",
            reinforcement: "I am a limited edition, not a copy. My unique blend of talents is exactly what the world needs."
        },
        {
            text: "My opinions are valid and valuable.",
            meaning: "Your thoughts are shaped by your unique journey. They deserve space in the conversation.",
            reinforcement: "I don't need permission to think. My perspective is a contribution, not an interruption."
        },
        {
            text: "I step into challenges knowing I will grow.",
            meaning: "Difficulty is not a sign to stop—it's a sign you're stretching beyond your comfort zone.",
            reinforcement: "The butterfly struggles to leave the cocoon, and that struggle gives it wings. My challenges are giving me wings."
        },
        {
            text: "I believe in my capacity to learn and adapt.",
            meaning: "Intelligence isn't fixed. Every challenge is an opportunity to build new neural pathways.",
            reinforcement: "I am not stuck with who I was yesterday. Every day, I can learn, evolve, and become better."
        },
        {
            text: "I radiate self-assurance in all situations.",
            meaning: "Confidence is contagious. When you believe in yourself, others sense it and respond positively.",
            reinforcement: "I walk into rooms like I belong there—because I do. My energy speaks before my words do."
        },
        {
            text: "My confidence comes from within, not from others.",
            meaning: "External validation is fleeting. True confidence is self-generated and cannot be taken away.",
            reinforcement: "I am my own source of power. Compliments are nice, but I don't need them to know my worth."
        },
        {
            text: "I am secure in who I am becoming.",
            meaning: "Growth is not a threat to your identity—it's the expression of it. You can change and still be you.",
            reinforcement: "I am a masterpiece in progress. Each brushstroke adds to my beauty, it doesn't erase what came before."
        },
        {
            text: "I face uncertainty with courage and calm.",
            meaning: "The unknown is not inherently dangerous. Your calm presence transforms uncertainty into possibility.",
            reinforcement: "I am the still point in a turning world. When others panic, I breathe deep and move forward."
        },
        {
            text: "I am the author of my own story.",
            meaning: "You hold the pen. While you can't control every plot twist, you decide how your character responds.",
            reinforcement: "I don't let others write my chapters. This is my story, and I choose how it unfolds."
        },
        {
            text: "I trust the timing of my life.",
            meaning: "Success isn't a race. Your journey unfolds at the pace that's right for your growth.",
            reinforcement: "The bamboo tree grows underground for years before shooting up 90 feet. My breakthrough is coming at the perfect time."
        },
        {
            text: "I am proud of how far I have come.",
            meaning: "Progress often feels invisible until you look back. Acknowledge your journey.",
            reinforcement: "The mountain I once couldn't see over is now beneath my feet. I've climbed higher than I realize."
        },
        {
            text: "I embrace my power without apology.",
            meaning: "Your strength is not threatening. Owning your power is an act of self-respect.",
            reinforcement: "I don't shrink to fit into small spaces. I expand, and the room adjusts to me."
        },
        {
            text: "I stand tall in my truth.",
            meaning: "Your truth is your anchor. When you're grounded in what you believe, nothing can knock you down.",
            reinforcement: "Like a lighthouse in a storm, I stand firm. My truth guides me and lights the way for others."
        },
        {
            text: "I am worthy of taking up space.",
            meaning: "You have every right to exist fully. Don't minimize yourself for anyone's comfort.",
            reinforcement: "I am not too much. The world has room for all of me—my dreams, my voice, my presence."
        },
        {
            text: "My self-belief grows stronger each day.",
            meaning: "Confidence is a muscle. The more you exercise it, the stronger it becomes.",
            reinforcement: "Every day I choose to believe in myself, I add another layer of armor. I am becoming unbreakable."
        },
        {
            text: "I choose confidence over fear.",
            meaning: "Fear and confidence can coexist. The choice is which one you let drive.",
            reinforcement: "Fear is a passenger, not the driver. I acknowledge it, then I take the wheel and move forward."
        },
        {
            text: "I am my own greatest advocate.",
            meaning: "No one knows your value better than you. Speak up for yourself like you would for your best friend.",
            reinforcement: "I champion myself fiercely. If I don't stand up for me, who will?"
        },
        {
            text: "I speak with conviction and clarity.",
            meaning: "Clear communication comes from clear thinking. When you know what you believe, your words carry weight.",
            reinforcement: "My words are not whispers in the wind. They are declarations that shape my reality."
        },
        {
            text: "I walk into rooms knowing I belong.",
            meaning: "Belonging is not earned—it's claimed. You belong anywhere you choose to be.",
            reinforcement: "I don't wait for an invitation to be myself. Every room I enter becomes better because I'm in it."
        },
        {
            text: "My presence is a gift to every space I enter.",
            meaning: "You bring unique energy that no one else can replicate. Your presence changes environments.",
            reinforcement: "I am not just filling space—I am enriching it. My energy is a contribution, not an intrusion."
        },
        {
            text: "I am certain of my value.",
            meaning: "Your worth is not determined by external measures. You are valuable simply because you exist.",
            reinforcement: "Gold doesn't question its worth just because some don't recognize it. I know what I'm worth."
        },
        {
            text: "I project calm confidence in stressful moments.",
            meaning: "Pressure doesn't have to create panic. Your calm is a skill you can cultivate.",
            reinforcement: "I am the eye of the hurricane—everything may swirl around me, but my center is still."
        },
        {
            text: "I bet on myself every single time.",
            meaning: "You are your safest investment. No one will work harder for your success than you will.",
            reinforcement: "I put my chips on me. Win or learn—either way, betting on myself always pays off."
        }
    ],
    gratitude: [
        {
            text: "I am grateful for this moment right now.",
            meaning: "The present moment is the only place where life actually happens. Appreciating it is the key to joy.",
            reinforcement: "This breath, this heartbeat, this second—it's a gift that millions never received today. I honor it."
        },
        {
            text: "I appreciate the small victories in my day.",
            meaning: "Big wins are made of small victories stacked together. Celebrating them builds momentum.",
            reinforcement: "Every small step forward is a triumph. I got out of bed—victory. I tried—victory. I'm here—victory."
        },
        {
            text: "Gratitude turns what I have into enough.",
            meaning: "Abundance isn't about having more—it's about recognizing what you already possess.",
            reinforcement: "I shift my eyes from what's missing to what's present, and suddenly I'm rich beyond measure."
        },
        {
            text: "I am thankful for my body and all it does.",
            meaning: "Your body carries you through life, fights illness, heals wounds, and works 24/7. It deserves appreciation.",
            reinforcement: "My heart beats 100,000 times a day without me asking. My body is a miracle machine—I honor it."
        },
        {
            text: "I find joy in the ordinary moments.",
            meaning: "Extraordinary isn't always rare. Sometimes it's hidden in the everyday, waiting to be noticed.",
            reinforcement: "The warmth of sunlight, the taste of food, a stranger's smile—magic is everywhere when I look for it."
        },
        {
            text: "I am blessed with another day to grow.",
            meaning: "Each new day is a fresh canvas. Yesterday's mistakes don't define today's possibilities.",
            reinforcement: "The sunrise doesn't judge yesterday's sunset. Today I begin again, full of potential."
        },
        {
            text: "I appreciate the lessons hidden in challenges.",
            meaning: "Difficulties are teachers in disguise. Every struggle contains wisdom for those willing to find it.",
            reinforcement: "I don't curse my storms—I learn to dance in the rain. Every challenge has made me wiser."
        },
        {
            text: "My heart is full of appreciation.",
            meaning: "A grateful heart creates a positive feedback loop—the more you appreciate, the more you find to appreciate.",
            reinforcement: "I overflow with thankfulness. This energy attracts more blessings into my life."
        },
        {
            text: "I am grateful for the people who believe in me.",
            meaning: "Having supporters is a privilege. Their belief in you is a sacred trust to honor.",
            reinforcement: "Someone saw potential in me before I saw it in myself. I carry their belief as fuel for my journey."
        },
        {
            text: "I choose to see abundance everywhere.",
            meaning: "Scarcity is often a mindset, not a reality. Training your eyes to see abundance changes everything.",
            reinforcement: "The universe is overflowing. There's enough success, love, and joy for everyone—including me."
        },
        {
            text: "I am thankful for my journey, every step.",
            meaning: "Your path—with all its detours and dead ends—has made you who you are. Honor the whole trip.",
            reinforcement: "I don't regret my route. Every wrong turn taught me to navigate. My journey is exactly right."
        },
        {
            text: "Gratitude is my daily practice and power.",
            meaning: "Consistent gratitude rewires your brain for positivity. It's a skill that compounds over time.",
            reinforcement: "Like water shaping stone, my daily gratitude shapes my mind. I am training myself for joy."
        },
        {
            text: "I appreciate myself for showing up each day.",
            meaning: "Simply showing up—especially on hard days—is an act of courage that deserves recognition.",
            reinforcement: "I didn't quit. I'm still here, still trying. That's not nothing—that's everything."
        },
        {
            text: "I am grateful for the ability to change.",
            meaning: "Change means you're alive and evolving. Being able to grow is a gift not everyone realizes they have.",
            reinforcement: "I am not a statue—I am a river. I flow, I adapt, I become. This flexibility is my freedom."
        },
        {
            text: "I find something beautiful in every day.",
            meaning: "Beauty is everywhere, but it reveals itself to those who look for it intentionally.",
            reinforcement: "Even the darkest days have stars. I train my eyes to find the light, no matter how small."
        },
        {
            text: "I am thankful for my resilient spirit.",
            meaning: "Your spirit has carried you through things that could have broken you. That resilience is remarkable.",
            reinforcement: "I've bent but never broken. My spirit is forged in fire—tested, proven, undefeated."
        },
        {
            text: "Gratitude opens doors I never knew existed.",
            meaning: "Appreciation creates positive energy that attracts opportunities. Grateful people notice more chances.",
            reinforcement: "When I focus on what's good, more good finds me. Gratitude is my key to hidden doors."
        },
        {
            text: "I appreciate the gift of learning.",
            meaning: "Every day you can learn something new. This ability to grow mentally is a precious gift.",
            reinforcement: "My mind is always expanding. Yesterday I didn't know this; today I do. Knowledge is endless treasure."
        },
        {
            text: "I am grateful for my unique perspective.",
            meaning: "No one sees the world exactly like you do. Your viewpoint adds irreplaceable value.",
            reinforcement: "I see colors others miss. My unique lens brings something special to every situation."
        },
        {
            text: "I celebrate the progress I have made.",
            meaning: "Progress deserves recognition, not dismissal. Celebrating wins motivates continued growth.",
            reinforcement: "I'm not where I was. The distance I've traveled matters. Today I celebrate my journey."
        },
        {
            text: "I am thankful for rest and renewal.",
            meaning: "Rest is not laziness—it's essential maintenance. Your body and mind need recovery to thrive.",
            reinforcement: "I don't feel guilty for resting. Even the earth has seasons of dormancy before blooming."
        },
        {
            text: "Gratitude transforms my outlook completely.",
            meaning: "When you shift to gratitude, problems become challenges, and setbacks become setups.",
            reinforcement: "I put on gratitude glasses, and the whole world looks different. Same life, new vision."
        },
        {
            text: "I appreciate every breath I take.",
            meaning: "Breath is life. Each inhale is an opportunity, each exhale is a release of what no longer serves you.",
            reinforcement: "Right now, I am breathing. This simple act is the miracle that makes everything else possible."
        },
        {
            text: "I am grateful for second chances.",
            meaning: "Life offers endless opportunities to begin again. Every moment is a fresh start if you claim it.",
            reinforcement: "I don't need to be perfect; I just need to keep going. Tomorrow is a blank page waiting for me."
        },
        {
            text: "I find gratitude even in difficult times.",
            meaning: "Gratitude in hardship is advanced practice. It doesn't deny pain—it finds light alongside it.",
            reinforcement: "Even in the valley, I look up and see the stars. Darkness can't hide all the good in my life."
        },
        {
            text: "I appreciate the simple pleasures of life.",
            meaning: "Happiness isn't found in complexity. Often the simplest things bring the deepest joy.",
            reinforcement: "A hot cup of coffee, a good laugh, a quiet moment—these simple gifts are my daily treasures."
        },
        {
            text: "I am thankful for my ability to feel deeply.",
            meaning: "Feeling deeply—joy and pain alike—means you're fully alive. It's a sign of a rich inner life.",
            reinforcement: "I don't numb my feelings. I feel it all because that's what it means to be gloriously human."
        },
        {
            text: "Gratitude anchors me in the present.",
            meaning: "You can't be grateful for the future or past—only now. Gratitude pulls you into the present moment.",
            reinforcement: "Worry lives in tomorrow; regret lives in yesterday. Gratitude keeps me planted in today."
        },
        {
            text: "I appreciate the courage to keep going.",
            meaning: "Continuing forward when you want to stop is one of the bravest things a person can do.",
            reinforcement: "I am fearless in the face of the unknown. I face my fears and act in spite of them. I have courage that quietly persists."
        },
        {
            text: "I am grateful for my curious mind.",
            meaning: "Curiosity is the engine of growth. A mind that asks questions is a mind that never stops learning.",
            reinforcement: "I never lose my wonder. My curiosity is a superpower that keeps life endlessly interesting."
        }
    ],
    strength: [
        {
            text: "I am stronger than my challenges.",
            meaning: "Challenges may be formidable, but you are more formidable. You have reserves you haven't tapped yet.",
            reinforcement: "The weight that once crushed me is now my warm-up. I am built to carry heavy things."
        },
        {
            text: "My setbacks are setups for comebacks.",
            meaning: "Every setback contains the seeds of a greater comeback. Falling back can be a springboard forward.",
            reinforcement: "The arrow must be pulled back before it can fly forward. My setbacks are loading me for launch."
        },
        {
            text: "I have survived 100% of my worst days.",
            meaning: "Your track record for surviving hard times is perfect. You've made it through everything so far.",
            reinforcement: "I am undefeated against my worst days. Every storm I thought would destroy me made me stronger."
        },
        {
            text: "I am built to overcome obstacles.",
            meaning: "Humans are designed to adapt and overcome. Struggle is not a sign of weakness—it's evidence of life.",
            reinforcement: "Like water flowing around rocks, I find my way. Obstacles don't stop me; they redirect me."
        },
        {
            text: "My strength grows with every challenge.",
            meaning: "Muscles grow through resistance. Similarly, your inner strength builds each time you face difficulty.",
            reinforcement: "I am like iron—heat and pressure don't weaken me, they forge me into something unbreakable."
        },
        {
            text: "I am resilient, persistent, and unstoppable.",
            meaning: "These three qualities together create an unbeatable combination. You can be slowed but not stopped.",
            reinforcement: "I am a force of nature. I may be delayed, but I will never be denied."
        },
        {
            text: "I rise every time I fall.",
            meaning: "Falling is not failure—staying down is. Every time you get up, you prove your strength.",
            reinforcement: "I am not defined by how many times I fall, but by how many times I rise. And I always rise."
        },
        {
            text: "I am tougher than I give myself credit for.",
            meaning: "You often underestimate your own resilience. Look at everything you've already survived.",
            reinforcement: "If I made a list of what I've been through, I'd be amazed I'm still standing. But here I am."
        },
        {
            text: "My struggles have shaped my strength.",
            meaning: "Every difficulty you've faced has built muscle—mental, emotional, spiritual. Pain is a teacher.",
            reinforcement: "I don't regret my struggles. They sculpted me into someone who can handle anything."
        },
        {
            text: "I face adversity with unwavering resolve.",
            meaning: "Resolve means your commitment doesn't waver based on circumstances. You stay the course.",
            reinforcement: "I am locked in. No matter what comes at me, my determination remains rock solid."
        },
        {
            text: "I am a warrior, not a worrier.",
            meaning: "Warriors take action; worriers stay stuck in fear. Choose to fight, not fret.",
            reinforcement: "I spend my energy on battle plans, not anxiety spirals. I am built for action."
        },
        {
            text: "I choose strength when weakness feels easier.",
            meaning: "The path of least resistance isn't always the best path. Choosing strength builds character.",
            reinforcement: "When everything in me wants to quit, I dig deeper. That's where my true power lives."
        },
        {
            text: "I have the power to push through any barrier.",
            meaning: "Barriers are tests, not verdicts. You have more push-through power than you realize.",
            reinforcement: "Walls don't stop me—they challenge me. I find a way through, over, under, or around."
        },
        {
            text: "My inner strength is limitless.",
            meaning: "Physical strength has limits; inner strength does not. Your spirit can draw from infinite reserves.",
            reinforcement: "I have a well of strength that never runs dry. The more I draw from it, the deeper it gets."
        },
        {
            text: "I refuse to be defeated by temporary setbacks.",
            meaning: "All setbacks are temporary unless you make them permanent by giving up. Persistence wins.",
            reinforcement: "This is a chapter, not the whole book. I don't let temporary struggles write my final story."
        },
        {
            text: "I am forged by fire and refined by challenges.",
            meaning: "Like metal that becomes stronger through heating and hammering, your difficulties refine you.",
            reinforcement: "The hottest fires produce the strongest steel. My challenges are making me unbreakable."
        },
        {
            text: "I draw power from within when times get tough.",
            meaning: "External sources of strength can be taken away. Inner power is always available to you.",
            reinforcement: "I carry my own fuel. When the world goes dark, my internal fire lights the way."
        },
        {
            text: "I am anchored in my own strength.",
            meaning: "An anchor keeps a ship stable in any storm. Your inner strength is your anchor.",
            reinforcement: "Winds may blow and waves may crash, but I am unmoved. My roots go deep."
        },
        {
            text: "I bend but I do not break.",
            meaning: "Flexibility is a form of strength. The ability to adapt without shattering is powerful.",
            reinforcement: "I am like bamboo—I sway in the storm but stand tall when it passes."
        },
        {
            text: "My determination is my superpower.",
            meaning: "Talent is common; determination is rare. Your willingness to persist sets you apart.",
            reinforcement: "I may not be the fastest or smartest, but I will be the last one standing. That's my edge."
        },
        {
            text: "I am the calm in my own storm.",
            meaning: "You can be the source of peace even when chaos swirls around you. Calm is a choice.",
            reinforcement: "I don't add to my own turbulence. I breathe deep, stay centered, and become my own shelter."
        },
        {
            text: "I have overcome before and I will again.",
            meaning: "Your history of overcoming is evidence of your capability. You have a proven track record.",
            reinforcement: "I've beaten bigger monsters than this one. My past victories remind me of my power."
        },
        {
            text: "I choose courage over comfort.",
            meaning: "Growth lives outside your comfort zone. Choosing courage means choosing growth.",
            reinforcement: "I don't let comfort be my cage. I step into the scary and find out I'm braver than I knew."
        },
        {
            text: "I am powerful beyond my circumstances.",
            meaning: "Your power isn't determined by what's happening around you, but by what's happening within you.",
            reinforcement: "Circumstances are the weather; I am the climate. Temporary conditions don't define my power."
        },
        {
            text: "My spirit cannot be conquered.",
            meaning: "External forces can affect your body and mind, but your spirit remains unconquerable if you guard it.",
            reinforcement: "You can take everything from me except my spirit. That is mine, and it is invincible."
        },
        {
            text: "I transform obstacles into opportunities.",
            meaning: "With the right perspective, every obstacle reveals an opportunity hidden within it.",
            reinforcement: "I am an alchemist. I take what blocks me and turn it into what propels me forward."
        },
        {
            text: "I am stronger today than I was yesterday.",
            meaning: "Growth may be invisible day-to-day, but it's real. You are constantly evolving.",
            reinforcement: "Every day I add another layer of strength. I am a compound effect of daily growth."
        },
        {
            text: "I carry resilience in my bones.",
            meaning: "Resilience isn't something you do—it's something you are. It's woven into your very being.",
            reinforcement: "I am made of comeback material. It's not a skill I learned; it's who I am at my core."
        },
        {
            text: "I thrive under pressure.",
            meaning: "Diamonds are formed under pressure. Some people crumble; you crystallize.",
            reinforcement: "Pressure doesn't crush me—it reveals me. I am at my best when the stakes are highest."
        },
        {
            text: "My willpower is unbreakable.",
            meaning: "Willpower is a muscle you've been building your whole life. Trust its strength.",
            reinforcement: "When my body says quit, my will says continue. My determination outweighs my doubt."
        }
    ],
    selflove: [
        {
            text: "I am worthy of love exactly as I am.",
            meaning: "Your worth isn't conditional on achievement or improvement. You are worthy right now, as you are.",
            reinforcement: "I don't need to earn love. I am lovable not because of what I do, but because of who I am."
        },
        {
            text: "I treat myself as my own best friend.",
            meaning: "Speak to yourself as you would to someone you love deeply. You deserve your own kindness.",
            reinforcement: "I am my own ride-or-die. I support myself, believe in myself, and never abandon myself."
        },
        {
            text: "I am enough, period.",
            meaning: "Not 'enough if' or 'enough when'—just enough. This statement needs no qualifiers.",
            reinforcement: "I am not almost enough, nearly enough, or enough with work. I am enough. Full stop."
        },
        {
            text: "I deserve kindness, especially from myself.",
            meaning: "You are often your harshest critic. Redirect that energy into compassion for yourself.",
            reinforcement: "I speak to myself with the same gentleness I'd use with a child I love. I deserve softness."
        },
        {
            text: "I love who I am becoming.",
            meaning: "Growth is a journey worth celebrating. Love the process of becoming, not just the destination.",
            reinforcement: "I am a caterpillar becoming a butterfly. Every stage of my transformation is beautiful."
        },
        {
            text: "I forgive myself for past mistakes.",
            meaning: "Holding onto past mistakes punishes you forever. Forgiveness releases you to move forward.",
            reinforcement: "I was doing my best with what I knew then. Now I know more, and I release my former self with love."
        },
        {
            text: "I am deserving of my own compassion.",
            meaning: "You give compassion freely to others. You deserve the same gift from yourself.",
            reinforcement: "I don't withhold from myself what I give to others. My compassion flows inward and outward."
        },
        {
            text: "I honor my needs without guilt.",
            meaning: "Your needs are not selfish—they're essential. Meeting them allows you to give from overflow.",
            reinforcement: "I fill my own cup first. This isn't selfish; it's how I ensure I have enough to give."
        },
        {
            text: "I am worthy of care and attention.",
            meaning: "You matter enough to invest in yourself. Self-care is a statement of self-worth.",
            reinforcement: "I don't just survive—I nurture myself. I am worth the time, money, and energy I invest in me."
        },
        {
            text: "I choose to speak kindly to myself.",
            meaning: "Your inner dialogue shapes your reality. Choose words that build you up, not tear you down.",
            reinforcement: "My inner voice is my biggest cheerleader, not my worst critic. I speak life into myself."
        },
        {
            text: "I accept myself completely today.",
            meaning: "Acceptance doesn't mean settling—it means embracing where you are as the starting point for growth.",
            reinforcement: "I am not a problem to be solved. I accept myself fully while still reaching for growth."
        },
        {
            text: "I am worthy of taking time for myself.",
            meaning: "Your time is valuable, and spending it on yourself is a worthwhile investment.",
            reinforcement: "I am not selfish for needing solitude. My alone time is where I recharge my magic."
        },
        {
            text: "I embrace all parts of who I am.",
            meaning: "You are a complex being with light and shadow. Wholeness means accepting the full spectrum.",
            reinforcement: "I love my messy parts too. My contradictions make me human, and I embrace them all."
        },
        {
            text: "I deserve the love I give to others.",
            meaning: "You pour love outward—make sure some flows inward. You deserve your own generosity.",
            reinforcement: "I give love freely to others; I freely receive my own love too. I am worthy of my own care."
        },
        {
            text: "I am patient with my own growth.",
            meaning: "Growth takes time. Rushing yourself only creates frustration. Trust your pace.",
            reinforcement: "I am not behind. My timeline is unique, and I trust that I'm exactly where I need to be."
        },
        {
            text: "I release the need to be perfect.",
            meaning: "Perfection is a prison. Freedom comes when you allow yourself to be beautifully imperfect.",
            reinforcement: "I trade perfection for progress. My imperfections are not flaws—they're my humanity."
        },
        {
            text: "I am allowed to set boundaries.",
            meaning: "Boundaries are not walls—they're doors with locks. You decide who gets a key.",
            reinforcement: "My 'no' is complete sentence. I don't need to justify protecting my peace."
        },
        {
            text: "I nurture myself without apology.",
            meaning: "Self-nurturing is not indulgent—it's essential. No apology is needed for taking care of yourself.",
            reinforcement: "I care for myself boldly and openly. My self-love is not a secret or a sin."
        },
        {
            text: "I am lovable and loved.",
            meaning: "You are inherently lovable, and you are loved—perhaps by more people than you realize.",
            reinforcement: "I attract love because I radiate it. Love finds me because I am made of it."
        },
        {
            text: "I respect myself and my journey.",
            meaning: "Self-respect means honoring your path, your pace, and your unique way of navigating life.",
            reinforcement: "I honor where I've been and where I'm going. My journey is worthy of respect."
        },
        {
            text: "I am gentle with myself on hard days.",
            meaning: "Hard days call for extra compassion, not extra criticism. Be soft with yourself when life is hard.",
            reinforcement: "On rough days, I wrap myself in kindness. I don't kick myself when I'm down."
        },
        {
            text: "I celebrate my uniqueness.",
            meaning: "There has never been and will never be another you. Your uniqueness is worth celebrating.",
            reinforcement: "I am a limited edition. My quirks and differences are features, not bugs."
        },
        {
            text: "I am worthy of joy and happiness.",
            meaning: "Joy is not something you have to earn. You are worthy of happiness simply because you exist.",
            reinforcement: "I don't need to suffer to deserve joy. Happiness is my birthright, and I claim it."
        },
        {
            text: "I put myself on my priority list.",
            meaning: "You can't pour from an empty cup. Prioritizing yourself enables you to show up for others.",
            reinforcement: "I am not an afterthought on my own to-do list. I matter enough to come first sometimes."
        },
        {
            text: "I am whole and complete right now.",
            meaning: "You are not half a person waiting to be completed. You are whole as you are.",
            reinforcement: "I am not missing any pieces. I am complete, and anything I add is bonus, not necessity."
        },
        {
            text: "I give myself grace when I stumble.",
            meaning: "Everyone stumbles. Grace means giving yourself the same understanding you'd give a friend.",
            reinforcement: "When I fall, I help myself up gently. I don't need to be perfect to be worthy."
        },
        {
            text: "I am my own safe place.",
            meaning: "You can always return to yourself for comfort. Build an inner sanctuary of self-acceptance.",
            reinforcement: "No matter where I am, I am home. I am my own shelter, my own source of peace."
        },
        {
            text: "I honor my feelings without judgment.",
            meaning: "Feelings are information, not enemies. Allow them without labeling them good or bad.",
            reinforcement: "I don't judge my emotions—I listen to them. Every feeling has something to teach me."
        },
        {
            text: "I am worthy of rest and peace.",
            meaning: "Rest is not earned through exhaustion. You deserve peace simply because you're human.",
            reinforcement: "I don't have to burn out to deserve a break. My peace matters as much as my productivity."
        },
        {
            text: "I choose myself today and every day.",
            meaning: "Choosing yourself is a daily practice. Make the commitment fresh each morning.",
            reinforcement: "Every day I wake up and decide: I choose me. This isn't selfish—it's essential."
        }
    ],
    success: [
        {
            text: "Success is my natural state.",
            meaning: "You are wired for success. It's not something you chase—it's something you align with.",
            reinforcement: "I don't hunt success; I attract it by being who I am. Success is drawn to my energy."
        },
        {
            text: "I am creating the life I desire.",
            meaning: "Your life is being shaped by your thoughts and actions right now. You are the creator.",
            reinforcement: "Every choice I make is a brushstroke on my life's canvas. I am painting my masterpiece."
        },
        {
            text: "Every step I take leads to greater success.",
            meaning: "Even small steps count. Progress is progress, and it all leads somewhere meaningful.",
            reinforcement: "I am on a staircase, not a treadmill. Every step elevates me, even the small ones."
        },
        {
            text: "I attract opportunities aligned with my goals.",
            meaning: "When you're clear on what you want, you start noticing opportunities you'd otherwise miss.",
            reinforcement: "My goals are magnets. The clearer they are, the more opportunities they pull toward me."
        },
        {
            text: "I am worthy of achieving my dreams.",
            meaning: "Your dreams exist because you're meant to pursue them. You are worthy of their fulfillment.",
            reinforcement: "My dreams were given to me for a reason. I am meant to achieve them, not just imagine them."
        },
        {
            text: "My efforts compound into remarkable results.",
            meaning: "Like compound interest, consistent effort multiplies over time. Small daily actions create massive outcomes.",
            reinforcement: "I am a snowball rolling downhill. Every day I pick up more momentum. My results will be exponential."
        },
        {
            text: "I am becoming more successful every day.",
            meaning: "Success is a journey, not a destination. Each day you grow, you succeed.",
            reinforcement: "Yesterday's me would be amazed at today's me. Tomorrow's me will look back proudly at today."
        },
        {
            text: "I turn obstacles into stepping stones.",
            meaning: "What blocks others becomes your ladder. It's all about perspective and persistence.",
            reinforcement: "I don't see walls—I see building materials. Every obstacle becomes part of my path."
        },
        {
            text: "I am destined for great things.",
            meaning: "You were born with potential for greatness. Trust that your destiny is significant.",
            reinforcement: "I didn't come this far to only come this far. My story has bigger chapters ahead."
        },
        {
            text: "My potential is unlimited.",
            meaning: "The only limits that exist are the ones you accept. Your potential has no ceiling.",
            reinforcement: "There is no box around my capabilities. I expand without boundaries into my fullest self."
        },
        {
            text: "I take inspired action toward my goals.",
            meaning: "Action driven by inspiration is powerful. When you move with purpose, results follow.",
            reinforcement: "I don't just dream—I do. My inspiration flows into action, and action flows into results."
        },
        {
            text: "Success flows from expected and unexpected sources.",
            meaning: "Stay open to success coming from surprising directions. It doesn't always look how you expect.",
            reinforcement: "I remain open to all channels of success. Sometimes the side door leads to the main stage."
        },
        {
            text: "I am focused, driven, and determined.",
            meaning: "These three qualities form a powerful trifecta. Focus gives direction, drive provides fuel, determination sustains.",
            reinforcement: "I am a laser, not a flashlight. My energy is concentrated and my direction is clear."
        },
        {
            text: "I celebrate every win, big or small.",
            meaning: "Celebration creates positive associations with effort. It motivates continued action.",
            reinforcement: "Every victory gets a moment of recognition. I train my brain to see progress everywhere."
        },
        {
            text: "I am building something meaningful.",
            meaning: "Your work matters. What you're creating has significance beyond what you can see.",
            reinforcement: "I am a builder. Brick by brick, day by day, I am constructing something that will last."
        },
        {
            text: "My work ethic sets me apart.",
            meaning: "Talent is common; work ethic is rare. Your willingness to work hard is a competitive advantage.",
            reinforcement: "While others sleep, I prepare. While others prepare, I execute. My hustle is my edge."
        },
        {
            text: "I deserve success and abundance.",
            meaning: "Success is not reserved for others. You are equally deserving of prosperity and achievement.",
            reinforcement: "I didn't miss the line when abundance was handed out. There's enough for me too."
        },
        {
            text: "I am open to new paths to success.",
            meaning: "Flexibility in method allows persistence in goal. Stay open to different routes.",
            reinforcement: "I don't cling to one road. If a path closes, I find another. My destination remains the same."
        },
        {
            text: "My success benefits everyone around me.",
            meaning: "Your success creates ripples. It inspires others, creates opportunities, and lifts your community.",
            reinforcement: "When I rise, I bring others with me. My success is not selfish—it's expansive."
        },
        {
            text: "I persist until I succeed.",
            meaning: "Persistence is the secret ingredient. Most people who fail simply stopped too soon.",
            reinforcement: "I don't have an expiration date on my goals. I continue until I win. Quitting is not an option."
        },
        {
            text: "I am making my vision a reality.",
            meaning: "What exists in your mind can exist in the world. You are the bridge between imagination and reality.",
            reinforcement: "I am an architect of reality. What I see in my mind, I build in my life."
        },
        {
            text: "I am a magnet for positive outcomes.",
            meaning: "Your energy attracts like energy. Positive expectations create positive results.",
            reinforcement: "Good things are drawn to me like metal to a magnet. I expect the best and often receive it."
        },
        {
            text: "My actions create lasting success.",
            meaning: "Sustainable success is built on consistent action, not luck. What you do matters.",
            reinforcement: "I don't build on sand. My success is founded on solid actions repeated daily."
        },
        {
            text: "I am on the right path.",
            meaning: "Trust your journey. Even when the destination isn't visible, you're moving in the right direction.",
            reinforcement: "I don't need to see the whole staircase—just the next step. I trust that I'm heading the right way."
        },
        {
            text: "I embrace growth as the path to success.",
            meaning: "Growth and success are inseparable. To achieve more, you must become more.",
            reinforcement: "I am not just chasing success—I am becoming the person who naturally achieves it."
        },
        {
            text: "I turn dreams into plans into action.",
            meaning: "Dreams are powerful, but action makes them real. Plans are the bridge between the two.",
            reinforcement: "I am a dream converter. I take visions and turn them into blueprints, then build."
        },
        {
            text: "Success comes naturally to me.",
            meaning: "When you align with your purpose, success feels effortless. You're in your element.",
            reinforcement: "I stop forcing and start flowing. Success finds me because I'm doing what I'm meant to do."
        },
        {
            text: "I am aligned with my highest potential.",
            meaning: "Alignment means your thoughts, words, and actions all point the same direction—toward your best self.",
            reinforcement: "I am in sync with my purpose. Every part of me is pointing toward my greatest life."
        },
        {
            text: "My dedication always pays off.",
            meaning: "Dedication may not pay off on your timeline, but it always pays off. Trust the process.",
            reinforcement: "I invest my dedication like deposits in a bank. The compound interest will be remarkable."
        },
        {
            text: "I create opportunities wherever I go.",
            meaning: "You don't have to wait for opportunities—you can create them. Your initiative opens doors.",
            reinforcement: "I am an opportunity generator. Wherever I go, I plant seeds that become possibilities."
        }
    ],
    mindset: [
        {
            text: "I control my thoughts, not the other way around.",
            meaning: "You are not your thoughts—you are the observer of them. This awareness gives you power to choose.",
            reinforcement: "I am the sky; my thoughts are just weather. They pass through me, but they don't define me."
        },
        {
            text: "I choose empowering thoughts.",
            meaning: "Every thought is a choice. Choose thoughts that energize you, not ones that drain you.",
            reinforcement: "I am the DJ of my mind, and I only play tracks that make me feel powerful."
        },
        {
            text: "My mind is a powerful tool I master daily.",
            meaning: "Your mind can work for you or against you. Daily practice puts you in control.",
            reinforcement: "I train my mind like an athlete trains their body. Daily reps make me mentally stronger."
        },
        {
            text: "I release thoughts that do not serve me.",
            meaning: "Not every thought deserves your attention. Let go of thoughts that hurt rather than help.",
            reinforcement: "I don't rent space in my head to thoughts that don't pay me with peace or progress."
        },
        {
            text: "I am the gatekeeper of my mind.",
            meaning: "You decide what enters and stays in your mental space. Guard it intentionally.",
            reinforcement: "My mind has a bouncer at the door. Negative thoughts get checked before entry."
        },
        {
            text: "I focus on what I can control.",
            meaning: "Energy spent on the uncontrollable is energy wasted. Focus where you have power.",
            reinforcement: "I stay in my lane. I can control my thoughts, actions, and responses—so that's where I focus."
        },
        {
            text: "I replace doubt with determination.",
            meaning: "Doubt is just a thought pattern. You can replace it with a more useful one.",
            reinforcement: "When doubt whispers 'you can't,' determination shouts 'watch me.' I choose which voice wins."
        },
        {
            text: "My thoughts shape my reality.",
            meaning: "What you think about, you bring about. Your thoughts are the architects of your life.",
            reinforcement: "My thoughts are seeds. I plant what I want to grow and pull the weeds of negativity."
        },
        {
            text: "I choose growth over fixed thinking.",
            meaning: "A growth mindset sees failure as learning, not verdict. Ability is developed, not predetermined.",
            reinforcement: "I don't say 'I can't'—I say 'I can't yet.' Every skill was once unknown to me."
        },
        {
            text: "I am rewiring my brain for success.",
            meaning: "Neuroplasticity is real—your brain changes based on what you practice. Think success, become successful.",
            reinforcement: "Every positive thought creates a new pathway. I am literally building a success-oriented brain."
        },
        {
            text: "I feed my mind with positivity.",
            meaning: "Your mind consumes what you expose it to. Feed it content that builds you up.",
            reinforcement: "I am careful about what I let into my mind. I consume content that nourishes my soul."
        },
        {
            text: "I let go of limiting beliefs.",
            meaning: "Limiting beliefs are just old programs. You can uninstall them and run new software.",
            reinforcement: "I delete old mental files that no longer serve me. My belief system gets regular upgrades."
        },
        {
            text: "My mindset is my greatest asset.",
            meaning: "Skills can be learned, resources can be acquired, but mindset determines how you use them.",
            reinforcement: "My mindset is worth more than any bank account. It's the source of all my other wealth."
        },
        {
            text: "I think like the person I want to become.",
            meaning: "Adopt the thought patterns of your future self. Think your way into becoming that person.",
            reinforcement: "Before I become successful, I think like someone successful. The doing follows the thinking."
        },
        {
            text: "I am mentally strong and emotionally intelligent.",
            meaning: "Mental strength and emotional intelligence work together. Both can be developed through practice.",
            reinforcement: "I have both the toughness to endure and the wisdom to navigate. I am complete."
        },
        {
            text: "I embrace challenges as growth opportunities.",
            meaning: "Reframe challenges from threats to opportunities. Each one is a chance to level up.",
            reinforcement: "I don't run from hard things—I run toward them. Each challenge is a disguised gift."
        },
        {
            text: "I train my mind like an athlete trains their body.",
            meaning: "Mental fitness requires exercise too. Daily practice builds mental strength.",
            reinforcement: "I do mental reps every day. Visualization, affirmation, meditation—I work out my mind."
        },
        {
            text: "I am in charge of how I feel today.",
            meaning: "Feelings can be influenced. While you can't always control what happens, you can influence your response.",
            reinforcement: "I set the tone for my day. External events are just suggestions—I choose my response."
        },
        {
            text: "I choose possibility over doubt.",
            meaning: "Both possibility and doubt are imagined futures. Choose the one that empowers you.",
            reinforcement: "I can imagine disaster or triumph—both are equally imaginary. I choose to imagine my victory."
        },
        {
            text: "My thoughts become my actions.",
            meaning: "Thoughts lead to actions, actions lead to habits, habits lead to character. It all starts with thought.",
            reinforcement: "I monitor my thoughts because I know they're the parents of my actions. Good thoughts breed good deeds."
        },
        {
            text: "I see solutions, not just problems.",
            meaning: "Where you focus expands. Look for solutions and you'll find them.",
            reinforcement: "I'm not a problem spotter—I'm a solution finder. I see doors where others see walls."
        },
        {
            text: "I am developing an unshakeable mindset.",
            meaning: "An unshakeable mindset isn't born—it's built through practice and intention.",
            reinforcement: "Like a blacksmith tempering steel, I am hardening my mindset through daily practice."
        },
        {
            text: "I respond thoughtfully, not reactively.",
            meaning: "There's space between stimulus and response. You can choose to fill it with thoughtfulness.",
            reinforcement: "I pause before I respond. That pause is where my power lives—the power to choose wisely."
        },
        {
            text: "I believe in my ability to figure things out.",
            meaning: "You don't need to have all the answers—just faith in your ability to find them.",
            reinforcement: "I am a problem-solving machine. I've figured things out before, and I'll do it again."
        },
        {
            text: "I am mentally prepared for success.",
            meaning: "Preparation precedes performance. Mental readiness positions you for opportunity.",
            reinforcement: "When opportunity knocks, I'll be ready. I'm not waiting for success—I'm prepared for it."
        },
        {
            text: "I choose progress over perfection.",
            meaning: "Perfection is a trap that prevents action. Progress gets you where you want to go.",
            reinforcement: "Done is better than perfect. I'd rather have imperfect action than perfect paralysis."
        },
        {
            text: "My mind works for me, not against me.",
            meaning: "Your mind is a tool—make it serve your goals, not sabotage them.",
            reinforcement: "I am the boss of my mind. It works for me, on my goals, according to my direction."
        },
        {
            text: "I focus on what is going right.",
            meaning: "What you focus on grows. By focusing on what's going right, you get more of it.",
            reinforcement: "I refuse to obsess over what's wrong. My attention goes to what's working and growing."
        },
        {
            text: "I release negativity and embrace positivity.",
            meaning: "Negativity is just noise. Let it go and tune into the frequency of positivity.",
            reinforcement: "I open my fist and let negativity fall away. My hands are now open to receive good things."
        },
        {
            text: "I have the mindset of a winner.",
            meaning: "Winners think differently. They see opportunity, embrace challenge, and expect victory.",
            reinforcement: "I think like someone who wins. Before the victory comes, the winner's mindset is already in place."
        }
    ]
};

// State
let currentCategory = 'all';
let currentAffirmation = null;
let dailyCount = 0;
let favorites = [];
let streak = 1;
let detailsOpen = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    updateStats();
    setupEventListeners();
    setupConfetti();
});

// Load from localStorage
function loadFromStorage() {
    const saved = localStorage.getItem('iAppreciateYou');
    if (saved) {
        const data = JSON.parse(saved);
        favorites = data.favorites || [];
        streak = data.streak || 1;
        const lastDate = data.lastDate;
        const today = new Date().toDateString();
        if (lastDate === today) {
            dailyCount = data.dailyCount || 0;
        } else {
            dailyCount = 0;
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastDate === yesterday.toDateString()) {
                streak++;
            } else if (lastDate !== today) {
                streak = 1;
            }
        }
    }
    updateFavoritesList();
}

// Save to localStorage
function saveToStorage() {
    localStorage.setItem('iAppreciateYou', JSON.stringify({
        favorites, dailyCount, streak,
        lastDate: new Date().toDateString()
    }));
}

// Event listeners
function setupEventListeners() {
    document.getElementById('new-affirmation-btn').addEventListener('click', showNewAffirmation);
    document.getElementById('favorite-btn').addEventListener('click', toggleFavorite);
    document.getElementById('share-btn').addEventListener('click', shareAffirmation);
    document.getElementById('details-toggle').addEventListener('click', toggleDetails);
    document.getElementById('favorites-search').addEventListener('input', filterFavorites);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
        });
    });
}

// Filter favorites by search term
function filterFavorites(e) {
    const searchTerm = e.target.value.toLowerCase();
    const list = document.getElementById('favorites-list');

    if (favorites.length === 0) {
        list.innerHTML = '<p class="empty-state">Click the heart to save favorites</p>';
        return;
    }

    const filtered = favorites.filter(fav =>
        fav.text.toLowerCase().includes(searchTerm) ||
        (fav.meaning && fav.meaning.toLowerCase().includes(searchTerm)) ||
        (fav.category && fav.category.toLowerCase().includes(searchTerm))
    );

    if (filtered.length === 0) {
        list.innerHTML = '<p class="empty-state">No matches found</p>';
        return;
    }

    list.innerHTML = filtered.map((fav, i) => {
        const originalIndex = favorites.findIndex(f => f.text === fav.text);
        return `
            <div class="favorite-item">
                <span class="favorite-text">${fav.text}</span>
                <button class="remove-btn" onclick="removeFavorite(${originalIndex})">×</button>
            </div>
        `;
    }).join('');
}

// Toggle details section
function toggleDetails() {
    const toggle = document.getElementById('details-toggle');
    const content = document.getElementById('details-content');
    detailsOpen = !detailsOpen;

    toggle.classList.toggle('active', detailsOpen);
    content.classList.toggle('open', detailsOpen);
}

// Close details
function closeDetails() {
    const toggle = document.getElementById('details-toggle');
    const content = document.getElementById('details-content');
    detailsOpen = false;
    toggle.classList.remove('active');
    content.classList.remove('open');
}

// Get random affirmation
function getRandomAffirmation() {
    let pool = [];
    if (currentCategory === 'all') {
        Object.entries(affirmations).forEach(([cat, arr]) => {
            arr.forEach(aff => pool.push({ ...aff, category: cat }));
        });
    } else {
        pool = affirmations[currentCategory].map(aff => ({ ...aff, category: currentCategory }));
    }
    return pool[Math.floor(Math.random() * pool.length)];
}

// Show new affirmation
function showNewAffirmation() {
    currentAffirmation = getRandomAffirmation();
    const textEl = document.getElementById('affirmation-text');
    const badgeEl = document.getElementById('category-badge');
    const meaningEl = document.getElementById('details-meaning');
    const reinforcementEl = document.getElementById('details-reinforcement');
    const card = document.querySelector('.affirmation-card');
    const detailsSection = document.getElementById('details-section');

    // Show details section
    detailsSection.style.display = 'block';

    // Close details when getting new affirmation
    closeDetails();

    card.classList.add('bounce');
    setTimeout(() => card.classList.remove('bounce'), 500);

    textEl.style.opacity = '0';
    setTimeout(() => {
        textEl.textContent = currentAffirmation.text;
        textEl.style.opacity = '1';
    }, 150);

    // Update details content
    meaningEl.textContent = currentAffirmation.meaning;
    reinforcementEl.textContent = currentAffirmation.reinforcement;

    const categoryNames = {
        'selflove': 'Self-Love',
        'winner': 'Winner',
        'confidence': 'Confidence',
        'gratitude': 'Gratitude',
        'strength': 'Strength',
        'success': 'Success',
        'mindset': 'Mindset'
    };
    badgeEl.textContent = categoryNames[currentAffirmation.category] || currentAffirmation.category;

    updateFavoriteButton();
    dailyCount++;
    updateStats();
    saveToStorage();
    triggerConfetti();
}

// Toggle favorite
function toggleFavorite() {
    if (!currentAffirmation) return;
    const btn = document.getElementById('favorite-btn');
    const toast = document.getElementById('favorite-toast');
    const idx = favorites.findIndex(f => f.text === currentAffirmation.text);
    if (idx > -1) {
        favorites.splice(idx, 1);
        btn.classList.remove('active');
    } else {
        favorites.push(currentAffirmation);
        btn.classList.add('active');
        triggerConfetti();
        // Show toast
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 1500);
    }
    updateStats();
    updateFavoritesList();
    saveToStorage();
}

// Update favorite button
function updateFavoriteButton() {
    if (!currentAffirmation) return;
    const btn = document.getElementById('favorite-btn');
    btn.classList.toggle('active', favorites.some(f => f.text === currentAffirmation.text));
}

// Update stats
function updateStats() {
    document.getElementById('daily-count').textContent = dailyCount;
    document.getElementById('favorite-count').textContent = favorites.length;
    document.getElementById('streak-count').textContent = streak;
}

// Update favorites list
function updateFavoritesList() {
    const list = document.getElementById('favorites-list');
    if (favorites.length === 0) {
        list.innerHTML = '<p class="empty-state">Click the heart to save favorites</p>';
        return;
    }
    list.innerHTML = favorites.map((fav, i) => `
        <div class="favorite-item">
            <span class="favorite-text">${fav.text}</span>
            <button class="remove-btn" onclick="removeFavorite(${i})">×</button>
        </div>
    `).join('');
}

// Remove favorite
function removeFavorite(index) {
    favorites.splice(index, 1);
    updateStats();
    updateFavoritesList();
    updateFavoriteButton();
    saveToStorage();
}

// Share
function shareAffirmation() {
    const text = currentAffirmation
        ? `"${currentAffirmation.text}"\n\n${currentAffirmation.meaning}\n\n- iAppreciateYou`
        : "Daily affirmations at iAppreciateYou!";
    if (navigator.share) {
        navigator.share({ title: 'iAppreciateYou', text }).catch(() => copyText(text));
    } else {
        copyText(text);
    }
}

function copyText(text) {
    navigator.clipboard?.writeText(text).then(() => {
        const btn = document.getElementById('share-btn');
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Share', 1500);
    });
}

// Confetti
let canvas, ctx, particles = [];
function setupConfetti() {
    canvas = document.getElementById('confetti-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    animate();
}

function triggerConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    for (let i = 0; i < 25; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -10,
            size: Math.random() * 6 + 3,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 8 - 4
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
        return p.y < canvas.height;
    });
    requestAnimationFrame(animate);
}
