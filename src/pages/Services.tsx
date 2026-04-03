import { motion } from "framer-motion";
import { Building, Paintbrush, Box, Layers, Sofa, Lightbulb, Palette, Home, Zap, Construction, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { WhatsAppButton, WhatsAppCTA } from "@/components/WhatsAppButton";

import { Link } from "react-router-dom";

// Using relevant placeholder images for each service
import archiImage from "@/assets/luxury-architectural.png";
import interiorImage from "@/assets/high-end-interior.png";
import visionImage from "@/assets/3d-visualization.png";
import spaceImage from "@/assets/project-office.jpg";
import furnitureImage from "@/assets/project-bedroom.jpg";
import lightingImage from "@/assets/project-bathroom.jpg";
import materialSelectionImage from "@/assets/material-selection.png";


const services = [
  { 
    icon: Building, 
    title: "Luxury Architectural Planning", 
    desc: "Comprehensive architectural solutions for premium residential and luxury projects.", 
    features: ["Site analysis", "Blueprint development", "Regulatory compliance", "Structural integrity"],
    image: archiImage,
    whatsappMessage: "Hi! I'm interested in Luxury Architectural Planning. Could you please share more details about your process and pricing?"
  },

  { 
    icon: Paintbrush, 
    title: "High-End Interior Design", 
    desc: "Bespoke interiors focused on delivering refined aesthetics and functional planning.", 
    features: ["Concept development", "Material selection", "Bespoke styling", "Aesthetic curation"],
    image: interiorImage,
    whatsappMessage: "Hi! I'm looking for High-End Interior Design for my space. Could you please share more details about your interior services?"
  },

  { 
    icon: Box, 
    title: "3D Visualization", 
    desc: "Photorealistic 3D concepts and development to visualize your future space before construction.", 
    features: ["3D rendering", "Virtual walkthroughs", "Concept visualization", "Material simulation"],
    image: visionImage,
    whatsappMessage: "Hi! I'd like to get 3D Visualization for my project. Can you help me visualize my future space?"
  },

  { 
    icon: Layers, 
    title: "Space Planning", 
    desc: "Strategic design strategy and space planning for optimal flow, comfort, and sophistication.", 
    features: ["Layout optimization", "Flow analysis", "Furniture strategy", "Zoning solutions"],
    image: spaceImage,
    whatsappMessage: "Hi! I need expert Space Planning for my home/office. How can you help optimize my floor plan?"
  },

  { 
    icon: Sofa, 
    title: "Custom Furniture Design", 
    desc: "Bespoke furniture crafted to fit your space perfectly, blending form and function with premium specifications.", 
    features: ["Unique pieces", "Premium materials", "Artisan crafting", "Ergonomic design"],
    image: furnitureImage,
    whatsappMessage: "Hi! I'm interested in Custom Furniture Design. Can we discuss bespoke pieces for my interior?"
  },

  { 
    icon: Lightbulb, 
    title: "Designer Lighting Concepts", 
    desc: "Layered lighting plans that set the mood and highlight architectural features with a premium touch.", 
    features: ["Atmospheric lighting", "Fixture selection", "Smart integration", "Focal point highlighting"],
    image: lightingImage,
    whatsappMessage: "Hi! I'd like to consult on Designer Lighting Concepts. Can you help me create a perfect lighting plan?"
  },

  { 
    icon: Palette, 
    title: "Material & Finish Selection", 
    desc: "Selection of premium materials and finishes that define the luxury and quality of your space.", 
    features: ["Premium stones", "Luxury fabrics", "High-end finishes", "Texture pairing"],
    image: materialSelectionImage,
    whatsappMessage: "Hi! I'm interested in Material & Finish Selection. Could you help me choose premium finishes for my space?"
  },

  { 
    icon: Construction, 
    title: "Renovation Consultation", 
    desc: "Expert guidance on luxury remodeling and renovations to transform existing spaces into sanctuaries.", 
    features: ["Project assessment", "Remodeling strategy", "Budgeting", "Quality oversight"],
    image: archiImage, // Reusing for consistency in theme
    whatsappMessage: "Hi! I'm planning a Renovation. Could I get a consultation on how to transform my existing space?"
  },

];

const process = [
  { step: "01", title: "Discovery", desc: "We begin with a deep-dive conversation to understand your vision, lifestyle, and aspirations for the space." },
  { step: "02", title: "Concept", desc: "Our team develops mood boards, material palettes, and spatial concepts that bring your vision to life." },
  { step: "03", title: "Design", desc: "Detailed plans, 3D renderings, and specifications are created for every element of your space." },
  { step: "04", title: "Realization", desc: "We oversee every aspect of implementation, ensuring flawless execution of the design vision." },
];

const Services = () => {
  return (
    <Layout>
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
                    <ul className="grid grid-cols-1 gap-2 min-h-[6rem]">
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
                        className="w-full justify-center !py-4 font-semibold text-[10px] tracking-widest bg-accent hover:bg-black text-accent-foreground hover:text-white"
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

      {/* Sub Services CTA */}
      <section className="section-padding max-w-7xl mx-auto text-center border-t border-border/50">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent block mb-4">Even More Detail</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 uppercase">Explore Our Specialized Sub-Services</h2>
          <p className="font-body text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
            From bespoke furniture to facade design, discover how our specialized expertise can perfect every facet of your project.
          </p>
          <Link to="/sub-services" className="inline-flex items-center gap-3 px-10 py-4 bg-background border border-accent text-accent font-body text-sm tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-500">
            View Sub Services <ArrowRight size={16} />
          </Link>
        </motion.div>
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

      {/* CTA */}
      <WhatsAppCTA 
        title="Let's Create Something Beautiful" 
        subtitle="Schedule a complimentary consultation and discover how we can transform your space."
        page="services"
      />
    </Layout>
  );
};

export default Services;
