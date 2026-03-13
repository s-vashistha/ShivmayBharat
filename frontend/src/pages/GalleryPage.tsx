import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectLake from "@/assets/project-lake.jpg";
import projectAgroforestry from "@/assets/project-agroforestry.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectEnergy from "@/assets/project-energy.jpg";
import missionImage from "@/assets/mission-image.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import corporateHero from "@/assets/corporate-hero.jpg";
import donateHero from "@/assets/donate-hero.jpg";
import founderImg from "@/assets/founder.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const galleryCategories = [
  { en: "All", hi: "सभी" },
  { en: "Plantations", hi: "वृक्षारोपण" },
  { en: "Lake Restoration", hi: "झील पुनर्स्थापना" },
  { en: "Community", hi: "समुदाय" },
];

const images = [
  { src: projectUrban, alt: "Urban forestry plantation drive", altHi: "शहरी वनीकरण वृक्षारोपण अभियान", category: "Plantations" },
  { src: projectLake, alt: "Lake restoration project", altHi: "झील पुनर्स्थापना परियोजना", category: "Lake Restoration" },
  { src: projectAgroforestry, alt: "Agroforestry project with farmers", altHi: "किसानों के साथ कृषि वानिकी परियोजना", category: "Community" },
  { src: projectWater, alt: "Water conservation initiative", altHi: "जल संरक्षण पहल", category: "Lake Restoration" },
  { src: projectEnergy, alt: "Clean energy awareness program", altHi: "स्वच्छ ऊर्जा जागरूकता कार्यक्रम", category: "Events" },
  { src: missionImage, alt: "Community volunteering event", altHi: "सामुदायिक स्वयंसेवा कार्यक्रम", category: "Community" },
  { src: aboutHero, alt: "Team at annual planning meet", altHi: "वार्षिक योजना बैठक में टीम", category: "Events" },
  { src: corporateHero, alt: "Corporate partnership plantation drive", altHi: "कॉर्पोरेट साझेदारी वृक्षारोपण अभियान", category: "Corporate" },
  { src: donateHero, alt: "Impact of donations — nursery growth", altHi: "दान का प्रभाव — नर्सरी विकास", category: "Plantations" },
  { src: founderImg, alt: "Founder addressing volunteers", altHi: "संस्थापक स्वयंसेवकों को संबोधित करते हुए", category: "Events" },
  { src: projectUrban, alt: "Sapling distribution drive", altHi: "पौधा वितरण अभियान", category: "Plantations" },
  { src: projectLake, alt: "Lake cleanup with citizen volunteers", altHi: "नागरिक स्वयंसेवकों के साथ झील सफाई", category: "Lake Restoration" },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "Our Journey So Far", titleHi: "अब तक की हमारी यात्रा", description: "Watch how we've been transforming landscapes across India.", descHi: "देखें कैसे हम पूरे भारत में परिदृश्य बदल रहे हैं।" },
  { id: "ScMzIvxBSi4", title: "Mega Plantation Drive 2025", titleHi: "मेगा वृक्षारोपण अभियान 2025", description: "Highlights from our annual mega plantation event with 5,000 volunteers.", descHi: "5,000 स्वयंसेवकों के साथ हमारे वार्षिक मेगा वृक्षारोपण कार्यक्रम की झलकियां।" },
  { id: "LXb3EKWsInQ", title: "Lake Restoration Success Story", titleHi: "झील पुनर्स्थापना सफलता की कहानी", description: "See how we revived a dying urban lake back to its full ecological glory.", descHi: "देखें कैसे हमने एक मरती शहरी झील को पूर्ण पारिस्थितिक गौरव में पुनर्जीवित किया।" },
  { id: "dQw4w9WgXcQ", title: "Corporate Volunteering Day", titleHi: "कॉर्पोरेट स्वयंसेवा दिवस", description: "How corporates are partnering with us for impactful team events.", descHi: "कैसे कॉर्पोरेट प्रभावशाली टीम कार्यक्रमों के लिए हमारे साथ साझेदारी कर रहे हैं।" },
  { id: "ScMzIvxBSi4", title: "Agroforestry With Farmers", titleHi: "किसानों के साथ कृषि वानिकी", description: "Integrating trees with agriculture to boost farmer incomes sustainably.", descHi: "किसानों की आय को टिकाऊ रूप से बढ़ाने के लिए कृषि के साथ वृक्षों का एकीकरण।" },
  { id: "LXb3EKWsInQ", title: "World Environment Day 2025", titleHi: "विश्व पर्यावरण दिवस 2025", description: "Highlights from our city-wide celebration across multiple locations.", descHi: "कई स्थानों पर हमारे शहरव्यापी उत्सव की झलकियां।" },
];

const GalleryPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const { t } = useLanguage();

  const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero title={t("Gallery", "गैलरी")} subtitle={t("Explore our impact through photos and videos from the field.", "क्षेत्र से फोटो और वीडियो के माध्यम से हमारे प्रभाव का अन्वेषण करें।")} image={heroBanner} />

        {/* Photo Gallery */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Impact in Pictures", "तस्वीरों में हमारा प्रभाव")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t("Photo Gallery", "फोटो गैलरी")}</h2>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {galleryCategories.map((cat) => (
                <button key={cat.en} onClick={() => setFilter(cat.en)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat.en ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}>{t(cat.en, cat.hi)}</button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {filteredImages.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="overflow-hidden rounded-lg cursor-pointer group aspect-[4/3] relative" onClick={() => setSelected(i)}>
                  <img src={img.src} alt={t(img.alt, img.altHi)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                    <p className="text-primary-foreground text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity">{t(img.alt, img.altHi)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Watch & Learn", "देखें और सीखें")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t("Videos & Documentaries", "वीडियो और वृत्तचित्र")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-lg overflow-hidden border border-border bg-background">
                  <div className="relative aspect-video bg-muted cursor-pointer group" onClick={() => setPlayingVideo(playingVideo === i ? null : i)}>
                    {playingVideo === i ? (
                      <iframe src={`https://www.youtube.com/embed/${v.id}?autoplay=1`} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={t(v.title, v.titleHi)} />
                    ) : (
                      <>
                        <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={t(v.title, v.titleHi)} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 group-hover:bg-foreground/40 transition-colors">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-base text-foreground mb-1">{t(v.title, v.titleHi)}</h3>
                    <p className="text-muted-foreground text-sm">{t(v.description, v.descHi)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selected !== null && (
          <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)} aria-label={t("Close", "बंद करें")}><X className="w-8 h-8" /></button>
            <img src={filteredImages[selected].src} alt={t(filteredImages[selected].alt, filteredImages[selected].altHi)} className="max-w-full max-h-[85vh] rounded-lg object-contain" />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
