import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { WhatsAppCTA } from "@/components/WhatsAppButton";
import { X } from "lucide-react";

const allProjects = [
  { image: "/portfolio-optimized/vol1_10.jpg" },
  { image: "/portfolio-optimized/vol1_11.jpg" },
  { image: "/portfolio-optimized/vol1_12.jpg" },
  { image: "/portfolio-optimized/vol1_16.jpg" },
  { image: "/portfolio-optimized/vol1_19.jpg" },
  { image: "/portfolio-optimized/vol1_2.jpg" },
  { image: "/portfolio-optimized/vol1_22.jpg" },
  { image: "/portfolio-optimized/vol1_24.jpg" },
  { image: "/portfolio-optimized/vol1_26.jpg" },
  { image: "/portfolio-optimized/vol1_30.jpg" },
  { image: "/portfolio-optimized/vol2_1.jpg" },
  { image: "/portfolio-optimized/vol2_10.jpg" },
  { image: "/portfolio-optimized/vol2_11.jpg" },
  { image: "/portfolio-optimized/vol2_12.jpg" },
  { image: "/portfolio-optimized/vol2_13_.jpg" },
  { image: "/portfolio-optimized/vol2_14_.jpg" },
  { image: "/portfolio-optimized/vol2_15_.jpg" },
  { image: "/portfolio-optimized/vol2_16.jpg" },
  { image: "/portfolio-optimized/vol2_17.jpg" },
  { image: "/portfolio-optimized/vol2_18.jpg" },
  { image: "/portfolio-optimized/vol3_1.jpg" },
  { image: "/portfolio-optimized/vol3_10_.jpg" },
  { image: "/portfolio-optimized/vol3_2.jpg" },
  { image: "/portfolio-optimized/vol3_6.jpg" },
  { image: "/portfolio-optimized/vol3_8.jpg" },
  { image: "/portfolio-optimized/vol3_9.jpg" },
  { image: "/portfolio-optimized/vol1_7.jpg" },
  { image: "/portfolio-optimized/vol1_33.jpg" },
  { image: "/portfolio-optimized/vol1_34.jpg" },
  { image: "/portfolio-optimized/vol1_34_copy.jpg" },
  { image: "/portfolio-optimized/vol1_38.1.jpg" },
  { image: "/portfolio-optimized/vol1_41.jpg" },
  { image: "/portfolio-optimized/vol1_44.jpg" },
  { image: "/portfolio-optimized/vol1_45.jpg" },
  { image: "/portfolio-optimized/vol2_2.jpg" },
  { image: "/portfolio-optimized/vol2_3.jpg" },
  { image: "/portfolio-optimized/vol2_4.jpg" },
  { image: "/portfolio-optimized/vol2_9.jpg" },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Our Work"
          description="Explore our collection of thoughtfully designed spaces spanning residential, commercial, and hospitality projects."
          align="center"
        />
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {allProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
          </motion.div>
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
