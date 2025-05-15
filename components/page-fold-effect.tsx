export default function PageFoldEffect() {
  return (
    <>
      {/* Top-right page fold */}
      <div className="fixed top-0 right-0 w-20 h-20 pointer-events-none z-30">
        <div className="absolute top-0 right-0 w-full h-full bg-[#f5e8d4] shadow-inner transform origin-bottom-left rotate-[-5deg] vintage-page-fold"></div>
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#e8d7bc] shadow-md transform origin-bottom-left rotate-[-8deg]"></div>
      </div>

      {/* Bottom-left subtle fold */}
      <div className="fixed bottom-0 left-0 w-40 h-40 pointer-events-none z-30 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#f5e8d4] shadow-inner transform origin-top-right rotate-[3deg]"></div>
      </div>

      {/* Center fold line */}
      <div className="fixed top-0 bottom-0 left-1/2 w-[1px] bg-[#2a2622] opacity-10 pointer-events-none z-20"></div>
    </>
  )
}
