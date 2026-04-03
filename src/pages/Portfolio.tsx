import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { WhatsAppCTA } from "@/components/WhatsAppButton";
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
  
  // New Collection Vol 1
  { title: "Luxury Living I", category: "Residential", location: "Premium Suite", image: "/portfolio-optimized/vol1_10.jpg" },
  { title: "Elegance Restored", category: "Residential", location: "Grand Villa", image: "/portfolio-optimized/vol1_11.jpg" },
  { title: "Modernist Manor", category: "Residential", location: "Coastal Estate", image: "/portfolio-optimized/vol1_12.jpg" },
  { title: "The Atrium", category: "Commercial", location: "City Center", image: "/portfolio-optimized/vol1_16.jpg" },
  { title: "Zen Garden", category: "Residential", location: "Suburban Bliss", image: "/portfolio-optimized/vol1_19.jpg" },
  { title: "Royal Suite", category: "Hospitality", location: "Palace View", image: "/portfolio-optimized/vol1_2.jpg" },
  { title: "Pristine Interiors", category: "Residential", location: "Urban Loft", image: "/portfolio-optimized/vol1_22.jpg" },
  { title: "Grand Ballroom", category: "Hospitality", location: "Event Hall", image: "/portfolio-optimized/vol1_24.jpg" },
  { title: "Designer Den", category: "Residential", location: "Tech Park", image: "/portfolio-optimized/vol1_26.jpg" },
  { title: "The Penthouse", category: "Residential", location: "Skyline Tower", image: "/portfolio-optimized/vol1_30.jpg" },
  
  // New Collection Vol 2
  { title: "Minimalist Dream", category: "Residential", location: "Modern Flat", image: "/portfolio-optimized/vol2_1.jpg" },
  { title: "Cozy Corner", category: "Residential", location: "Heritage Home", image: "/portfolio-optimized/vol2_10.jpg" },
  { title: "Industrial Loft", category: "Commercial", location: "Old Mill", image: "/portfolio-optimized/vol2_11.jpg" },
  { title: "Sleek Workspace", category: "Commercial", location: "Innovation Hub", image: "/portfolio-optimized/vol2_12.jpg" },
  { title: "The Boutique", category: "Commercial", location: "Fashion Street", image: "/portfolio-optimized/vol2_13_.jpg" },
  { title: "Urban Escape", category: "Residential", location: "Metro Dwelling", image: "/portfolio-optimized/vol2_14_.jpg" },
  { title: "Harmony Hall", category: "Residential", location: "Peaceful Valley", image: "/portfolio-optimized/vol2_15_.jpg" },
  { title: "Vibrant Vista", category: "Residential", location: "Parkside", image: "/portfolio-optimized/vol2_16.jpg" },
  { title: "The Gallery", category: "Commercial", location: "Arts District", image: "/portfolio-optimized/vol2_17.jpg" },
  { title: "Presidential Office", category: "Commercial", location: "Business District", image: "/portfolio-optimized/vol2_18.jpg" },
  
  // New Collection Vol 3
  { title: "Radiant Residence", category: "Residential", location: "Sunrise Heights", image: "/portfolio-optimized/vol3_1.jpg" },
  { title: "The Lounge", category: "Hospitality", location: "Nightfall Inn", image: "/portfolio-optimized/vol3_10_.jpg" },
  { title: "Signature Suite", category: "Hospitality", location: "Grand Plaza", image: "/portfolio-optimized/vol3_2.jpg" },
  { title: "Creative Cove", category: "Commercial", location: "Studio 101", image: "/portfolio-optimized/vol3_6.jpg" },
  { title: "Elite Workspace", category: "Commercial", location: "Tech Tower", image: "/portfolio-optimized/vol3_8.jpg" },
  { title: "Sanctuary Study", category: "Residential", location: "Quiet Street", image: "/portfolio-optimized/vol3_9.jpg" },
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
                  loading="lazy"
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

      <WhatsAppCTA 
        title="Like What You See?" 
        subtitle="Let's discuss how we can create something similar for your space. Chat with us directly on WhatsApp."
        page="portfolio"
      />
    </Layout>
  );
};

export default Portfolio;
