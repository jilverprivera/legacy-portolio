import ecommerceImage from "../images/portfolio/tech-ecommerce.webp";

export const PortfolioData = [
    {
        id: 1,
        featured: true,
        slug: "green-PID",
        title: "GreenPID",
        description:
            "IoT mobile platform to monitor the variables involved in the control of a greenhouse-based system.",
        year: 2021,
        category: "Mobile",
        technologies: [
            { name: "React Native CLI" },
            { name: "Firebase" },
            { name: "Arduino" },
        ],
        github_url: "https://github.com/jilverprivera/RN-sensorApp",
        url: "",
        image: ecommerceImage,
    },
    {
        id: 2,
        featured: true,
        slug: "tech-ecommerce",
        title: "Tech Ecommerce",
        description:
            "A minimal website for ecommerce with add to cart, login/register section, jwt verification, pay button with Paypal.",
        year: 2021,
        category: "Web",
        technologies: [
            { name: "MongoDB" },
            { name: "Express.JS" },
            { name: "React.JS" },
            { name: "Node.JS" },
        ],
        github_url: "https://github.com/jilverprivera/react-frontend-ecommerce",
        url: "https://tech-ecommerce.vercel.app/",
        image: ecommerceImage,
    },

    {
        id: 3,
        featured: false,
        slug: "coin-crypto",
        title: "Coincrypto",
        description:
            "The v2 of my first cryptocurrency website, in this version you can change the type of currency in which you want to hunt, you can also see a graph with the latest values.",
        year: 2021,
        category: "Web",
        technologies: [{ name: "React" }, { name: "cryptocompare API" }],
        github_url: "https://github.com/jilverprivera/Cryptocurrency-trader-v2",
        url: "https://coincrypto.netlify.app/",
        image: ecommerceImage,
    },

    {
        id: 4,
        featured: false,
        slug: "movie-app",
        title: "MovieApp",
        description:
            "You can view a list of Movies, including the most recent, the most voted, the most popular and upcoming releases.",
        category: "Mobile",
        year: 2021,
        technologies: [
            { name: "TypeScript" },
            { name: "React Native CLI" },
            { name: "TheMovieDB" },
        ],
        github_url: "https://github.com/jilverprivera/movies-app",
        url: "",
        image: ecommerceImage,
    },

    {
        id: 5,
        featured: false,
        slug: "pokedex-app",
        title: "PokedexApp",
        description:
            "You can view a list of Pokemon, see more details about them and search by name or ID.",
        category: "Mobile",
        year: 2021,
        technologies: [
            { name: "TypeScript" },
            { name: "React Native CLI" },
            { name: "PokeAPI" },
        ],
        github_url: "https://github.com/jilverprivera/pokedex",
        url: "",
        image: ecommerceImage,
    },

    {
        id: 6,
        featured: false,
        slug: "electro-tech",
        title: "Electro-TECH",
        description:
            "Desktop application for electronic engineering students of the 'Universidad de Investigación y Desarrollo' in which there are topics related to various academic courses.",
        category: "Web",
        year: 2020,
        technologies: [
            { name: "JavaScript" },
            { name: "Electron.js" },
            { name: "SCSS" },
        ],
        github_url: "https://github.com/jilverprivera/Electron.JS-Electro-TECH",
        url: "",
        image: ecommerceImage,
    },
];
