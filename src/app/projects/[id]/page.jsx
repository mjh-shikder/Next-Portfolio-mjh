import { demoProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

// Pre-render common paths
export function generateStaticParams() {
    return demoProjects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetails({ params }) {
    const { id } = await params;
    const project = demoProjects.find((p) => p.id === id);

    if (!project) return notFound();

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Ambient background */}
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(34,211,238,0.09),transparent_38%),radial-gradient(circle_at_82%_78%,rgba(167,139,250,0.11),transparent_40%)]" />
            <div className="pointer-events-none fixed -left-24 top-32 -z-10 h-80 w-80 rounded-full bg-cyan-400/8 blur-[140px]" />
            <div className="pointer-events-none fixed -right-24 bottom-20 -z-10 h-80 w-80 rounded-full bg-violet-400/8 blur-[140px]" />

            <div className="container mx-auto px-6 py-24 max-w-4xl">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                {t}
                            </span>
                        ))}
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        {project.shortDesc}
                    </p>

                    <div className="flex gap-4">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
                        >
                            <ExternalLink size={18} className="mr-2" /> Live Demo
                        </a>
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 glass hover:bg-white/10 text-white rounded-full font-medium transition-colors border border-gray-600"
                        >
                            <Github size={18} className="mr-2" /> Source Code
                        </a>
                    </div>
                </div>

                {/* Feature Image Placeholder */}
                <div className="w-full h-64 md:h-96 bg-gray-800 rounded-2xl mb-16 relative overflow-hidden flex items-center justify-center border border-gray-700">
                    <Image src={project.image} alt={project.title} fill className="object-cover object-top transition-transform duration-500 ease-out hover:object-bottom" />
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        {/* Overview */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Overview</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </div>
                    {/* Feature */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Key Features</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.features}
                                {/* <ul className="list-disc list-inside" >
                                    <li>Role based authentication and authorization</li>
                                    <li>Admin Dashboard to manage blood Users</li>
                                    <li>Admin can block and unblock users</li>
                                    <li>Admin can make users as Volunteer or Admin</li>
                                    <li>Donor Dashboard to manage blood requests</li>
                                    <li>User can register and login</li>
                                    <li>User can search for blood donors</li>
                                    <li>Filter search donors by blood group and Location</li>
                                    <li>User can request for blood</li>
                                    <li>User can donate blood </li>
                                    <li>User can Edit their profile</li>
                                    <li>Stripe Payment Method</li>
                                    
                                </ul> */}
                            </p>
                        </div>
                        {/* Challenges */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Challenges Faced</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.challenges}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Future Plans</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.futurePlans}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 glass-panel p-6 rounded-2xl h-fit border border-gray-800">
                        <div>
                            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Role</h3>
                            <p className="text-white font-medium">Lead Developer</p>
                        </div>
                        <div>
                            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Timeline</h3>
                            <p className="text-white font-medium">2 Weeks</p>
                        </div>
                        <div>
                            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Key Focus</h3>
                            <ul className="text-white font-medium space-y-1 list-disc list-inside">
                                <li>Performance</li>
                                <li>Accessibility</li>
                                <li>Responsive UI</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
