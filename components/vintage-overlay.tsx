export default function VintageOverlay() {
  return (
    <>
      {/* Vintage paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 vintage-texture-overlay"></div>

      {/* Dust particles animation */}
      <div className="fixed inset-0 pointer-events-none z-20 vintage-dust">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="vintage-dust-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Coffee stain effects */}
      <div className="fixed top-[10%] right-[5%] w-32 h-32 rounded-full bg-[#8B0000] opacity-5 blur-xl pointer-events-none z-10"></div>
      <div className="fixed bottom-[20%] left-[8%] w-24 h-24 rounded-full bg-[#8B4513] opacity-5 blur-xl pointer-events-none z-10"></div>

      {/* Vintage light flicker */}
      <div className="fixed inset-0 pointer-events-none z-5 vintage-light-flicker"></div>
    </>
  )
}
