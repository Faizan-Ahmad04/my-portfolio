import React, { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Navigation from "./components/navigation";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import ExperienceSection from "./components/experience-section";
import ProjectsSection from "./components/projects-section";
import ServicesSection from "./components/services-section";
import TestimonialsSection from "./components/testimonials-section";
import BlogSection from "./components/blog-section";
import ContactSection from "./components/contact-section";
import Scene3D from "./components/scene-3d";
import LoadingScreen from "./components/loading-screen";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Suspense fallback={<LoadingScreen />}>
          <Scene3D />
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ServicesSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App; 