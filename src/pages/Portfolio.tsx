import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import bedroomImage from "@/assets/project-bedroom.jpg";
import kitchenImage from "@/assets/project-kitchen.jpg";
import bathroomImage from "@/assets/project-bathroom.jpg";
import officeImage from "@/assets/project-office.jpg";
import heroImage from "@/assets/hero-living.jpg";

const allProjects = [
  { title: "Serene Retreat", category: "Residential", location: "Upper East Side, NYC", image: bedroomImage },
  { title: "The Golden Kitchen", category: "Residential", location: "Tribeca, NYC", image: kitchenImage },
  { title: "Spa Sanctuary", category: "Residential", location: "Hamptons, NY", image: bathroomImage },
  { title: "Executive Study", category: "Commercial", location: "Midtown, NYC", image: officeImage },
  { title: "Velvet Lounge", category: "Hospitality", location: "SoHo, NYC", image: heroImage },
  { title: "Modern Haven", category: "Residential", location: "Greenwich, CT", image: bedroomImage },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Our Work"
          description="Explore our collection of thoughtfully designed spaces spanning residential, commercial, and hospitality projects."
          align="center"
        />
        <div className="flex justify-center gap-6 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-xs tracking-widest uppercase transition-colors pb-1 border-b-2 ${
                active === cat ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-accent">{project.category}</span>
                  <h3 className="font-display text-2xl text-primary-foreground mt-1">{project.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/60 mt-1">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default Portfolio;
