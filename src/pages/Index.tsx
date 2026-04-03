import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Paintbrush, Sofa, Lightbulb, Ruler, Building, Box, Zap, Layers, Palette, Construction } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useState, useEffect } from "react";
import { X } from "lucide-react";


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

const homePortfolio = [
  { image: "/portfolio-optimized/vol1_10.jpg" },
  { image: "/portfolio-optimized/vol1_11.jpg" },
  { image: "/portfolio-optimized/vol1_12.jpg" },
  { image: "/portfolio-optimized/vol1_16.jpg" },
  { image: "/portfolio-optimized/vol1_19.jpg" },
  { image: "/portfolio-optimized/vol1_2.jpg" },
  { image: "/portfolio-optimized/vol1_22.jpg" },
  { image: "/portfolio-optimized/vol1_24.jpg" },
  { image: "/portfolio-optimized/vol1_26.jpg" },
];

const services = [
  { 
    icon: Building, 
    title: "Luxury Architectural Planning", 
    desc: "Comprehensive architectural solutions for premium residential and luxury projects.", 
    features: ["Site analysis", "Blueprint development", "Regulatory compliance", "Structural integrity"],
    image: bedroomImage,
    whatsappMessage: "Hi! I'm interested in Luxury Architectural Planning. Could you please share more details about your process and pricing?"
  },

  { 
    icon: Paintbrush, 
    title: "High-End Interior Design", 
    desc: "Bespoke interiors focused on delivering refined aesthetics and functional planning.", 
    features: ["Concept development", "Material selection", "Bespoke styling", "Aesthetic curation"],
    image: kitchenImage,
    whatsappMessage: "Hi! I'm looking for High-End Interior Design for my space. Could you please share more details about your interior services?"
  },

  { 
    icon: Box, 
    title: "3D Visualization", 
    desc: "Photorealistic 3D concepts and development to visualize your future space before construction.", 
    features: ["3D rendering", "Virtual walkthroughs", "Concept visualization", "Material simulation"],
    image: bathroomImage,
    whatsappMessage: "Hi! I'd like to get 3D Visualization for my project. Can you help me visualize my future space?"
  },

  { 
    icon: Layers, 
    title: "Space Planning", 
    desc: "Strategic design strategy and space planning for optimal flow, comfort, and sophistication.", 
    features: ["Layout optimization", "Flow analysis", "Furniture strategy", "Zoning solutions"],
    image: officeImage,
    whatsappMessage: "Hi! I need expert Space Planning for my home/office. How can you help optimize my floor plan?"
  },

  { 
    icon: Sofa, 
    title: "Custom Furniture Design", 
    desc: "Bespoke furniture crafted to fit your space perfectly, blending form and function with premium specifications.", 
    features: ["Unique pieces", "Premium materials", "Artisan crafting", "Ergonomic design"],
    image: bedroomImage,
    whatsappMessage: "Hi! I'm interested in Custom Furniture Design. Can we discuss bespoke pieces for my interior?"
  },

  { 
    icon: Lightbulb, 
    title: "Designer Lighting Concepts", 
    desc: "Layered lighting plans that set the mood and highlight architectural features with a premium touch.", 
    features: ["Atmospheric lighting", "Fixture selection", "Smart integration", "Focal point highlighting"],
    image: kitchenImage,
    whatsappMessage: "Hi! I'd like to consult on Designer Lighting Concepts. Can you help me create a perfect lighting plan?"
  },

  { 
    icon: Palette, 
    title: "Material & Finish Selection", 
    desc: "Selection of premium materials and finishes that define the luxury and quality of your space.", 
    features: ["Premium stones", "Luxury fabrics", "High-end finishes", "Texture pairing"],
    image: bathroomImage,
    whatsappMessage: "Hi! I'm interested in Material & Finish Selection. Could you help me choose premium finishes for my space?"
  },

  { 
    icon: Construction, 
    title: "Renovation Consultation", 
    desc: "Expert guidance on luxury remodeling and renovations to transform existing spaces into sanctuaries.", 
    features: ["Project assessment", "Remodeling strategy", "Budgeting", "Quality oversight"],
    image: officeImage,
    whatsappMessage: "Hi! I'm planning a Renovation. Could I get a consultation on how to transform my existing space?"
  },

];

const process = [
  { step: "01", title: "Discovery", desc: "We begin with a deep-dive conversation to understand your vision, lifestyle, and aspirations for the space." },
  { step: "02", title: "Concept", desc: "Our team develops mood boards, material palettes, and spatial concepts that bring your vision to life." },
  { step: "03", title: "Design", desc: "Detailed plans, 3D renderings, and specifications are created for every element of your space." },
  { step: "04", title: "Realization", desc: "We oversee every aspect of implementation, ensuring flawless execution of the design vision." },
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2">
            <X size={32} onClick={() => setSelectedImage(null)} />
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center md:items-end overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
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

      {/* About/Companies Section */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              label="Our Philosophy"
              title="From Concept to Completion"
              description={<span><span className="bg-accent/20 px-1 py-0.5 font-semibold">A premium design studio specializing in bespoke residential and luxury spaces</span>, focused on delivering refined aesthetics, functional planning, and timeless design experiences.</span>}
              className="mb-8"
            />
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-lg">
              <p>
                We don't just design spaces; we manage every single aspect of your project. From the smallest hardware selection to the grandest architectural planning, our team takes everything into their hands. This "End-to-End" approach allows us to maintain absolute control over quality, timeline, and aesthetic integrity.
              </p>
              <p>
                Our mission is to provide a stress-free, premium experience for our clients. By handling every detail—beginning to end—we ensure that the final output is not just a room, but a bespoke sanctuary that reflects your unique vision and lifestyle.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-accent hover:text-gold-light transition-colors pb-2 border-b border-accent/20 hover:border-accent transition-all duration-300 mt-8"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img src={kitchenImage} alt="Luxury Space Execution" loading="lazy" className="w-full aspect-square object-cover shadow-2xl" />
            <div className="absolute -bottom-8 -left-8 bg-accent p-10 hidden md:block shadow-xl">
              <p className="font-display text-2xl text-accent-foreground font-medium italic">"We take care of every single thing."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center group"
          >
            <span className="font-display text-4xl md:text-5xl font-semibold text-accent block">150+</span>
            <p className="font-body text-sm text-primary-foreground/60 mt-3 tracking-widest uppercase">Luxury Projects</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center group"
          >
            <span className="font-display text-4xl md:text-5xl font-semibold text-accent block">12+</span>
            <p className="font-body text-sm text-primary-foreground/60 mt-3 tracking-widest uppercase">Years Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center group"
          >
            <span className="font-display text-4xl md:text-5xl font-semibold text-accent block">100%</span>
            <p className="font-body text-sm text-primary-foreground/60 mt-3 tracking-widest uppercase">Client Dedication</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center group"
          >
            <span className="font-display text-3xl md:text-4xl font-semibold text-accent block">End-to-End</span>
            <p className="font-body text-sm text-primary-foreground/60 mt-3 tracking-widest uppercase">Project Control</p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding max-w-7xl mx-auto bg-cream/30">
        <SectionHeading
          label="Our Commitment"
          title="The Inspacial Way"
          description="How we deliver premium results through comprehensive project ownership."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-8 p-8 border border-border/50 hover:border-accent/30 transition-colors bg-background"
          >
            <div className="w-1 h-full bg-accent shrink-0" />
            <div>
              <h3 className="font-display text-2xl font-medium mb-4 text-foreground">End-to-End Service</h3>
              <p className="font-body text-muted-foreground leading-relaxed">We take everything into our hands, from the smallest detail to the final execution. You provide the vision; we handle the rest.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-8 p-8 border border-border/50 hover:border-accent/30 transition-colors bg-background"
          >
            <div className="w-1 h-full bg-accent shrink-0" />
            <div>
              <h3 className="font-display text-2xl font-medium mb-4 text-foreground">Bespoke Excellence</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Every project is a unique journey. We don't follow trends; we create timeless sanctuaries tailored to your lifestyle.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-8 p-8 border border-border/50 hover:border-accent/30 transition-colors bg-background"
          >
            <div className="w-1 h-full bg-accent shrink-0" />
            <div>
              <h3 className="font-display text-2xl font-medium mb-4 text-foreground">Strategic Execution</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Our process is rooted in functional planning and refined aesthetics, ensuring a seamless transition from concept to reality.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-8 p-8 border border-border/50 hover:border-accent/30 transition-colors bg-background"
          >
            <div className="w-1 h-full bg-accent shrink-0" />
            <div>
              <h3 className="font-display text-2xl font-medium mb-4 text-foreground">Premium Craftsmanship</h3>
              <p className="font-body text-muted-foreground leading-relaxed">We partner with the finest artisans to deliver a premium output that exceeds expectations in every square foot.</p>
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
              title="Our Work"
              description="Explore our collection of thoughtfully designed spaces spanning residential, commercial, and hospitality projects."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homePortfolio.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={project.image}
                alt={`Project ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onClick={() => setSelectedImage(project.image)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          label="Services"
          title="Comprehensive Design Services"
          description="From a single room refresh to a complete home transformation, we offer tailored services to meet your every design need."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 auto-rows-fr">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full flex"
            >
              <div className="group bg-background border border-border overflow-hidden hover:border-accent/50 transition-all duration-500 flex flex-col h-full w-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-background/90 backdrop-blur-sm border border-accent/20">
                    <service.icon size={18} className="text-accent" />
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-medium mb-3 text-foreground tracking-tight">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 min-h-[4rem] line-clamp-3">{service.desc}</p>
                  
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="h-px bg-border/50 w-full" />
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="font-body text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent/60" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    
                  <div className="flex-1 flex flex-col pt-6">
                    <div className="mt-auto">
                      <WhatsAppButton 
                        message={service.whatsappMessage}
                        className="w-full justify-center !py-4 font-semibold text-[10px] tracking-wider whitespace-nowrap bg-accent hover:bg-black text-accent-foreground hover:text-white"
                      />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Process"
            title="How We Work"
            description="A refined four-step process that ensures every project is thoughtful, seamless, and beautifully executed."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="font-display text-5xl font-semibold text-accent/20">{step.step}</span>
                <h3 className="font-display text-xl font-medium mt-4 mb-3 text-foreground">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
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
