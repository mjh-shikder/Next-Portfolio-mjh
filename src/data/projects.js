export const demoProjects = [
    {
        id: "1",
        title: "E-Commerce Platform Redesign",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        shortDesc: "A complete overhaul of an e-commerce platform focusing on user experience and conversion rates.",
        description: "This project involved completely redesigning a legacy e-commerce site to meet modern web standards. By introducing a Next.js App Router architecture and utilizing Next.js API Routes for backend integration, we reduced load times by 40%. The UI heavily depends on Tailwind CSS for rapid styling and Framer Motion for delightful micro-interactions that guide users to purchase.",
        image: "/project-1.jpg",
        liveLink: "https://example.com/ecommerce",
        githubLink: "https://github.com/mjh-dev/ecommerce-redesign",
        challenges: "Handling the complex state synchronization between the shopping cart and local storage while ensuring accurate stock validation on the server side.",
        futurePlans: "Integrating Stripe for native payments and adding an AI-based product recommendation algorithm."
    },
    {
        id: "2",
        title: "3D Product Configurator",
        tech: ["React", "Three.js", "GSAP"],
        shortDesc: "Interactive 3D web experience allowing users to customize product colors and materials in real-time.",
        description: "Leveraging my extensive Blender background, I designed low-poly 3D models and loaded them into a React application using Three.js and React Three Fiber. Users can rotate the object, zoom in, and swap materials on the fly.",
        image: "/project-2.jpg",
        liveLink: "https://example.com/3dconfig",
        githubLink: "https://github.com/mjh-dev/3d-configurator",
        challenges: "Optimizing the 3D models to ensure fast loading sizes without sacrificing visual quality, and ensuring smooth performance on mobile devices.",
        futurePlans: "Adding AR support so users can visualize the configured products within their actual physical environment."
    },
    {
        id: "3",
        title: "Cyber Security Dashboard",
        tech: ["React", "D3.js", "Tailwind CSS"],
        shortDesc: "Data visualization dashboard tracking real-time network vulnerabilities and penetration testing metrics.",
        description: "Drawing from my Ethical Hacking and Penetration Testing courses, I built a frontend application that ingests simulated vulnerability data and visualizes threat levels across different nodes.",
        image: "/project-3.jpg",
        liveLink: "https://example.com/dash",
        githubLink: "https://github.com/mjh-dev/cyber-dashboard",
        challenges: "Managing real-time WebSocket data floods without locking up the React thread, requiring extensive memoization and batch state updates.",
        futurePlans: "Connecting the dashboard to real backend SIEM APIs to process actual packet monitoring logs."
    },
    {
        id: "4",
        title: "Portfolio Template V1",
        tech: ["HTML", "CSS", "JavaScript"],
        shortDesc: "A premium, award-winning portfolio template designed for creative professionals.",
        description: "A standalone template emphasizing layout aesthetics and extreme customizability strictly using Vanilla HTML, CSS, and JS without heavy frameworks.",
        image: "/project-4.jpg",
        liveLink: "https://example.com/template",
        githubLink: "https://github.com/mjh-dev/portfolio-v1",
        challenges: "Ensuring cross-browser compatibility for advanced CSS grid and flexbox patterns, down to older Safari versions.",
        futurePlans: "Porting the entire template over to a premium WordPress theme."
    },
    {
        id: "5",
        title: "Animated Landing Page",
        tech: ["Next.js", "GSAP", "Lenis"],
        shortDesc: "High-performance landing page featuring complex scroll-triggered animations and glassmorphism.",
        description: "A showcase of GSAP's ScrollTrigger capabilities married with Next.js fast delivery. The page tracks scroll position to pin elements and run complex timeline sequences.",
        image: "/project-5.jpg",
        liveLink: "https://example.com/landing",
        githubLink: "https://github.com/mjh-dev/animated-landing",
        challenges: "Preventing scroll-jacking layout breaks and ensuring the Lenis smooth scroller synced perfectly with GSAP.",
        futurePlans: "Developing a visual builder interface to dynamically generate the GSAP timelines."
    },
    {
        id: "6",
        title: "Social Network App",
        tech: ["React Native", "Firebase"],
        shortDesc: "Mobile application connecting 3D artists and animators to share their daily renders and works in progress.",
        description: "A cross-platform app utilizing React Native and Firebase. It allows 3D artists to authenticate, post images of their renders, like, comment, and browse a global feed.",
        image: "/project-6.jpg",
        liveLink: "https://example.com/socialapp",
        githubLink: "https://github.com/mjh-dev/social-network",
        challenges: "Handling image caching effectively within React Native's flat list and managing real-time listener unsubscribes for Firebase to prevent memory leaks.",
        futurePlans: "Adding short-form video support similar to TikTok for artists to share quick work-in-progress timelapses."
    }
];
