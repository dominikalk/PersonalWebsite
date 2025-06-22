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
    title: "Backpacking API",
    description: [
      "Currently, backpackers find it difficult to stay in touch with their peers and re-meet them in the future. Whilst existing solutions exist to help backpackers find new friends, none \
      specifically address the issue of meeting those that have been previously met in the past, and this API aims to address that.",
      
      "This API makes use of the ASP.NET Core Framework, and includes authentication features, networking features such as requesting to be friends and blocking, a real time chat feature, \
      and integrations with external geocoding APIs. For a more in depth description, please take a look at the documentation on the project's GitHub."
    ],
    image: "/images/backpacking.jpg",
  },
  {
    title: "Earth HQ - GCA",
    description: [
      "Earth HQ is the media arm and strategic communications platform of the Global Commons Alliance. Earth HQ supports GCA by democratizing vital information \
      and science, building public support for planetary stewardship, and tracking progress on the safe and just transition to a stable planet.",

      "I worked as one of two main devs on two sprints with Earth HQ, refactoring the app to implement typescript, add sharing functionality, and upgrade the earth and information view."
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
  // {
  //   title: "Bother",
  //   description:
  //     ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque et eaque facilis modi provident similique commodi ab vitae? Eos natus ab, omnis, magnam ad ipsum accusantium veritatis pariatur ipsam soluta ut cum laudantium illum explicabo exercitationem voluptatibus quod quaerat earum mollitia! Reiciendis ipsam ut ducimus, blanditiis architecto soluta aliquam?"],
  //   image:
  //     "https://i.shgcdn.com/b1646cc7-81c9-4187-931b-ab058c462502/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  // },
  // {
  //   title: "Uplevyl",
  //   description:
  //     ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque et eaque facilis modi provident similique commodi ab vitae? Eos natus ab, omnis, magnam ad ipsum accusantium veritatis pariatur ipsam soluta ut cum laudantium illum explicabo exercitationem voluptatibus quod quaerat earum mollitia! Reiciendis ipsam ut ducimus, blanditiis architecto soluta aliquam?"],
  //   image:
  //     "https://media.licdn.com/dms/image/D560BAQEY2dF5iM_LTg/company-logo_200_200/0/1666120876128?e=2147483647&v=beta&t=_MkppIC_DbFWh0ii-kOSSj4YrKhX9_27NXdUl8YcU4Y",
  // },
  // {
  //   title: "BeePro",
  //   description:
  //     ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque et eaque facilis modi provident similique commodi ab vitae? Eos natus ab, omnis, magnam ad ipsum accusantium veritatis pariatur ipsam soluta ut cum laudantium illum explicabo exercitationem voluptatibus quod quaerat earum mollitia! Reiciendis ipsam ut ducimus, blanditiis architecto soluta aliquam?"],
  //   image:
  //     "https://play-lh.googleusercontent.com/DO0Ms4-n3HjIZFnzJazNufApxABVSBT1vO-XTnMQBzSzqjulm8_TaDceIl3ZM6gmZEno=w240-h480-rw",
  // },
  // {
  //   title: "LimeLight",
  //   description:
  //     ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque et eaque facilis modi provident similique commodi ab vitae? Eos natus ab, omnis, magnam ad ipsum accusantium veritatis pariatur ipsam soluta ut cum laudantium illum explicabo exercitationem voluptatibus quod quaerat earum mollitia! Reiciendis ipsam ut ducimus, blanditiis architecto soluta aliquam?"],
  //   image:
  //     "https://cdn.jim-nielsen.com/ios/512/lime-your-ride-anytime-2019-07-29.png",
  // },
  // {
  //   title: "EvoSim",
  //   description:
  //     ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque et eaque facilis modi provident similique commodi ab vitae? Eos natus ab, omnis, magnam ad ipsum accusantium veritatis pariatur ipsam soluta ut cum laudantium illum explicabo exercitationem voluptatibus quod quaerat earum mollitia! Reiciendis ipsam ut ducimus, blanditiis architecto soluta aliquam?"],
  //   image: "https://img.itch.zone/aW1nLzMxOTk2OTIucG5n/315x250%23c/fLN0ip.png",
  // },
  // {
  //   title: "DeltΔverse",
  //   description:
  //     ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque et eaque facilis modi provident similique commodi ab vitae? Eos natus ab, omnis, magnam ad ipsum accusantium veritatis pariatur ipsam soluta ut cum laudantium illum explicabo exercitationem voluptatibus quod quaerat earum mollitia! Reiciendis ipsam ut ducimus, blanditiis architecto soluta aliquam?"],
  //   image:
  //     "https://media.istockphoto.com/id/1210588277/vector/impossible-triangle-penrose-optical-illusion-purple-gradient-endless-triangular-shape.jpg?s=612x612&w=0&k=20&c=DGhgxlkD6Fho2KC8ViEPx4PCoDokLZwk3S6Oh32t2Jc=",
  // },
  // {
  //   title: "SSH",
  //   description:
  //     ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque et eaque facilis modi provident similique commodi ab vitae? Eos natus ab, omnis, magnam ad ipsum accusantium veritatis pariatur ipsam soluta ut cum laudantium illum explicabo exercitationem voluptatibus quod quaerat earum mollitia! Reiciendis ipsam ut ducimus, blanditiis architecto soluta aliquam?"],
  //   image:
  //     "https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/294542828_433841798798017_5084688176009007484_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wVulM5xDyqUAX8Jnu5J&_nc_ht=scontent-lcy1-1.xx&oh=00_AfBSKBOQZ8ftA8ax7XHcYI60UdSMEPIfdCDrkWtJ6hFFfw&oe=648CA72D",
  // },
];
