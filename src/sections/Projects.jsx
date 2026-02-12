import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../utils/constant";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-sm text-secondary-foreground font-medium tracking-wider uppercase animation-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
            Projects that {" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animation-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {
            projects.map((project , idx)=>{
              return (
                <div key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 
                    bg-linear-to-t from-card via-card/50
                    to-transparent opacity-60"
                    />
                    {/* Overlay Links   */}
                    <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <a href={project.link} className="glass rounded-full p-3 hover:bg-primary hover:text-primary-foreground transition-all"><ArrowUpRight className="w-5 h-5"/></a>
                      <a href={project.github} className="glass rounded-full p-3 hover:bg-primary hover:text-primary-foreground transition-all"><Github className="w-5 h-5"/></a>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary">{project.title}</h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.decription}</p>
                    <div className="flex flex-wrap gap-2">
                      {
                        project.tags.map((tag, tagIdx) => <span className="px-4 py-1.5 rounded-full bg-surface text-muted-foreground text-xs font-medium border border-border/50 hover:border-primary/50  hover:text-primary transition-all duration-300" key={tagIdx}>{tag}</span>)
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* CTA Button */}
        <div className="mt-12 text-center animation-fade-in animation-delay-500">
          <AnimatedBorderButton>View All Projects <ArrowUpRight className="w-5 h-5" /></AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
