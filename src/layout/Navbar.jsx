import { navLinks } from "@/utils/constant";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed z-10 top-0 left-0 right-0 py-5 bg-transparent">
      <nav className="flex items-center justify-between px-6 container mx-auto">
        <a
          href="#"
          className="text-xl tracking-tight font-bold hover:text-primary"
        >
          NSA<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                className="px-4 py-2 text-sm text-muted-foreground rounded-full hover:text-foreground hover:bg-surface"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* HamburgerMenu Button using lucid-react */}
        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animation-fade-in">
          <div className="px-6 py-6 container mx-auto flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                className="text-lg text-muted-foreground hover:text-foreground"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <div>
              <Button className="container" size="sm">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
