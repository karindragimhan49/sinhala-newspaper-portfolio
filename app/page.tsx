import Image from "next/image"

export default function Home() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="min-h-screen bg-[#f8f3e3] text-[#1a1a1a] font-serif">
      {/* Header */}
      <header className="border-b-2 border-black py-2 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center text-xs uppercase tracking-wider mb-2">
            <div>Vol. XLII No. 127</div>
            <div>{formattedDate}</div>
            <div>Price: Rs. 0.50</div>
          </div>

          <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold sinhala-heading py-4 border-y-2 border-black text-[#8B0000]">
            ලංකාදීප
          </h1>

          <div className="text-center text-sm mt-2 italic">"The Premier Portfolio of Ceylon"</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Lead Story */}
        <div className="border-b-2 border-black pb-6 mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 uppercase tracking-tight text-[#2F4F4F]">
            FEATURED WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-80 md:h-96 overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Main Project"
                fill
                className="object-cover vintage-filter"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#654321]">WEB DEVELOPMENT PROJECT</h3>
              <p className="text-sm leading-relaxed mb-4">
                A modern web application built with cutting-edge technologies. This project showcases responsive design,
                interactive elements, and seamless user experience across all devices.
              </p>
              <p className="text-sm leading-relaxed">
                The client reported a 45% increase in user engagement after the implementation of this solution. The
                project was completed ahead of schedule and within budget constraints.
              </p>
              <div className="mt-4 text-xs italic">Continued on page 3, column 2</div>
            </div>
          </div>
        </div>

        {/* Secondary Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b-2 border-black pb-6 mb-6">
          {/* Project 1 */}
          <div className="border-r border-black pr-4">
            <div className="relative h-48 mb-4 overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project 1"
                fill
                className="object-cover vintage-filter"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-[#654321]">MOBILE APPLICATION</h3>
              <span className="bg-[#8B0000] text-white text-xs px-2 py-1">NEW</span>
            </div>
            <p className="text-sm leading-relaxed">
              A native mobile application developed for both iOS and Android platforms. Features include offline
              functionality, push notifications, and seamless synchronization.
            </p>
          </div>

          {/* Project 2 */}
          <div className="md:border-r md:border-black md:pr-4">
            <div className="relative h-48 mb-4 overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project 2"
                fill
                className="object-cover vintage-filter"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-[#654321]">E-COMMERCE SOLUTION</h3>
            </div>
            <p className="text-sm leading-relaxed">
              A complete e-commerce platform with inventory management, payment processing, and customer relationship
              management features. Built for scalability and performance.
            </p>
          </div>

          {/* Project 3 */}
          <div>
            <div className="relative h-48 mb-4 overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project 3"
                fill
                className="object-cover vintage-filter"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-[#654321]">BRANDING PROJECT</h3>
              <span className="bg-[#8B0000] text-white text-xs px-2 py-1">NEW</span>
            </div>
            <p className="text-sm leading-relaxed">
              Complete brand identity development including logo design, color palette, typography guidelines, and
              marketing materials for a new startup.
            </p>
          </div>
        </div>

        {/* Large Feature */}
        <div className="my-8">
          <div className="bg-[#2F4F4F] text-white py-12 px-8 text-center">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">THE DEVELOPER</h2>
            <p className="mt-4 italic">Crafting digital experiences since 2015</p>
          </div>
        </div>

        {/* About & Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-black pt-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase border-b border-black pb-2 text-[#654321]">
              ABOUT THE CREATOR
            </h3>
            <p className="text-sm leading-relaxed">
              I am a creative web developer and UX/UI designer specializing in crafting unique digital experiences. With
              over 8 years of experience in the industry, I have worked with clients ranging from small startups to
              established enterprises.
            </p>
            <p className="text-sm leading-relaxed mt-4">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only
              look great but also perform exceptionally well. I believe in the power of clean, accessible, and
              user-centered design.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase border-b border-black pb-2 text-[#654321]">
              CONTACT INFORMATION
            </h3>
            <p className="text-sm leading-relaxed">You can reach me through the following channels:</p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm">Telegram: No. 42, Temple Road, Colombo</li>
              <li className="text-sm">Telephone: 2-345-678</li>
              <li className="text-sm">Post: P.O. Box 1978, Colombo, Ceylon</li>
            </ul>
            <div className="mt-4 text-sm italic">Office hours: 9 a.m. to 5 p.m. (Closed on Poya days)</div>
          </div>
        </div>

        {/* Classified Ads Section */}
        <div className="mt-8 border-2 border-black p-4 bg-[#F5F5DC]">
          <h3 className="text-center text-xl font-bold mb-4 uppercase text-[#654321]">SKILLS & TECHNOLOGIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="border border-gray-800 p-2 text-center bg-white">HTML5 & CSS3</div>
            <div className="border border-gray-800 p-2 text-center bg-white">JavaScript/TypeScript</div>
            <div className="border border-gray-800 p-2 text-center bg-white">React & Next.js</div>
            <div className="border border-gray-800 p-2 text-center bg-white">Node.js</div>
            <div className="border border-gray-800 p-2 text-center bg-white">UI/UX Design</div>
            <div className="border border-gray-800 p-2 text-center bg-white">Responsive Design</div>
            <div className="border border-gray-800 p-2 text-center bg-white">API Development</div>
            <div className="border border-gray-800 p-2 text-center bg-white">Database Design</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black py-4 px-6 text-center text-xs bg-[#F5F5DC]">
        <p>Published by Portfolio Press, Colombo, Ceylon</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </main>
  )
}
