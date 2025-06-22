export type Project = {
  title: string;
  description: string[];
  image: string;
  links?: {
    title: string;
    url: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "UrbanHub",
    description: [
      "UrbanHub is a cutting-edge platform that revolutionises urban transport management. It provides \
      cities and transport operators with a solution to manage their operations, deliver a great passenger \
      experience, and optimise their services."
    ],
    image: "/images/urbanhub.png",
    links: [
      {
        title: "UrbanThings",
        url: "https://urbanthings.co/"
      }
    ]
  },
  {
    title: "Backpacking API",
    description: [
      "Currently, backpackers find it difficult to stay in touch with their peers and re-meet them in the future. \
      Whilst existing solutions exist to help backpackers find new friends, none specifically address the issue \
      of meeting those that have been previously met in the past, and this API aims to address that.",
      
      "This API makes use of the ASP.NET Core Framework, and includes authentication features, networking features \
      such as requesting to be friends and blocking, a real time chat feature, and integrations with external \
      geocoding APIs. For a more in depth description, please take a look at the documentation on the project's GitHub."
    ],
    image: "/images/backpacking.jpg",
    links: [
      {
        title: "github",
        url: "https://github.com/dominikalk/BackpackingAPI"
      }
    ]
  },
  {
    title: "Spike PMS",
    description: [
      "The Spike Property Management System is designed to transform the way property and block managers handle \
      their operations. Their platform automates routine tasks, centralises data management, and enhances tenant \
      and leaseholder communication, all in a user-friendly dashboard and white-label mobile app."
    ],
    image: "/images/spike.webp",
    links: [
      {
        title: "Spike PMS",
        url: "https://www.spikeglobal.com/spike-property-management-system/"
      },
      {
        title: "Spike Living",
        url: "https://www.spikeglobal.com/spike-living/"
      }
    ]
  },
  {
    title: "Project Outlaw",
    description:
      [
        "Masked Desperados (aka Project Outlaw) is a 2-6 online multi-player game built with the Unity \
        Engine and Netcode for GameObjects.",

        "I worked as the lead developer for this University project, reviewing other students' code, \
        creating tickets, and planning the full architecture of the solution.",

        "You play as either an outlaw or a sheriff, where outlaws must complete all their tasks and \
        sheriffs must find the outlaws to kill them. You act like a villager if you are an outlaw to \
        evade the sheriffs."
      ],
    image: "/images/projectoutlaw.png",
    links: [
      {
        title: "github",
        url: "https://github.com/dominikalk/EvolutionSim"
      },
      {
        title: "itch.io",
        url: "https://dominikalk.itch.io/evosim"
      }
    ]
  },
  {
    title: "Earth HQ - GCA",
    description: [
      "Earth HQ is the media arm and strategic communications platform of the Global Commons Alliance. \
      Earth HQ supports GCA by democratizing vital information and science, building public support for \
      planetary stewardship, and tracking progress on the safe and just transition to a stable planet."
    ],
    image: "/images/earthhq.png",
    links: [
      {
        title: "EarthHQ",
        url: "https://globalcommonsalliance.org/news/earth-hq-dashboard/",
      },
      {
        title: "GCA",
        url: "https://globalcommonsalliance.org/",
      },
      {
        title: "3 Sided Cube",
        url: "https://3sidedcube.com/"
      }
    ],
  },
  {
    title: "3 Sided Cube Projects",
    description: [
      "Whilst at the 3 Sided Cube app development agency, and their sister company Chelsea Apps, I \
      worked on a number of projects. These included:", 
      "Bother - an ecommerce household essentials service,",
      "Uplevyl - female-forward platform created to amplify women's unique voices and perspectives,",
      "and BeePro - a job management app for tradespeople,"
    ],
    image: "/images/3sidedcube.png",
    links: [
      {
        title: "3 Sided Cube",
        url: "https://3sidedcube.com/"
      },
      {
        title: "Uplevyl",
        url: "https://www.uplevyl.com/"
      },
      {
        title: "BeePro",
        url: "https://www.beepro.com/"
      }
    ],
  },
  {
    title: "EvoSim",
    description:
      [
        "EvoSim is an evolution simulator built on the Unity game engine. \
        This project was done as part of my A level course work, and has many \
        things I would do differently now, but I am still very proud of the acomplishment.",

        "The simulator allows for the manipulation of starting conditions, where the terrain is \
        then procedurally generated. The pause menu contains a graph of the varying populations \
        and a genetic trait of your choice. Monitor how the species' evolve to survive."
      ],
    image: "/images/evosim.png",
    links: [
      {
        title: "github",
        url: "https://github.com/dominikalk/EvolutionSim"
      },
      {
        title: "itch.io",
        url: "https://dominikalk.itch.io/evosim"
      }
    ]
  }
];
