import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="bg-forest text-primary-foreground py-3 px-4 flex items-center justify-center gap-3 text-sm font-medium"
    >
      <span className="opacity-90">Wispr raises $81M to build the Voice OS.</span>
      <a 
        href="#" 
        className="flex items-center gap-1 hover:gap-2 transition-all duration-300 font-semibold"
      >
        Read Article
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
};

export default AnnouncementBar;