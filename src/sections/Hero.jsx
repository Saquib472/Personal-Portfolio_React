/* eslint-disable react-hooks/purity */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="/public/hero-bg.jpg"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green DOT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-[#20B2A6]"
            style={{
                left: `${Math.random()*100}%`,
                top: `${Math.random()*100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
