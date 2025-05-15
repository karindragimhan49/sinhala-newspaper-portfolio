"use client"

import { useEffect, useState } from "react"
import TechNews from "@/components/tech-news"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import ProfileHeader from "@/components/profile-header"
import VintageOverlay from "@/components/vintage-overlay"
import PageFoldEffect from "@/components/page-fold-effect"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Add vintage paper sound on page load
    const audio = new Audio("/paper-sound.mp3")
    audio.volume = 0.2
    audio.play().catch((e) => console.log("Audio play prevented:", e))

    // Add class to body for vintage animations
    document.body.classList.add("vintage-loaded")

    return () => {
      document.body.classList.remove("vintage-loaded")
    }
  }, [])

  const currentDate = new Date(1935, 5, 15) // June 15, 1935
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main
      className={`min-h-screen bg-[#f5e8d4] text-[#2a2622] font-serif vintage-paper ${isLoaded ? "fade-in" : "opacity-0"}`}
    >
      <VintageOverlay />
      <PageFoldEffect />

      <div className="container mx-auto px-4 py-8 relative">
        {/* Vintage newspaper decorative elements */}
        <div className="absolute top-0 left-0 w-full h-8 border-b-2 border-[#2a2622] opacity-30"></div>
        <div className="absolute top-8 left-0 w-full h-1 border-b border-[#2a2622] opacity-20"></div>

        {/* Header */}
        <header className="mb-12 pt-12 relative">
          <div
            className="flex justify-between items-center text-xs uppercase tracking-widest mb-2 vintage-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="vintage-stamp">Est. 1935</div>
            <div className="vintage-date">{formattedDate}</div>
            <div className="vintage-price">PRICE TWO CENTS</div>
          </div>

          <div className="border-b-2 border-[#2a2622] pb-6 relative">
            <div className="vintage-fade-in" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-7xl md:text-8xl font-bold text-[#8B0000] uppercase tracking-tight leading-none mb-2 text-center vintage-title">
                ලංකාදීප
              </h1>
              <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight leading-none text-center vintage-subtitle">
                The Ceylon Daily
              </h2>
            </div>

            <div className="flex flex-col md:flex-row mt-6 vintage-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="w-full md:w-2/3 md:pr-8 md:border-r md:border-[#2a2622]">
                <p className="text-sm leading-relaxed vintage-typewriter">
                  BSc (Hons) Software Engineering undergraduate with a strong interest in DevOps, Site Reliability
                  Engineering (SRE), and Cloud technologies. Passionate about building scalable, reliable systems and
                  exploring automation, CI/CD, and infrastructure as code.
                </p>
              </div>
              <div className="w-full md:w-1/3 md:pl-8 mt-4 md:mt-0">
                <p className="text-sm font-bold italic">"The Modern Engineer's Chronicle"</p>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 w-full h-1 border-b border-[#2a2622] opacity-20"></div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Left Column - Profile and Projects */}
          <div
            className="md:col-span-8 md:border-r md:border-[#2a2622] md:pr-8 vintage-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <ProfileHeader />
            <ProjectsSection />
          </div>

          {/* Right Column - Tech News */}
          <div className="md:col-span-4 vintage-fade-in" style={{ animationDelay: "1s" }}>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#8B0000] uppercase mb-6 leading-tight vintage-section-title">
                TELEGRAPH NEWS
              </h2>
              <TechNews />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="vintage-fade-in" style={{ animationDelay: "1.2s" }}>
          <SkillsSection />
        </div>

        {/* Certifications Section */}
        <div className="vintage-fade-in" style={{ animationDelay: "1.4s" }}>
          <CertificationsSection />
        </div>

        {/* Education Section */}
        <div className="vintage-fade-in" style={{ animationDelay: "1.6s" }}>
          <EducationSection />
        </div>

        {/* Contact Section */}
        <div className="vintage-fade-in" style={{ animationDelay: "1.8s" }}>
          <ContactSection />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="border-t-2 border-[#2a2622] py-4 px-6 text-center text-xs vintage-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <p>Published by Karindra Gimhan, Ceylon</p>
        <p className="mt-1">© 1935 All Rights Reserved</p>
      </footer>
    </main>
  )
}
