import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import designerImage from "@/assets/designer-portrait.jpg";
import heroImage from "@/assets/hero-living.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "150+", label: "Luxury Projects" },
  { number: "12", label: "Years Experience" },
  { number: "100%", label: "Client Dedication" },
  { number: "Premium", label: "Material Selection" },
];

const values = [
  { title: "Refined Aesthetics", desc: "We focus on delivering spaces that embody sophistication and timeless beauty." },
  { title: "Functional Planning", desc: "Every design is rooted in strategic layouts that optimize both flow and utility." },
  { title: "Bespoke Experiences", desc: "We craft unique environments tailored to the specific lifestyle and vision of our clients." },
  { title: "Premium Standards", desc: "From custom furniture to designer lighting, we maintain the highest quality in every detail." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroImage} alt="Inspacial Designs studio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="relative z-10 section-padding pb-12 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent block mb-3">Our Story</span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground uppercase">About Inspacial</h1>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={designerImage} alt="Saif - Founder" className="w-full aspect-[3/4] object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <SectionHeading label="Founder" title="Saif" />
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>Saif is the Founder of Inspacial Designs – a premium design studio specializing in bespoke residential and luxury spaces. With a keen eye for detail and a passion for architectural excellence, he has established Inspacial as a leader in high-end design.</p>
              <p>Focused on delivering refined aesthetics, functional planning, and timeless design experiences, Saif leads the studio with an unwavering commitment to craftsmanship and the art of living well.</p>
              <p>Under his leadership, Inspacial Designs creates premium, detail-driven spaces that reflect sophistication, comfort, and a refined lifestyle for every client.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <span className="font-display text-4xl md:text-5xl font-semibold text-accent">{stat.number}</span>
              <p className="font-body text-sm text-primary-foreground/60 mt-2 tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading label="Philosophy" title="Our Values" description="The principles that guide every design decision and client relationship." align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="gold-line mt-3 shrink-0" />
              <div>
                <h3 className="font-display text-xl font-medium mb-2 text-foreground">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Work With Us</h2>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">We'd love to hear about your project. Let's create something extraordinary together.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
