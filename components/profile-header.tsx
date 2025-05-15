import Image from "next/image"

export default function ProfileHeader() {
  return (
    <div className="mb-12">
      <div className="vintage-section-decoration"></div>
      <h3 className="text-xs uppercase tracking-widest text-[#5c534d] mb-2">Featured Profile</h3>
      <h2 className="text-4xl font-bold mb-4 vintage-headline">KARINDRA GIMHAN</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="relative h-64 overflow-hidden border border-[#2a2622] vintage-photo-container">
          <div className="vintage-photo-frame"></div>
          <Image src="/vintage-portrait.png" alt="Karindra Gimhan" fill className="object-cover vintage-photo" />
          <div className="vintage-photo-caption">Site Reliability Engineer, 1935</div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 vintage-subheadline">Site Reliability Engineer Intern</h3>
          <p className="text-sm leading-relaxed mb-4 vintage-text">
            Specializing in DevOps, Cloud technologies, and Full Stack Development. Building scalable and reliable
            systems with a focus on automation and infrastructure as code.
          </p>
          <div className="space-y-2 vintage-contact-details">
            <p className="text-sm">
              <span className="font-bold">Telegraph:</span> Kurunduwatta, Ginnaliya, Urubokka, Matara
            </p>
            <p className="text-sm">
              <span className="font-bold">Telephone:</span> 0742547440
            </p>
            <p className="text-sm">
              <span className="font-bold">Post:</span> karindragimhan49@gmail.com
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/Karindragimhan49"
              className="text-sm underline vintage-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Correspondence
            </a>
            <a
              href="https://linkedin.com/in/Karindra-Gimhan"
              className="text-sm underline vintage-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Professional Society
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
