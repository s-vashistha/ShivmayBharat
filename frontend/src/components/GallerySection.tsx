import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageLightbox from "@/components/ImageLightbox";
import projectUrban from "@/assets/project-urban.jpg";
import projectLake from "@/assets/project-lake.jpg";
import projectAgroforestry from "@/assets/project-agroforestry.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectEnergy from "@/assets/project-energy.jpg";
import missionImage from "@/assets/mission-image.jpg";

const images = [
  { src: projectUrban, alt: "Urban forestry plantation drive", altHi: "शहरी वनीकरण वृक्षारोपण अभियान" },
  { src: projectLake, alt: "Lake restoration work", altHi: "झील पुनर्स्थापना कार्य" },
  { src: projectAgroforestry, alt: "Agroforestry project with farmers", altHi: "किसानों के साथ कृषि वानिकी परियोजना" },
  { src: projectWater, alt: "Water conservation initiative", altHi: "जल संरक्षण पहल" },
  { src: projectEnergy, alt: "Clean energy awareness program", altHi: "स्वच्छ ऊर्जा जागरूकता कार्यक्रम" },
  { src: missionImage, alt: "Community volunteering event", altHi: "सामुदायिक स्वयंसेवा कार्यक्रम" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useLanguage();

  const lightboxImages = images.map((img) => ({
    src: img.src,
    alt: t(img.alt, img.altHi),
  }));

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Impact in Pictures", "तस्वीरों में हमारा प्रभाव")}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t("Photo Gallery", "फोटो गैलरी")}</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="overflow-hidden rounded-lg cursor-pointer group aspect-[4/3] relative"
              onClick={() => setSelected(i)}
            >
              <img src={img.src} alt={t(img.alt, img.altHi)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                <p className="text-primary-foreground text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity">{t(img.alt, img.altHi)}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <Link to="/gallery">{t("View More", "और देखें")}</Link>
          </Button>
        </div>
      </div>

      <ImageLightbox
        images={lightboxImages}
        selectedIndex={selected}
        onClose={() => setSelected(null)}
        onNavigate={(index) => setSelected(index)}
      />
    </section>
  );
};

export default GallerySection;
