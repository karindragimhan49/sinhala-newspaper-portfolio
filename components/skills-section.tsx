export default function SkillsSection() {
  return (
    <div className="border-t-2 border-[#2a2622] pt-8 mb-12">
      <div className="vintage-section-decoration"></div>
      <h2 className="text-4xl font-bold text-[#8B0000] uppercase mb-6 vintage-section-title">TECHNICAL EXPERTISE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="vintage-skills-column">
          <h3 className="text-2xl font-bold mb-4 uppercase border-b border-[#2a2622] pb-2 vintage-subheadline">
            Web & Full Stack Development
          </h3>
          <ul className="text-sm space-y-2 vintage-list">
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Programming Languages:</span> Java, JavaScript
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Frontend Frameworks:</span> React, Next.js
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Backend Frameworks:</span> Express.js
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Package Managers:</span> Node.js
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Databases:</span> MongoDB, MySQL
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Styling Frameworks:</span> Tailwind CSS, Bootstrap
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Mobile Applications:</span> Kotlin
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 uppercase border-b border-[#2a2622] pb-2 vintage-subheadline">
            DevOps & Cloud
          </h3>
          <ul className="text-sm space-y-2 vintage-list">
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Linux Fundamentals</span>
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Git & GitHub:</span> Version Control
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">CI/CD:</span> Jenkins, AWS CodePipeline, CodeBuild, CodeDeploy
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Python:</span> Automation, Boto3
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Shell scripting:</span> Bash
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              <span className="font-bold">Containerization:</span> Docker, Kubernetes (Basic Deployment, Orchestration)
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8 uppercase border-b border-[#2a2622] pb-2 vintage-subheadline">
            Personal Qualities
          </h3>
          <ul className="text-sm space-y-2 vintage-list">
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              Problem-Solving & Debugging
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              Communication & Team Collaboration
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              Fast Learner & Self-Motivated
            </li>
            <li className="pb-2 border-b border-[#2a2622] border-dashed vintage-list-item">
              Languages: English, Sinhala
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
