import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    id: "teams",
    label: "Teams",
    title: "Flow for Teams",
    description: "Fewer meetings, faster alignment, and a voice for everyone when it matters most. Teams also get centralized admin controls and special pricing.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    id: "students",
    label: "Students",
    title: "Flow for Students",
    description: "Blank pages and looming deadlines? Flow's got you. Capture class notes, draft cover letters, and break through writer's block with minimal effort.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  },
  {
    id: "developers",
    label: "Developers",
    title: "Flow for Developers",
    description: "Dictate in natural language and let Flow translate—perfect for Cursor, VS Code, or wherever you build. From commit messages to refactors, stay in the zone.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    id: "creators",
    label: "Creators",
    title: "Flow for Creators",
    description: "Ideas hit fast, but execution is slow. Breeze through unread DMs, comment replies, and draft content with your voice. Create more, type less.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
  },
  {
    id: "sales",
    label: "Sales",
    title: "Flow for Sales",
    description: "Slow follow ups mean lost deals. With Flow, you can follow up instantly after meetings, personalize outreach, and punch up your pitch—without typing a word.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
  },
];

const UseCasesSection = () => {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-center mb-12"
        >
          Flow is made for you
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveCase(useCase)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCase.id === useCase.id
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {useCase.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={activeCase.image}
                alt={activeCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-3xl md:text-4xl font-serif mb-4">
                Flow for <span className="italic">{activeCase.label}</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {activeCase.description}
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  Learn more
                </Button>
                <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                  Download for free
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCasesSection;