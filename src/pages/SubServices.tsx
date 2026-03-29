import { motion } from "framer-motion";
import { Sofa, Lightbulb, Palette, Building, Construction, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

// Using relevant assets
import furnitureImg from "@/assets/project-bedroom.jpg";
import lightingImg from "@/assets/project-bathroom.jpg";
import materialImg from "@/assets/project-kitchen.jpg";
import facadeImg from "@/assets/hero-living.jpg";
import renovationImg from "@/assets/project-office.jpg";

const subServices = [
  {
    title: "Custom Furniture Design",
    desc: "Bespoke furniture pieces tailored to your exact space and aesthetic requirements, crafted with premium materials.",
    icon: Sofa,
    image: furnitureImg,
  },
  {
    title: "Designer Lighting Concepts",
    desc: "Sophisticated lighting plans that combine functional illumination with artistic statements to enhance every corner of your home.",
    icon: Lightbulb,
    image: lightingImg,
  },
  {
    title: "Material & Finish Selection",
    desc: "Expert curation of premium stones, woods, fabrics, and finishes to ensure a cohesive and luxurious atmosphere.",
    icon: Palette,
    image: materialImg,
  },
  {
    title: "Facade & Elevation Design",
    desc: "Architectural exterior design that creates a striking first impression and harmonizes with the surrounding environment.",
    icon: Building,
    image: facadeImg,
  },
  {
    title: "Renovation & Luxury Remodeling",
    desc: "Complete transformation of existing spaces into modern sanctuaries with meticulous attention to structural and aesthetic detail.",
    icon: Construction,
    image: renovationImg,
  },
];

const SubServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <img src={facadeImg} alt="Sub Services Hero" className="w-full h-full object-cover" />
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
                  <Link to="/contact" className="inline-flex items-center gap-3 text-accent font-body text-sm tracking-widest uppercase hover:text-primary transition-colors">
                    Inquire About This Service <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6 uppercase">Ready to refine your vision?</h2>
          <p className="font-body text-white/70 mb-10 text-lg leading-relaxed">
            Contact us to discuss how our specialized sub-services can elevate your project to the next level of luxury.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 px-10 py-4 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default SubServices;
