import Hero from "@/components/Hero";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";

import Skills from "@/components/Skills";
import EducationSection from "@/components/EducationSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
    <>
      <SocialLinks />
      <Hero />
      <About />
      <Skills />
      <EducationSection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
