import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Paintbrush, Sofa, Lightbulb, Ruler, Building, Box, Zap, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useState, useEffect } from "react";


import heroImage1 from "@/assets/hero-living.jpg";
import heroImage2 from "@/assets/project-kitchen.jpg";
import heroImage3 from "@/assets/project-office.jpg";
import heroImage4 from "@/assets/project-bedroom.jpg";

import bedroomImage from "@/assets/project-bedroom.jpg";
import kitchenImage from "@/assets/project-kitchen.jpg";
import bathroomImage from "@/assets/project-bathroom.jpg";
import officeImage from "@/assets/project-office.jpg";
import designerImage from "@/assets/designer-portrait.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

const projects = [
  { title: "Serene Retreat", category: "Bespoke Residential", image: bedroomImage },
  { title: "The Golden Kitchen", category: "Luxury Spaces", image: kitchenImage },
  { title: "Spa Sanctuary", category: "Bespoke Residential", image: bathroomImage },
  { title: "Executive Study", category: "Luxury Spaces", image: officeImage },
];

const services = [
  { icon: Building, title: "Luxury Architectural Planning", desc: "Comprehensive architectural solutions for premium residential and luxury projects.", whatsappMessage: "Hi! I'm interested in Luxury Architectural Planning. Could you please share more details about your process and pricing?" },

  { icon: Paintbrush, title: "High-End Interior Design", desc: "Bespoke interiors focused on delivering refined aesthetics and functional planning.", whatsappMessage: "Hi! I'm looking for High-End Interior Design for my space. Could you please share more details about your interior services?" },

  { icon: Box, title: "3D Visualization", desc: "Photorealistic 3D concepts and development to visualize your future space.", whatsappMessage: "Hi! I'd like to get 3D Visualization for my project. Can you help me visualize my future space?" },

  { icon: Layers, title: "Space Planning", desc: "Strategic design strategy and space planning for optimal flow and sophistication.", whatsappMessage: "Hi! I need expert Space Planning for my home/office. How can you help optimize my floor plan?" },

];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center md:items-end overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.2, x: "2%", filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1.1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1, x: "-2%", filter: "blur(5px)" }}
              transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={heroImages[currentImage]}
                alt="Luxury interior design"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-16 md:pb-32 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-accent block mb-6 drop-shadow-md">
              Premium Architectural Planning & Interior Design
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] mb-8 drop-shadow-lg">
              Where Elegance <br className="hidden md:block" /> Meets Living
            </h1>
            <p className="mt-8 font-body text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
              We craft premium, detail-driven spaces that reflect sophistication, comfort, and a refined lifestyle.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <Link
                to="/portfolio"
                className="inline-block px-12 py-5 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-xl"
              >
                View Portfolio
              </Link>
              
              <div className="hidden md:flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-12 h-1 transition-all duration-500 ${
                      index === currentImage ? "bg-accent" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionHeading
              label="Portfolio"
              title="Selected Projects"
              description="A curated selection of our most celebrated residential and commercial interiors."
              className="mb-0"
            />
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-accent hover:text-gold-light transition-colors shrink-0 pb-2 border-b border-accent/20 hover:border-accent transition-all duration-300"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-accent">{project.category}</span>
                <h3 className="font-display text-2xl text-primary-foreground mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-secondary section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <SectionHeading
                label="Services"
                title="What We Offer"
                description="From concept to completion, our comprehensive design services cover every facet of your space."
                className="mb-0"
              />
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-accent hover:text-gold-light transition-colors shrink-0 pb-2 border-b border-accent/20 hover:border-accent transition-all duration-300"
            >
              All Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group p-8 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-500 flex flex-col h-full"

              >
                <div className="w-14 h-14 flex items-center justify-center border border-accent/20 mb-8 group-hover:bg-accent group-hover:border-accent transition-all duration-500 rounded-none">
                  <service.icon size={24} className="text-accent group-hover:text-accent-foreground transition-all duration-500" />
                </div>
                <h3 className="font-display text-xl font-medium mb-4 text-foreground tracking-tight">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 min-h-[4rem] line-clamp-3">{service.desc}</p>
                <div className="mt-auto">
                    <WhatsAppButton 
                        message={service.whatsappMessage}
                        className="w-full justify-center !py-3 !px-6 text-[10px] bg-accent hover:bg-black text-accent-foreground hover:text-white"
                    />
                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent block mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground leading-tight max-w-2xl mx-auto">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-5 font-body text-lg text-primary-foreground/60 max-w-xl mx-auto leading-relaxed">
              Let's discuss your vision. Schedule a complimentary consultation and begin your design journey today.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
