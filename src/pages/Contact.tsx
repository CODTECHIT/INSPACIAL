import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Studio", value: "Inspacial Designs Studio\nPremium Residential & Luxury Spaces" },
  { icon: Phone, label: "Call / WhatsApp", value: "+91 81791 90101" },
  { icon: Mail, label: "Email Us", value: "hello@inspacialdesigns.com" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 10AM – 7PM\nSun: By Appointment" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you! We'll be in touch within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "", service: "" });
  };

  return (
    <Layout>
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Start Your Project"
          description="Ready to transform your space? Fill out the form below or reach out directly. We respond within 24 hours."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-8">
          {/* Contact Info */}
          <div className="space-y-10">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-accent/30 shrink-0">
                  <info.icon size={16} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-body text-xs tracking-widest uppercase text-accent mb-1">{info.label}</h4>
                  <p className="font-body text-sm text-muted-foreground whitespace-pre-line">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Service</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="interior-styling">Interior Styling</option>
                  <option value="furniture-design">Furniture Design</option>
                  <option value="lighting-design">Lighting Design</option>
                  <option value="space-planning">Space Planning</option>
                  <option value="full-service">Full-Service Design</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="px-10 py-4 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
