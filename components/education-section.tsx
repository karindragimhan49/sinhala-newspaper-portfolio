export default function EducationSection() {
  return (
    <div className="border-t-2 border-[#2a2622] pt-8 mb-12">
      <div className="vintage-section-decoration"></div>
      <h2 className="text-4xl font-bold text-[#8B0000] uppercase mb-6 vintage-section-title">EDUCATION & AWARDS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="vintage-education-column">
          <h3 className="text-2xl font-bold mb-4 vintage-subheadline">EDUCATION</h3>

          <div className="mb-6 vintage-education-item">
            <h4 className="text-xl font-bold">Sri Lanka Institute of Information Technology</h4>
            <p className="text-sm italic">Jan 2023 - Present</p>
            <p className="text-sm mt-2">BSc. Special (Hons) in Information Technology</p>
            <p className="text-sm">Specialization in Software Engineering (CGPA: 3.1)</p>
          </div>

          <div className="mb-6 vintage-education-item">
            <h4 className="text-xl font-bold">G.C.E. Advanced Level – Technology Stream</h4>
            <p className="text-sm italic">Aug 2021</p>
            <p className="text-sm">Shariputre College, Matara</p>
          </div>

          <div className="mb-6 vintage-education-item">
            <h4 className="text-xl font-bold">G.C.E. Ordinary Level</h4>
            <p className="text-sm italic">2013 - 2018</p>
            <p className="text-sm">Siridhamma College, Galle</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 vintage-subheadline">AWARDS & ACTIVITIES</h3>

          <div className="mb-6 vintage-award-item">
            <div className="vintage-award-ribbon"></div>
            <h4 className="text-xl font-bold">AI Skills Fest Challenge</h4>
            <p className="text-sm">Migration essentials for Azure and AI workloads Completed</p>
            <p className="text-sm italic">April 2025</p>
          </div>

          <div className="mb-6 vintage-award-item">
            <div className="vintage-award-ribbon"></div>
            <h4 className="text-xl font-bold">AWS Emerging Talent Community membership</h4>
            <p className="text-sm italic">April 2025</p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold vintage-subheadline">REFERENCES</h4>

            <div className="mt-4 vintage-reference">
              <p className="text-sm font-bold">Pivithuru Lakshan | Technical Lead</p>
              <p className="text-sm">PageroLanka Pvt Ltd</p>
              <p className="text-sm">Phone: 0719331365</p>
            </div>

            <div className="mt-4 vintage-reference">
              <p className="text-sm font-bold">Isuru Madushanka | Software Engineer</p>
              <p className="text-sm">Tecsota LLC USA</p>
              <p className="text-sm">Phone: 0771886641</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
