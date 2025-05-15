import Image from "next/image"

export default function ProjectsSection() {
  return (
    <div>
      <div className="vintage-section-decoration"></div>
      <h2 className="text-3xl font-bold mb-6 uppercase border-b border-[#2a2622] pb-2 vintage-section-title">
        NOTABLE WORKS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="vintage-article">
          <h3 className="text-xs uppercase tracking-widest text-[#5c534d] mb-2">Modern Machinery</h3>
          <h2 className="text-2xl font-bold mb-4 vintage-headline">DineSwift</h2>
          <div className="relative h-48 mb-4 overflow-hidden border border-[#2a2622] vintage-photo-container">
            <div className="vintage-photo-frame"></div>
            <Image src="/vintage-typewriter.png" alt="DineSwift Project" fill className="object-cover vintage-photo" />
          </div>
          <p className="text-sm leading-relaxed vintage-text">
            Microservices-based educational platform using Node.js/Express.js (backend) and React with Tailwind CSS
            (frontend); deployed with Docker and Kubernetes.
          </p>
          <p className="text-xs mt-4 italic vintage-page-number">Page 01</p>
        </div>

        <div className="vintage-article">
          <h3 className="text-xs uppercase tracking-widest text-[#5c534d] mb-2">Ceylon's Finest</h3>
          <h2 className="text-2xl font-bold mb-4 vintage-headline">Leaflink</h2>
          <div className="relative h-48 mb-4 overflow-hidden border border-[#2a2622] vintage-photo-container">
            <div className="vintage-photo-frame"></div>
            <Image src="/vintage-code.png" alt="Leaflink Project" fill className="object-cover vintage-photo" />
          </div>
          <p className="text-sm leading-relaxed vintage-text">
            MERN stack Tea management system with features like Sales, Quality checking, user management and responsive
            UI.
          </p>
          <p className="text-xs mt-4 italic vintage-page-number">Page 02</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="vintage-article">
          <h3 className="text-xs uppercase tracking-widest text-[#5c534d] mb-2">Financial Instruments</h3>
          <h2 className="text-2xl font-bold mb-4 vintage-headline">Currency Converter & Finance Tracker</h2>
          <div className="relative h-48 mb-4 overflow-hidden border border-[#2a2622] vintage-photo-container">
            <div className="vintage-photo-frame"></div>
            <Image src="/vintage-typewriter.png" alt="Finance Tracker" fill className="object-cover vintage-photo" />
          </div>
          <p className="text-sm leading-relaxed vintage-text">
            React, Tailwind CSS, Ant Design frontend with Node.js/Express backend and MongoDB Atlas.
          </p>
          <p className="text-xs mt-4 italic vintage-page-number">Page 03</p>
        </div>

        <div className="vintage-article">
          <h3 className="text-xs uppercase tracking-widest text-[#5c534d] mb-2">Automation Marvels</h3>
          <h2 className="text-2xl font-bold mb-4 vintage-headline">Automated Linux Server Setup</h2>
          <div className="relative h-48 mb-4 overflow-hidden border border-[#2a2622] vintage-photo-container">
            <div className="vintage-photo-frame"></div>
            <Image src="/vintage-server.png" alt="Server Automation" fill className="object-cover vintage-photo" />
          </div>
          <p className="text-sm leading-relaxed vintage-text">
            A beginner-friendly DevOps project that automates the setup of a Node.js web application on a Linux server
            using Bash scripts, systemd, Nginx, and GitHub Actions for CI/CD deployment.
          </p>
          <p className="text-xs mt-4 italic vintage-page-number">Page 04</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="vintage-article">
          <h3 className="text-xs uppercase tracking-widest text-[#5c534d] mb-2">Continuous Integration</h3>
          <h2 className="text-2xl font-bold mb-4 vintage-headline">Basic CI/CD Pipeline with GitHub Actions</h2>
          <div className="relative h-48 mb-4 overflow-hidden border border-[#2a2622] vintage-photo-container">
            <div className="vintage-photo-frame"></div>
            <Image src="/vintage-code.png" alt="CI/CD Pipeline" fill className="object-cover vintage-photo" />
          </div>
          <p className="text-sm leading-relaxed vintage-text">
            Use GitHub Actions to automate the testing and deployment of a simple codebase.
          </p>
          <p className="text-xs mt-4 italic vintage-page-number">Page 05</p>
        </div>

        <div className="vintage-article">
          <h3 className="text-xs uppercase tracking-widest text-[#5c534d] mb-2">Containerization</h3>
          <h2 className="text-2xl font-bold mb-4 vintage-headline">Deploy a Static Website with Docker</h2>
          <div className="relative h-48 mb-4 overflow-hidden border border-[#2a2622] vintage-photo-container">
            <div className="vintage-photo-frame"></div>
            <Image src="/vintage-docker.png" alt="Docker Deployment" fill className="object-cover vintage-photo" />
          </div>
          <p className="text-sm leading-relaxed vintage-text">
            Create a simple HTML/CSS website, package it into a Docker container, and run it on a local server.
          </p>
          <p className="text-xs mt-4 italic vintage-page-number">Page 06</p>
        </div>
      </div>
    </div>
  )
}
