import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DonationCTA from "@/components/DonationCTA";
import { motion } from "framer-motion";
import { TreePine, Droplets, Building, Sprout, Sun, BookOpen } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import agroImg from "@/assets/project-agroforestry.jpg";
import lakeImg from "@/assets/project-lake.jpg";
import urbanImg from "@/assets/project-urban.jpg";
import waterImg from "@/assets/project-water.jpg";
import energyImg from "@/assets/project-energy.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const programs = [
  { icon: Sprout, title: "Agroforestry", titleHi: "कृषि वानिकी", desc: "Integrating trees with agriculture to enhance biodiversity, improve soil health, and boost farmer incomes across drought-prone regions.", descHi: "जैव विविधता बढ़ाने, मिट्टी के स्वास्थ्य में सुधार और सूखाग्रस्त क्षेत्रों में किसानों की आय बढ़ाने के लिए कृषि के साथ वृक्षों का एकीकरण।", impact: "50,000+ trees on farmland", impactHi: "50,000+ वृक्ष कृषि भूमि पर", img: agroImg },
  { icon: Droplets, title: "Lake Restoration", titleHi: "झील पुनर्स्थापना", desc: "Reviving urban and rural water bodies through desilting, bunding, native plantations, and community-led maintenance programs.", descHi: "गाद निकासी, बांध निर्माण, देशी वृक्षारोपण और समुदाय-नेतृत्व रखरखाव कार्यक्रमों के माध्यम से शहरी और ग्रामीण जल निकायों को पुनर्जीवित करना।", impact: "45+ lakes restored", impactHi: "45+ झीलें पुनर्स्थापित", img: lakeImg },
  { icon: Building, title: "Urban Forestry", titleHi: "शहरी वानिकी", desc: "Creating green corridors, pocket forests, and tree-lined avenues that bring nature back into concrete-heavy city landscapes.", descHi: "हरित गलियारे, पॉकेट वन और वृक्ष-पंक्तिबद्ध मार्ग बनाना जो कंक्रीट-भारी शहरी परिदृश्य में प्रकृति को वापस लाते हैं।", impact: "80+ urban sites greened", impactHi: "80+ शहरी स्थलों पर हरियाली", img: urbanImg },
  { icon: Droplets, title: "Water Conservation", titleHi: "जल संरक्षण", desc: "Constructing check dams, recharge wells, and rainwater harvesting systems to address water scarcity in rural communities.", descHi: "ग्रामीण समुदायों में जल की कमी को दूर करने के लिए चेक डैम, रिचार्ज कुएं और वर्षा जल संचयन प्रणालियों का निर्माण।", impact: "200+ water structures built", impactHi: "200+ जल संरचनाएं निर्मित", img: waterImg },
  { icon: Sun, title: "Clean Energy & Climate Action", titleHi: "स्वच्छ ऊर्जा और जलवायु कार्रवाई", desc: "Promoting solar energy adoption in rural areas and implementing carbon sequestration through strategic afforestation.", descHi: "ग्रामीण क्षेत्रों में सौर ऊर्जा अपनाने को बढ़ावा देना और रणनीतिक वनीकरण के माध्यम से कार्बन अवशोषण लागू करना।", impact: "1,500+ tonnes CO₂ offset", impactHi: "1,500+ टन CO₂ ऑफसेट", img: energyImg },
  { icon: BookOpen, title: "Climate Education", titleHi: "जलवायु शिक्षा", desc: "Running workshops, school programs, and awareness campaigns that educate youth about climate change and sustainable living.", descHi: "कार्यशालाएं, स्कूल कार्यक्रम और जागरूकता अभियान चलाना जो युवाओं को जलवायु परिवर्तन और सतत जीवन के बारे में शिक्षित करते हैं।", impact: "10,000+ students reached", impactHi: "10,000+ छात्रों तक पहुंच", img: agroImg },
];

const OurWork = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <PageHero
          title={t("Our Work", "हमारा कार्य")}
          subtitle={t("From planting forests to restoring lakes — discover how we're building a sustainable future across India.", "जंगल लगाने से लेकर झीलों को पुनर्स्थापित करने तक — जानिए कैसे हम पूरे भारत में एक सतत भविष्य बना रहे हैं।")}
          image={heroBanner}
        />

        {/* Impact Numbers */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "3,50,000+", label: t("Trees Planted", "पेड़ लगाए"), icon: Sprout },
                { val: "45+", label: t("Lakes Restored", "झीलें पुनर्स्थापित"), icon: Droplets },
                { val: "120+", label: t("Project Sites", "परियोजना स्थल"), icon: Building },
                { val: "7", label: t("Program Areas", "कार्यक्रम क्षेत्र"), icon: BookOpen },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center">
                  <s.icon className="w-8 h-8 text-primary mb-2" />
                  <p className="font-serif text-3xl text-primary">{s.val}</p>
                  <p className="text-muted-foreground text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{t("Our Programs", "हमारे कार्यक्रम")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t("Environmental Initiatives", "पर्यावरणीय पहल")}</h2>
            </motion.div>
            <div className="space-y-8">
              {programs.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-2/5 overflow-hidden">
                      <img src={p.img} alt={t(p.title, p.titleHi)} className="w-full h-60 md:h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <p.icon className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium">{t(p.title, p.titleHi)}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{t(p.title, p.titleHi)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{t(p.desc, p.descHi)}</p>
                      <div>
                        <p className="text-2xl font-bold text-primary">{t(p.impact, p.impactHi)}</p>
                        <p className="text-xs text-muted-foreground">{t("Impact", "प्रभाव")}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <DonationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default OurWork;
