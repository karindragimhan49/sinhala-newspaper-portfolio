export default function ContactSection() {
  return (
    <div className="border-t-2 border-[#2a2622] pt-8 mb-12">
      <div className="vintage-section-decoration"></div>
      <h2 className="text-4xl font-bold text-[#8B0000] uppercase mb-6 vintage-section-title">CONTACT INFORMATION</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="vintage-contact-column">
          <h3 className="text-2xl font-bold mb-4 vintage-subheadline">CORRESPONDENCE</h3>
          <p className="text-sm mb-4 vintage-text">
            For inquiries, opportunities, or to discuss potential collaborations, please contact via:
          </p>
          <ul className="text-sm space-y-2 vintage-contact-list">
            <li className="vintage-contact-item">
              <span className="font-bold">Address:</span> Kurunduwatta, Ginnaliya, Urubokka, Matara
            </li>
            <li className="vintage-contact-item">
              <span className="font-bold">Telephone:</span> 0742547440
            </li>
            <li className="vintage-contact-item">
              <span className="font-bold">Telegraph:</span> karindragimhan49@gmail.com
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-lg font-bold mb-2 vintage-subheadline">Professional Networks</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Karindragimhan49"
                className="text-sm underline vintage-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Society
              </a>
              <a
                href="https://linkedin.com/in/Karindra-Gimhan"
                className="text-sm underline vintage-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Association
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 vintage-subheadline">AVAILABILITY</h3>
          <p className="text-sm mb-4 vintage-text">Currently accepting engagements for:</p>
          <ul className="text-sm space-y-2 vintage-availability-list">
            <li className="vintage-availability-item">Internship opportunities in DevOps & SRE</li>
            <li className="vintage-availability-item">Cloud engineering projects</li>
            <li className="vintage-availability-item">Full-stack development collaborations</li>
            <li className="vintage-availability-item">Open source contributions</li>
          </ul>

          <div className="mt-6 p-4 border border-[#2a2622] bg-[#f8f1e4] vintage-telegram">
            <h4 className="text-lg font-bold mb-2 vintage-subheadline">TELEGRAM</h4>
            <p className="text-sm vintage-text">Send a message and expect a reply within 24 hours.</p>
            <div className="vintage-telegram-stamp"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
