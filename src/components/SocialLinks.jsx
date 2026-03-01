import { Github, Linkedin, Twitter, Facebook } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-gray-300" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-500" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-cyan-400" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
    { 
      name: "Fiverr", 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px]">
          <path d="M22.25 0H1.75C.78 0 0 .78 0 1.75v20.5C0 23.22.78 24 1.75 24h20.5c.97 0 1.75-.78 1.75-1.75V1.75C24 .78 23.22 0 22.25 0zM19.14 16.59h-2.18v-5.26c0-1.63-1.09-2.03-1.84-2.03-.7 0-1.57.43-1.57 2.03v5.26h-2.18v-5.26c0-1.63-1.09-2.03-1.84-2.03-.73 0-1.57.43-1.57 2.03v5.26H5.78V7.54h2.18v1.36c.64-.93 1.83-1.63 3.19-1.63 2.15 0 3.32 1.43 3.32 3.65v5.67h2.18v-5.67c0-2.22 1.17-3.65 3.33-3.65 1.36 0 2.54.7 3.19 1.63V7.54h2.14v9.05z" fill="currentColor" />
        </svg>
      ), 
      href: "https://fiverr.com", 
      color: "hover:text-green-500" 
    },
  ];

  return (
    <div className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center space-y-6 z-40 after:content-[''] after:w-px after:h-24 after:bg-gray-600">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
            title={social.name}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
