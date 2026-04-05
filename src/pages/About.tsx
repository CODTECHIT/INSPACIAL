import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { SEO } from "@/components/SEO";
import companyImage from "@/assets/hero-living.jpg";
import projectImage from "@/assets/project-kitchen.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Award, Users, Gem } from "lucide-react";
import { useEffect, useRef } from "react";

const Counter = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric part and suffix
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (isInView && target > 0) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, target, count]);

  if (!match) return <span className="whitespace-nowrap">{value}</span>;

  return (
    <span ref={ref} className="whitespace-nowrap">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const stats = [
  { number: "150+", label: "Luxury Projects", icon: Gem },
  { number: "12", label: "Years Experience", icon: Award },
  { number: "100%", label: "Client Dedication", icon: Users },
  { number: "End-to-End", label: "Project Control", icon: CheckCircle2 },
];

const values = [
  { title: "End-to-End Service", desc: "We take everything into our hands, from the smallest detail to the final execution. You provide the vision; we handle the rest." },
  { title: "Bespoke Excellence", desc: "Every project is a unique journey. We don't follow trends; we create timeless sanctuaries tailored to your lifestyle." },
  { title: "Strategic Execution", desc: "Our process is rooted in functional planning and refined aesthetics, ensuring a seamless transition from concept to reality." },
  { title: "Premium Craftsmanship", desc: "We partner with the finest artisans to deliver a premium output that exceeds expectations in every square foot." },
];

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About"
        description="Learn about INSPACIAL DESIGNS - a premium design studio founded by Saif, specializing in bespoke residential and luxury spaces. With 150+ projects and 12+ years of experience, we deliver refined aesthetics, functional planning, and timeless design experiences."
        keywords="about Inspacial Designs, luxury interior design studio, Saif founder, premium design studio, bespoke residential design, luxury spaces, Mumbai interior designer, design philosophy"
        url="https://www.inspacialdesigns.com/about"
      />
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={companyImage} alt="Inspacial Designs Luxury Interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-body text-xs tracking-[0.4em] uppercase text-accent block mb-4">The Studio</span>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-white uppercase leading-tight">
              About <br /> Inspacial Designs
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
            />
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-lg">
              <p>
                We don't just design spaces; we manage every single aspect of your project. From the smallest hardware selection to the grandest architectural planning, our team takes everything into their hands. This "End-to-End" approach allows us to maintain absolute control over quality, timeline, and aesthetic integrity.
              </p>
              <p>
                Our mission is to provide a stress-free, premium experience for our clients. By handling every detail—beginning to end—we ensure that the final output is not just a room, but a bespoke sanctuary that reflects your unique vision and lifestyle.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img src={projectImage} alt="Luxury Space Execution" loading="lazy" className="w-full aspect-square object-cover shadow-2xl" />
            <div className="absolute -bottom-8 -left-8 bg-accent p-10 hidden md:block shadow-xl">
              <p className="font-display text-2xl text-accent-foreground font-medium italic">"We take care of every single thing."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={32} className="text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-display text-4xl md:text-5xl font-semibold text-accent block">
                <Counter value={stat.number} />
              </span>
              <p className="font-body text-sm text-primary-foreground/60 mt-3 tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
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
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-8 p-8 border border-border/50 hover:border-accent/30 transition-colors bg-background"
            >
              <div className="w-1 h-full bg-accent shrink-0" />
              <div>
                <h3 className="font-display text-2xl font-medium mb-4 text-foreground">{value.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="section-padding max-w-4xl mx-auto text-center border-t border-border/30">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            label="Founder" 
            title="Saif" 
            description="Founder of Inspacial Designs – a premium design studio specializing in bespoke residential and luxury spaces."
            align="center"
          />
          <div className="max-w-2xl mx-auto space-y-6 font-body text-muted-foreground leading-relaxed text-lg italic">
            <p>
              "Focused on delivering refined aesthetics, functional planning, and timeless design experiences. We believe that great design is not about trends — it's about creating spaces that reflect sophistication and a refined lifestyle."
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 uppercase tracking-tight">Experience Absolute Design</h2>
          <p className="font-body text-muted-foreground mb-10 text-lg leading-relaxed">
            Ready to let us handle your project from beginning to end? We ensure a premium output that reflects your vision.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-accent text-accent-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-charcoal hover:text-white transition-all duration-500 shadow-lg">
            Start Your Journey <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
