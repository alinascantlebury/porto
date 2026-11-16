import welcomeImg from './images/welcome-screen.png';
import signupImg from './images/signup-screen.png';
import detailsImg from './images/details-screen.png';
import consentImg from './images/consent-screen.png';
import howImg from './images/how-screen.png';

import swipe_1 from './images/swipe-start.png';
import swipe_2 from './images/swipe-middle.png';
import swipe_3 from './images/swipe-middle-1.png';
import libraryImg from './images/library-1.png';

import nalaDemoVideo from './images/nala.mp4';
import nalaHome1 from './images/home-1.jpeg';
import nalaHome from './images/home.jpeg';

import commonsVideo1 from './images/one.mp4';
import commonsVideo2 from './images/two.mp4';
import commonsImg from './images/commons.png';

import ebAiImg from './images/Vector.png';
import ebTestImg from './images/test.png';
import ebVideo from './images/ebay.qt';
export const projects = [

  
  {
    id: 'nala',

    title: 'Nala, AI Health Coach',
    meta: 'University of San Francisco — Aug 2025 – Feb 2026',
    desc: 'An AI-powered health coaching app that transforms real coaching conversations into structured, personalized wellness programs.',
    image: welcomeImg,
    tags: ['React Native', 'AI', 'UX'],

    role: 'Front-end Engineer · Project Lead · UI Design',
    timeline: 'Aug 2025 – Feb 2026',
    team: '3 engineers · 2 sponsors',

    hook: "Most people don't lack motivation—they lack a plan. Nala bridges the gap between intention and action by turning real coaching conversations into structured, adaptive wellness programs.",

    sections: [
      {
        label: 'overview',
        content:
          'Nala is an AI-powered health coaching assistant designed to guide users through a structured 4-week wellness journey. The app combines conversational AI with evidence-based coaching frameworks to deliver personalized, actionable plans.'
      },

      {
        label: 'problem',
        content:
          'Access to high-quality health coaching is limited by cost, availability, and scalability. Most digital wellness tools are either too generic or lack the structure needed to drive real behavior change, leaving users without clear guidance or accountability.'
      },

      {
        label: 'approach',
        bullets: [
          {
            bold: 'Conversational Interface: ',
            text: 'Designed a chat-based system that mirrors real coaching sessions to reduce friction and increase engagement.'
          },
          {
            bold: 'Structured Programs: ',
            text: 'Translated coaching conversations into step-by-step wellness plans tailored to each user.'
          },
          {
            bold: 'Personalization Layer: ',
            text: 'Built logic to adapt recommendations based on user responses and behavioral patterns.'
          }
        ]
      },

      {
        label: 'technical design',
        bullets: [
          {
            bold: 'Frontend: ',
            text: 'Built with React Native using modular, reusable components for scalability.'
          },
          {
            bold: 'AI Integration: ',
            text: 'Leveraged retrieval-augmented generation (RAG) to ground responses in real coaching data.'
          },
          {
            bold: 'State Management: ',
            text: 'Designed flows to handle dynamic conversation states and program progression.'
          }
        ]
      },

      {
        label: 'demo',
        video: nalaDemoVideo
      },

      {
        label: 'screens',
        screens: [
          { image: welcomeImg, title: 'Welcome', description: 'Introduces Nala as a digital health coach that helps USF students build lifestyle and behavior change skills over a 4-week program, setting expectations before signup.' },
          { image: signupImg, title: 'Sign up', description: 'Firebase authentication flow supporting email, Google, and Apple sign-in.' },
          { image: howImg, title: 'How it works', description: 'Walks users through the 4-session structure: goal-setting in session 1, progress check-ins and problem-solving in sessions 2 and 3, and reflection with a long-term plan in session 4.' },
          { image: detailsImg, title: 'Your details', description: 'Get-to-know-you questions covering student status, health rating, readiness for behavior change, weekly busyness, and free time, used to personalize the coaching approach from session one.' },
          { image: consentImg, title: 'Consent', description: 'Confidentiality screen added after collaborating with Kelly and her team, explaining that chat data is combined and de-identified in any reporting.' },
          { image: nalaHome1, title: 'Home', description: 'Main dashboard showing current session status, with later sessions unlocking as prior ones are completed.' },
          { image: nalaHome, title: 'Home, expanded', description: 'Expanded home view showing session history and progress across the 4-week program.' },
        ]
      },

      {
        label: 'impact',
        bullets: [
          {
            bold: 'Increased engagement: ',
            text: 'Users interact through natural conversation instead of rigid forms.'
          },
          {
            bold: 'Improved clarity: ',
            text: 'Users receive structured, actionable plans instead of vague advice.'
          },
          {
            bold: 'Scalable coaching: ',
            text: 'Transforms a traditionally human-only service into a scalable digital product.'
          }
        ]
      }
    ]
  },
  {
    id: 'SwipeGuide SF',

    title: 'SwipeGuide SF',
    meta: 'University of San Francisco — Jan 2026 – Mar 2026',
    desc: 'A Hinge-inspired swipe app for people visiting San Francisco for the first time or wanting to explore the city more.',
    image: swipe_1,
    tags: ['UI', 'UX', 'Prototyping'],

    role: 'UI/UX Design',
    timeline: 'Jan 2026 – Mar 2026',
    team: 'me :)',

    hook: 'Swipe. Explore. Repeat.',

    sections: [
      {
        label: 'overview',
        content:
          'SwipeGuide SF is a redesign of the existing San Francisco Tour Guide app. The goal was to make city exploration more fun and personalized — targeting first-time visitors and locals who always need a new favorite spot. Instead of browsing through category lists, users swipe through "personified" locations in a Hinge-style format, save favorites, and filter them on a map.'
      },

      {
        label: 'problem',
        content:
          'The original SF Tour Guide app required too much clicking into categories to find anything, had a boring and unintuitive layout, and offered a map with no filters or distinction between favorited and unfavorited places — making discovery feel like a chore rather than an adventure.'
      },

      {
        label: 'approach',
        bullets: [
          {
            bold: 'Swipe mechanic: ',
            text: 'Borrowed the "swipe" interaction pattern from Hinge to make browsing locations feel fun and low-pressure, replacing the old category-drill-down navigation.'
          },
          {
            bold: 'Personified locations: ',
            text: 'Each location is presented with a personality-driven description ("The thing you should know about me is…"), turning static listings into engaging profiles.'
          },
          {
            bold: 'Improved map: ',
            text: 'Added filters and visual distinction between favorited and unfavorited places so users can actually navigate their saved spots.'
          }
        ]
      },

      {
        label: 'design decisions',
        bullets: [
          {
            bold: 'Category filters on swipe screen: ',
            text: "Added Food, Things to Do, and Museums filters so users don't have to browse all categories if they have something specific in mind."
          },
          {
            bold: 'Nav bar consistency: ',
            text: 'Kept the original nav bar (Swipe, Map, Saved) but updated colors to match the header for a more cohesive visual identity.'
          },
          {
            bold: 'Splash screen branding: ',
            text: "Added a custom icon on the splash screen for added color and personality, reinforcing the app's bold red brand."
          }
        ]
      },

      {
        label: 'screens',
        screens: [
          { image: swipe_1, title: 'Swipe, start', description: 'Card stack of SF places with dating-profile-style bios and photos, swipe left to pass and right to save, in a brick red and warm cream design system.' },
          { image: swipe_2, title: 'Swipe, mid-deck', description: 'Continued swiping through the deck, mixing well-known spots with local picks like farmers markets and neighborhood hidden gems rather than just tourist attractions.' },
          { image: swipe_3, title: 'Swipe, filtered', description: 'Deck filtered by category (Food, Things to do, Museums) so users can narrow the swipe stack to what they are in the mood for.' },
          { image: libraryImg, title: 'Saved library', description: 'Saved places collected from swiping right, giving users a running list to revisit and plan around.' },
        ]
      },

      {
        label: 'impact',
        bullets: [
          {
            bold: 'More engaging discovery: ',
            text: 'The swipe mechanic turns passive browsing into an active, fun experience.'
          },
          {
            bold: 'Reduced friction: ',
            text: 'Inline category filters eliminate the need to navigate deep into menus.'
          },
          {
            bold: 'Clearer map experience: ',
            text: 'Favorited locations are now visually distinct and filterable, making the map actually useful.'
          }
        ]
      }
    ]
  },
  {
    id: 'the-commons',
    title: 'The Commons',
    meta: 'University of San Francisco — Spring 2026',
    desc: 'A household chore app designed for people who want a little whimsy in the parts of life everyone wishes weren\'t there.',
    image: commonsImg,
    tags: ['Figma', 'UI/UX', 'Prototyping'],
  
    role: 'UI/UX Design',
    timeline: 'Jan 2026 – Mar 2026',
    team: 'me :)',
  
    hook: 'The tragedy of the commons — everyone depends on it, nobody tends it.',
  
    sections: [
      {
        label: 'overview',
        content:
          'The Commons is a household chore and nudge app built for roommates who want to stay on top of shared responsibilities without the guilt or the group chat drama. It filters your to-do list by energy, space, or time — and lets you send medieval-style town crier announcements when someone needs a nudge.'
      },
      {
        label: 'problem',
        content:
          'Most chore apps rely on guilt and logging. They are generic, joyless, and nobody actually uses them. The Commons was designed around the idea that shared living is a commons — everyone depends on it, nobody tends it — and that a little whimsy goes a long way toward making people actually want to show up.'
      },
      {
        label: 'approach',
        bullets: [
          {
            bold: 'Filter by energy, space, or time: ',
            text: 'Instead of a flat to-do list, users filter chores by what they actually have available right now.'
          },
          {
            bold: 'Medieval aesthetic: ',
            text: 'Town crier announcements, crystal ball prompts, and hourglass timers replace sterile UI with something people actually enjoy using.'
          },
          {
            bold: 'Nudge flow: ',
            text: 'Instead of passive-aggressive group chats, users send structured announcements that are funny and firm at the same time.'
          }
        ]
      },
      {
        label: 'flow 1 — i have 5 minutes',
        video: commonsVideo1
      },
      {
        label: 'flow 2 — i\'ve taken out the trash 3x in a row',
        video: commonsVideo2
      }
    ]
  },
  {
    id: 'ebay-ai-navigation',
    title: 'E.B., AI Navigation for eBay',
    meta: 'University of San Francisco — 2025',
    desc: 'A research study on eBay\'s navigation that led to E.B., an AI assistant that handles search and filters so shoppers find products faster.',
    image: ebAiImg,
    tags: ['UX Research', 'Concept Testing', 'AI'],

    role: 'UX Research · Usability Testing',
    timeline: '2025',
    team: '4 designers',

    hook: 'Shoppers know what they want. eBay\'s navigation makes them work too hard to find it.',

    sections: [
      {
        label: 'overview',
        content:
          'A UI/UX course project evaluating how easily people navigate eBay\'s website and app. We studied the current experience through a journey map, usability tests, and a survey, then designed and concept tested E.B., an AI chat assistant that turns plain requests into filtered search results.'
      },
      {
        label: 'problem',
        content:
          'Users found eBay\'s interface cluttered and hard to navigate. Filters behaved differently on phone and desktop, and features like Brand Outlet were easy to miss. As frustration grew, users also became wary of what the site was showing them and why.'
      },
      {
        label: 'past studies',
        bullets: [
          {
            bold: 'Journey map: ',
            text: 'Traced users\' steps, feelings, and pain points while shopping on eBay.'
          },
          {
            bold: 'Usability testing: ',
            text: '5 participants, ages 18 to 21, in person. Each spent 5 minutes exploring the homepage while thinking aloud, then searched for a used LG TV under $1,000 in good condition, verified by eBay, first on desktop and then on the phone app.'
          },
          {
            bold: 'Survey: ',
            text: 'Asked about shopping habits, device preference, which sites people shop on, and how they rated navigating eBay.'
          }
        ],
        callout: 'A less cluttered screen and the same filter section on desktop as on mobile would improve the experience the most.',
        screens: [ebTestImg],
        wide: true
      },
      {
        label: 'concept: e.b.',
        content:
          'We designed E.B., an AI chatbot prototype, and benchmarked it against how Facebook Marketplace, Amazon, and Shopify (Shopify Magic) use AI in shopping. Interviews asked how likely participants were to use an AI assistant, what they would want it to do, whether they would rather type or speak, and what would make them stop using it.',
        bullets: [
          { bold: 'Plain commands: ', text: 'Takes item, price range, and shipping in natural language.' },
          { bold: 'Auto filters: ', text: 'Applies eBay\'s filters for the user.' },
          { bold: 'Rich results: ', text: 'Returns links and images for each product request.' },
          { bold: 'Follow-ups: ', text: 'Asks clarifying questions and makes recommendations.' }
        ],
        screens: [ebAiImg],
        wide: true
      },
      {
        label: 'prototype',
        video: ebVideo,
        wide: true
      },
      {
        label: 'findings',
        bullets: [
          {
            bold: 'Simple commands: ',
            text: 'Users wanted to type short prompts like "pokemon card" and have E.B. ask which edition they meant.'
          },
          {
            bold: 'Text over voice: ',
            text: 'Participants preferred typing to speaking.'
          },
          {
            bold: 'Image search: ',
            text: 'Users wanted to upload a photo and find similar products.'
          },
          {
            bold: 'Trust: ',
            text: 'Participants were cautious about AI seeing personal information, and some worried it might hide listings or push paid products. Comfort ranged widely: one only used AI for research when stuck, one saw it as a toy, and one already relied on Alexa for shopping lists.'
          }
        ]
      },
      {
        label: 'recommendations',
        bullets: [
          {
            bold: 'Transparency: ',
            text: 'Open each chat with a short note that results are ranked by relevance and seller trust, not paid placement.'
          },
          {
            bold: 'Short, scannable answers: ',
            text: 'Lead with price, condition, and shipping, with an option to expand.'
          },
          {
            bold: 'Smart follow-ups: ',
            text: 'Ask clarifying questions only when a search is too broad, with tap-to-answer buttons like [New] [Used] [Either].'
          },
          {
            bold: 'Quick actions: ',
            text: 'One-click buttons for common tasks like tracking an order or starting a return.'
          },
          {
            bold: 'User control: ',
            text: 'Let users switch between best matches and all listings.'
          },
          {
            bold: 'Image search: ',
            text: 'Combine an upload with text, like "find this jacket in blue," and allow in-app camera scanning.'
          },
          {
            bold: 'Privacy: ',
            text: 'Limit personal features like order tracking and location to logged-in users.'
          }
        ]
      }
    ]
  },
  {
    id: 'flock-by-block',
    title: 'Flock by Block',
    meta: 'University of San Francisco — Spring 2026',
    desc: 'A scrollytelling data visualization of SF bird ecology using 600,000+ eBird observations. Crows follow bins. Parrots follow parks. Hawks follow the coast.',
    image: null,
    tags: ['D3.js', 'Data Viz', 'Scrollytelling'],
    externalUrl: 'https://alinascantlebury.github.io/birdie/',
  }
];