import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <div className="w-1 h-4 bg-foreground rounded-full"></div>
            <div className="w-1 h-3 bg-foreground rounded-full mt-0.5"></div>
            <div className="w-1 h-4 bg-foreground rounded-full"></div>
            <div className="w-1 h-2 bg-foreground rounded-full mt-1"></div>
          </div>
          <span className="text-lg font-semibold font-sans">Flow</span>
        </div>

        {/* Download Button */}
        <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 gap-2">
          <Download className="w-4 h-4" />
          Download Flow
        </Button>
      </div>
    </footer>
  );
};

export default Footer;