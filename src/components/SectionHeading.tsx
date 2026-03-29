import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ label, title, description, align = "left", light = false, className = "mb-14" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`${className} ${align === "center" ? "text-center" : ""}`}
    >
      {label && (
        <span className="font-body text-xs tracking-[0.3em] uppercase text-accent block mb-4">
          {label}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-5xl font-semibold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 font-body max-w-2xl leading-relaxed text-lg ${light ? "text-primary-foreground/60" : "text-muted-foreground"} ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
