import portfolio from "../assets/portfolio.png";
import quote from "../assets/quote.png";
import skills from "../assets/skills.png";

const projects = [
    {
        id: 1, // Added a unique ID for each project
        title: "Personal Portfolio",
        image: portfolio,
        description:
            "Responsive personal portfolio website showcasing my profile, education, skills and projects.",
        tech: "HTML • CSS • JavaScript",
        github: "https://github.com/aashutosh2000/Portfolio-project",
        live: "https://aashutosh2000.github.io/Portfolio-project/",
    },
    {
        id: 2, // Added a unique ID for each project
        title: "Quote Generator",
        image: quote,
        description:
            "DOM Manipulation project that generates a random quote on every button click.",
        tech: "HTML • CSS • JavaScript",
        github: "https://github.com/aashutosh2000/my-portfolio",
        live: "https://aashutosh2000.github.io/my-portfolio/",
    },
    {
        id: 3, // Added a unique ID for each project
        title: "My Skills App",
        image: skills,
        description:
            "MERN Stack application where users can add and manage their technical skills.",
        tech: "React • Node • Express • MongoDB",
        github: "https://github.com/aashutosh2000/my-skills-frontend",
        live: "https://my-skills-frontend.vercel.app/",
    },
];

export default projects;