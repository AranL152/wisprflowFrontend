import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Flow",
      features: [
        "30 minutes per month",
        "All apps supported",
        "AI auto-edits",
        "Personal dictionary",
        "Basic support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$4",
      period: "/month",
      description: "Best for regular users",
      features: [
        "Unlimited minutes",
        "All apps supported",
        "AI auto-edits",
        "Personal dictionary",
        "Snippet library",
        "Priority support",
        "Advanced features",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Lifetime",
      price: "$100",
      period: "one-time",
      description: "Pay once, use forever",
      features: [
        "Everything in Pro",
        "Lifetime access",
        "All future updates",
        "Priority support forever",
        "Early access to features",
        "Support the development",
      ],
      cta: "Get Lifetime Access",
      popular: false,
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Choose your plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start for free, upgrade when you're ready. No credit card required.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-foreground bg-foreground/5 shadow-xl scale-105"
                  : "border-border bg-background"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-foreground text-background px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-full font-medium ${
                  plan.popular
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
                size="lg"
                onClick={() => window.open('https://github.com/AranL152/wisprflow-builder', '_blank')}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          <p>All plans include a 14-day money-back guarantee.</p>
          <p className="mt-2">Questions? <a href="#" className="underline hover:text-foreground">Contact our sales team</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
