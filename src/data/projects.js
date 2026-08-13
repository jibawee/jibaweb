export const projectsList = [
    {
        id: 1,
        title: "VRyu",
        description: "An immersive, fun VR experience teaching newcomers traditional Japanese swordsmanship.",
        fullDescription: "Detailed description for project three goes here.",
        link: "/projects/1",
        images: ["optional image url"],
        tools: ["Unreal Engine", "Perforce", "Blender"],
        links: [
            { label: "Website", url: "https://osu-vryu.github.io/" },
        ]
    },
    {
        id: 2,
        title: "I should be studying",
        description: "A personal Blender project exploring character modeling, texturing, rigging, scene composition, lighting, and motion animation principles.",
        fullDescription: "A short PSX style animation created to develop hands-on experience with character modeling, texturing, and rigging in Blender, with additional focus on scene composition, lighting, and atmosphere. The project also served as an introduction to core principles of motion animation.",
        link: "/projects/2",
        images: ["/meat.jpg"],
        tools: ["Blender"],
        iframe: "https://www.youtube.com/embed/8pMB4m1nGk0?si=hha2f3_VtCY6JT7u"
    },
    {
        id: 3,
        title: "Asteroids Ahoy!",
        description: "A React + Vite web app that fetches NASA's API for NeoWs (Near Earth Object Web Service) and displays today’s closest asteroids, a 7-day forecast, asteroid detail pages, and a personal watchlist.",
        fullDescription: "Another detailed description for project two goes here.",
        link: "/projects/3",
        images: ["optional image url"],
        tools: ["React", "Vite", "Tailwind", "Vercel"],
        links: [
            { label: "Live Site", url: "https://final-project-cs494-g21-tio-in-spac.vercel.app/" },
            { label: "GitHub", url: "https://github.com/osu-cs494-w26/final-project-cs494-g21-tio-in-space" }
        ]
    },
    {
        id: 4,
        title: "Oregon Fire Casualty vs. Housing Condition Dashboard (2020-2024)",
        description: "Interactive visualizations using insights from Oregon fire casualty and housing condition data.",
        fullDescription: "Detailed description for project three goes here.",
        link: "/projects/4",
        images: ["optional image url"],
        tools: ["Rstudio", "Gephi"],
        links: [
            { label: "Live Page", url: "https://jibawee.github.io/OregonFireCasualtyVizDash/" },
            { label: "GitHub", url: "https://github.com/jibawee/OregonFireCasualtyVizDash" }
        ]
    },
    {
        id: 5,
        title: "Movie Watchlist App",
        description: "An Android app that allows users to explore movies, search for favorites, view trailers and streaming services, and keep a rated watchlist history.",
        fullDescription: "Detailed description for project three goes here.",
        link: "/projects/5",
        images: ["optional image url"],
        tools: ["Kotlin", "Android Studio"],
        links: [
            { label: "GitHub", url: "https://github.com/osu-cs492-w26/final-project-cs492-team23" }
        ]
    },
    {
        id: 6,
        title: "OpenGL & GLSL",
        description: "Projects from CS 450 - Computer Graphics, Shaders, and Animation using OpenGL and GLSL in Visual Studio, C/C++",
        fullDescription: "Projects from CS 450 - Computer Graphics, Shaders, and Animation",
        link: "/projects/6",
        images: ["optional image url"],
        tools: ["C++", "OpenGL", "GLSL"],
        links: [
            { label: "GitHub", url: "" }
        ]
    }
];


export const getProjectById = (id) => {
  return projectsList.find(p => p.id === parseInt(id));
};
