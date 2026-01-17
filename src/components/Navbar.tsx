import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Product", hasDropdown: true },
    { label: "Individuals", hasDropdown: true },
    { label: "Business", hasDropdown: false },
    { label: "Pricing", hasDropdown: false },
    { label: "About", hasDropdown: true },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div className="glass rounded-full border border-border/50 px-6 py-3 flex items-center justify-between shadow-lg w-full relative">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-1">
          <div className="flex gap-0.5">
            <div className="w-1 h-5 bg-foreground rounded-full"></div>
            <div className="w-1 h-4 bg-foreground rounded-full mt-0.5"></div>
            <div className="w-1 h-5 bg-foreground rounded-full"></div>
            <div className="w-1 h-3 bg-foreground rounded-full mt-1"></div>
          </div>
          <span className="text-xl font-semibold font-sans">Flow</span>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-1 justify-center absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </button>
          ))}
          <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full border border-border hover:bg-muted/50 ml-2">
            Research
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex flex-1 justify-end">
          <Button
            className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-5 text-sm"
            onClick={() => window.open('https://github.com/AranL152/wisprflow-builder', '_blank')}
          >
            Download for free
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass rounded-2xl border border-border/50 p-4 shadow-lg"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </button>
          ))}
          <Button 
            className="w-full mt-4 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium"
            onClick={() => window.open('https://github.com/AranL152/wisprflow-builder', '_blank')}
          >
            Download for free
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;