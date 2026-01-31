/* eslint-disable react-hooks/purity */
import Button from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import { socialLinks } from "@/utils/constant";
import { skills } from "@/utils/constant";

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
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Tag Section */}
            <div className="animation-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer ~ React Specialist
              </span>
            </div>
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100">
                Specializing{" "}
                <span className="text-primary glow-text">in building</span>{" "}
                <br /> scalable enterprise <br />{" "}
                <span className="font-serif font-normal text-white italic">
                  applications.
                </span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-lg animation-fade-in animation-delay-200">
                Myself Najmush Saquib Ali, a Frontend Developer with 3.9+ years
                of experience at Tata Consultancy Services, specializing in
                building scalable enterprise applications using React.js, Redux,
                and Modern JavaScript. Expert in architecting Server-Driven UIs,
                optimizing web performance, and bridging web-to-mobile
                experiences. Proven track record of leading frontend initiatives
                and delivering complex, data-driven portals for global insurance
                clients.
              </p>
            </div>
            {/* CTA */}
            <div className="flex flex-wrap gap-4 animation-fade-in animation-delay-300">
              <Button size="default">
                <span className="flex items-center gap-1">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <AnimatedBorderButton>
                <Download />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social Network Links */}
            <div className="flex gap-4 items-center animation-fade-in animation-delay-400">
              <span>Follow Me:</span>
              {socialLinks.map((social) => (
                <a
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  key={social.id}
                  href={social.href}
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animation-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                            rounded-3xl bg-linear-to-br 
                            from-primary/30 via-transparent 
                            to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.png"
                  alt="Najmush Saquib Ali"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl animation-float">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass px-4 py-2 rounded-xl animation-float animation-delay-500">
                  <div className="text-2xl text-primary font-bold">3.9+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animation-fade-in animation-delay-600">
          <p className="text-sm mb-6 text-muted-foreground text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div className="shrink-0 px-8 py-4" key={idx}>
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
