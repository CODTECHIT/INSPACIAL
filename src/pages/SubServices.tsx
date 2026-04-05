import { motion } from "framer-motion";
import { Sofa, Lightbulb, Palette, Building, Construction, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { WhatsAppButton, WhatsAppCTA } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

// Using relevant assets
import furnitureImg from "@/assets/project-bedroom.jpg";
import lightingImg from "@/assets/project-bathroom.jpg";
import materialImg from "@/assets/material-selection.png";

import facadeImg from "@/assets/hero-living.jpg";
import renovationImg from "@/assets/project-office.jpg";

const subServices = [
  {
    title: "Custom Furniture Design",
    desc: "Bespoke furniture pieces tailored to your exact space and aesthetic requirements, crafted with premium materials.",
    icon: Sofa,
    image: furnitureImg,
    whatsappMessage: "Hi! I'm interested in Custom Furniture Design. Could you please share more details about your bespoke furniture solutions?"
  },

  {
    title: "Designer Lighting Concepts",
    desc: "Sophisticated lighting plans that combine functional illumination with artistic statements to enhance every corner of your home.",
    icon: Lightbulb,
    image: lightingImg,
    whatsappMessage: "Hi! I'm interested in Designer Lighting Concepts. Could you help me create a perfect lighting plan for my space?"
  },

  {
    title: "Material & Finish Selection",
    desc: "Expert curation of premium stones, woods, fabrics, and finishes to ensure a cohesive and luxurious atmosphere.",
    icon: Palette,
    image: materialImg,
    whatsappMessage: "Hi! I'm interested in Material & Finish Selection. Could you help me choose the best materials and finishes for my project?"
  },

  {
    title: "Facade & Elevation Design",
    desc: "Architectural exterior design that creates a striking first impression and harmonizes with the surrounding environment.",
    icon: Building,
    image: facadeImg,
    whatsappMessage: "Hi! I'm interested in Facade & Elevation Design. Could you share more information about your exterior design services?"
  },

  {
    title: "Renovation & Luxury Remodeling",
    desc: "Complete transformation of existing spaces into modern sanctuaries with meticulous attention to structural and aesthetic detail.",
    icon: Construction,
    image: renovationImg,
    whatsappMessage: "Hi! I'm interested in Renovation & Luxury Remodeling. Can you help me transform my current space into a modern sanctuary?"
  },

];

const SubServices = () => {
  return (
    <Layout>
      <SEO 
        title="Sub Services"
        description="Explore our specialized interior design sub-services including Custom Furniture Design, Designer Lighting Concepts, Material & Finish Selection, Facade & Elevation Design, and Renovation & Luxury Remodeling. Perfect every element of your luxury space."
        keywords="custom furniture design, designer lighting, material selection, facade design, elevation design, renovation services, luxury remodeling, specialized interior services, bespoke furniture, lighting consultation"
        url="https://www.inspacialdesigns.com/sub-services"
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <img src={facadeImg} alt="Sub Services Hero" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-xs tracking-[0.4em] uppercase text-accent block mb-4">Specialized Expertise</span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white uppercase">Sub Services</h1>
          </motion.div>
        </div>
      </section>

      {/* Sub Services List */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading 
          label="Detailed Solutions" 
          title="Bespoke Design Add-ons" 
          description="Beyond our core planning, we offer specialized services to perfect every element of your luxury space."
          align="center"
        />
        
        <div className="space-y-24 mt-20">
          {subServices.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 border border-accent/20">
                  <service.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-3xl font-medium text-foreground uppercase tracking-tight">{service.title}</h3>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">{service.desc}</p>
                <div className="pt-4">
                  <WhatsAppButton 
                    message={service.whatsappMessage}
                    className="!py-3 !px-6 text-xs" 
                  />

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <WhatsAppCTA 
        title="Ready to refine your vision?" 
        subtitle="Contact us to discuss how our specialized sub-services can elevate your project to the next level of luxury."
        page="sub-services"
      />
    </Layout>
  );
};

export default SubServices;
