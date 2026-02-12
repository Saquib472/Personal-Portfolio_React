import {
  Github,
  Linkedin,
  Instagram,
  Code2,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const socialLinks = [
  { id: "github", href: "https://github.com/Saquib472", icon: Github },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/najmush-saquib-ali-83a609151",
    icon: Linkedin,
  },
  { id: "ig", href: "https://www.instagram.com/saquib441/", icon: Instagram },
];

export const skills = [
  "React",
  "Redux",
  "Jest",
  "React Testing Library",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind Css",
  "TypeScript",
  "Bootstrap",
  "Material UI",
  "Daisy UI",
  "Config Driven UI",
  "RBAC",
  "Rest APIs",
  "Vuejs",
];

export const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const projects = [
  {
    title: "Netflix GPT",
    decription:
      "A Netflix Clone project with dynamic and responsive web design, having features like- Sign Up/Sign In Authentication build with GOOGLE FIREBASE, State management using REDUX, by fetching real data from TMDB API for Movies, using YouTube iframe to show the background running Trailer. Optimized Performance using Memoization and Lazy Loading and caching. Movie Suggestion Page using Open AI Gpt API where by giving the API key of Open API you can get 5 movie suggestions by binding it with TMDB movie API getting results for the same. UI design with Tailwindcss. Language Toggle Feature.",
    image: '/public/netflixGpt.jpg',
    tags: ['React', 'Redux', 'TailwindCss', 'Google Firebase', 'Webpack', 'TMDB API', 'Open AI'],
    link: 'https://netflixgpt-2ea89.web.app/',
    github: 'https://github.com/Saquib472/NetflixGPT_Project'
  },
  {
    title: "Netflix GPT",
    decription:
      "TMDB API for Movies, using YouTube iframe to show the background running Trailer. Optimized Performance using Memoization and Lazy Loading and caching. Movie Suggestion Page using Open AI Gpt API where by giving the API key of Open API you can get 5 movie suggestions by binding it with TMDB movie API getting results for the same. UI design with Tailwindcss. Language Toggle Feature.",
    image: '/public/netflixGpt.jpg',
    tags: ['React', 'Redux', 'TailwindCss', 'Google Firebase', 'Webpack', 'TMDB API', 'Open AI'],
    link: 'https://netflixgpt-2ea89.web.app/',
    github: 'https://github.com/Saquib472/NetflixGPT_Project'
  },
  {
    title: "Netflix GPT",
    decription:
      "A Netflix Clone project with dynamic and responsive web design, having features like- Sign Up/Sign In Authentication build with GOOGLE FIREBASE, State management using REDUX, by fetching real data from TMDB API for Movies, using YouTube iframe to show the background running Trailer. Optimized Performance using Memoization and Lazy Loading and caching. Movie Suggestion Page using Open AI Gpt API where by giving the API key of Open API you can get 5 movie suggestions by binding it with TMDB movie API getting results for the same. UI design with Tailwindcss. Language Toggle Feature.",
    image: '/public/netflixGpt.jpg',
    tags: ['React', 'Redux', 'TailwindCss', 'Google Firebase', 'Webpack', 'TMDB API', 'Open AI'],
    link: 'https://netflixgpt-2ea89.web.app/',
    github: 'https://github.com/Saquib472/NetflixGPT_Project'
  },
  {
    title: "Netflix GPT",
    decription:
      "A Netflix Clone project with dynamic and responsive web design, having features like- Sign Up/Sign In Authentication build with GOOGLE FIREBASE, State management using REDUX, by fetching real data from TMDB API for Movies, using YouTube iframe to show the background running Trailer. Optimized Performance using Memoization and Lazy Loading and caching. Movie Suggestion Page using Open AI Gpt API where by giving the API key of Open API you can get 5 movie suggestions by binding it with TMDB movie API getting results for the same. UI design with Tailwindcss. Language Toggle Feature.",
    image: '/public/netflixGpt.jpg',
    tags: ['React', 'Redux', 'TailwindCss', 'Google Firebase', 'Webpack', 'TMDB API', 'Open AI'],
    link: 'https://netflixgpt-2ea89.web.app/',
    github: 'https://github.com/Saquib472/NetflixGPT_Project'
  },
];
