export type Experience = {
    title: string;
    company: {
        name: string;
        url: string;
    };
    from: string;
    to: string;
    type: string;
    description: string;
    image: string;
    tags?: string[];
}

export const experiences: Experience[] = [
    {
        title: ".NET | Platform Developer",
        company: {
            name: "UrbanThings",
            url: "https://urbanthings.co/"
        },
        from: "Oct 2024",
        to: "Present",
        type: "Full-time · Remote",
        description: "Working as a .NET developer to build a microservices platform hosted on AWS. Utilising RabbitMQ with MassTransit for messaging, following the CQRS and Event Sourcing patterns, and making heavy consideration into each service's performance. Additionally work includes writing Jenkins scripts for periodic jobs, and python + SQL scripts as developer aids.",
        image: "/images/urbanhub.png",
        tags: [".NET", "Jenkins", "AWS", "C#"]
    },
    {
        title: "Full Stack Developer",
        company: {
            name: "Spike Global",
            url: "https://www.spikeglobal.com/"
        },
        from: "Jun 2023",
        to: "Oct 2024",
        type: "Full-time · Hybrid",
        description: "Working as a Full Stack developer. In the Backend making use of ASP.NET Core, EF Core, GraphQL, and MSTest to develop large-scale, robust APIs. Additionally, along with the C# framework, taking a more functional approach utilising Railway Oriented Programming. In the Frontend making use of React, GraphQL, and SASS, with React Native for mobile applications.",
        image: "/images/spike.webp",
        tags: []
    },
    {
        title: "Frontend Developer",
        company: {
            name: "3 Sided Cube",
            url: "https://3sidedcube.com/"
        },
        from: "Oct 2019",
        to: "Jun 2023",
        type: "Part-time · Hybrid",
        description: "Working as a frontend developer utilising React, React Native, and aiding with the node backend. Worked with Redux, GraphQL, REST APIs, SASS, and Tailwind.",
        image: "/images/3sidedcube.png",
        tags: []
    },
    {
        title: "Unity Developer",
        company: {
            name: "Amuzo",
            url: "https://www.amuzo.com/"
        },
        from: "May 2018",
        to: "May 2018",
        type: "Work Experience",
        description: "Worked at Amuzo for a 2 week work experience placement developing prototypes with Unity and completing it with a personal project.",
        image: "/images/amuzo.png",
        tags: []
    }
]