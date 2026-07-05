import welcomeImg from './images/welcome-screen.png';
import signupImg from './images/signup-screen.png';
import detailsImg from './images/details-screen.png';
import consentImg from './images/consent-screen.png';
import howImg from './images/how-screen.png';

import swipe_1 from './images/swipe-start.png';
import swipe_2 from './images/swipe-middle.png';
import swipe_3 from './images/swipe-middle-1.png';
import libraryImg from './images/library-1.png';

import commonsVideo1 from './images/one.mp4';
import commonsVideo2 from './images/two.mp4';
import commonsImg from './images/commons.png';
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
        label: 'screens',
        screens: [welcomeImg, signupImg, detailsImg, howImg, consentImg]
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
        screens: [swipe_1, swipe_2, swipe_3, libraryImg]
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
    id: 'flock-by-block',
    title: 'Flock by Block',
    meta: 'University of San Francisco — Spring 2026',
    desc: 'A scrollytelling data visualization of SF bird ecology using 600,000+ eBird observations. Crows follow bins. Parrots follow parks. Hawks follow the coast.',
    image: null,
    tags: ['D3.js', 'Data Viz', 'Scrollytelling'],
    externalUrl: 'https://alinascantlebury.github.io/birdie/',
  }
];