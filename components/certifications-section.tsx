export default function CertificationsSection() {
  return (
    <div className="border-t border-gray-200 pt-8 mb-12">
      <div className="vintage-section-decoration"></div>
      <h2 className="text-4xl font-bold text-black uppercase mb-6 vintage-section-title">
        LICENSES & CERTIFICATIONS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-200 p-4 vintage-certificate">
          <h3 className="text-xl font-bold mb-2 vintage-certificate-title">GitHub Foundations</h3>
          <p className="text-sm mb-2">from GitHub</p>
          <p className="text-sm mb-4">
            DevOps, Continuous Integration and Continuous Delivery (CI/CD), GitHub, Version Control, Git
          </p>
          <p className="text-xs">Issued Apr 2025 - Expires Apr 2028</p>
        </div>

        <div className="border border-gray-200 p-4 vintage-certificate">
          <h3 className="text-xl font-bold mb-2 vintage-certificate-title">Introduction to Linux</h3>
          <p className="text-sm mb-2">The Linux Foundation</p>
          <p className="text-sm mb-4">
            Bash Shell, Command Line, File Management, Linux, Scripting, System Configuration
          </p>
          <p className="text-xs">Issued Apr 2025</p>
        </div>

        <div className="border border-gray-200 p-4 vintage-certificate">
          <h3 className="text-xl font-bold mb-2 vintage-certificate-title">Oracle Cloud Infrastructure 2025</h3>
          <p className="text-sm mb-2">Certified AI Foundations Associate</p>
          <p className="text-sm mb-4">
            Oracle Cloud Infrastructure (OCI), Oracle Generative AI, Artificial Intelligence (AI)
          </p>
          <p className="text-xs">Issued Apr 2025</p>
        </div>

        <div className="border border-gray-200 p-4 vintage-certificate">
          <h3 className="text-xl font-bold mb-2 vintage-certificate-title">
            AWS Educate Getting Started with Cloud Ops
          </h3>
          <p className="text-sm mb-2">By AWS</p>
          <p className="text-sm mb-4">Amazon Web Services (AWS), AWS Cloud, AWS Cloud Ops, Cloud Operations</p>
          <p className="text-xs">Issued March 2025</p>
        </div>

        <div className="border border-gray-200 p-4 vintage-certificate">
          <h3 className="text-xl font-bold mb-2 vintage-certificate-title">Networking Basics</h3>
          <p className="text-sm mb-2">By Cisco</p>
          <p className="text-sm mb-4">Network basic, Network Diagnostics, Network Types</p>
          <p className="text-xs">Issued May 2025</p>
        </div>

        <div className="border border-gray-200 p-4 vintage-certificate">
          <h3 className="text-xl font-bold mb-2 vintage-certificate-title">IBM Cloud Essentials V3</h3>
          <p className="text-sm mb-2">By IBM Cloud</p>
          <p className="text-sm mb-4">Cloud Application, Cloud Computing</p>
          <p className="text-xs">Issued March 2025</p>
        </div>
      </div>
    </div>
  )
}
