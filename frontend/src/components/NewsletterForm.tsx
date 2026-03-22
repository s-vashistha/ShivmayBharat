import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { fetchToGAS } from "@/lib/gas";

interface NewsletterFormProps {
  className?: string;
  containerClassName?: string;
}

const NewsletterForm = ({ className = "", containerClassName = "" }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setEmailError(t("Email is required", "ईमेल आवश्यक है"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(t("Invalid email address", "अमान्य ईमेल पता"));
      return;
    }
    setEmailError("");
    setLoading(true);
    try {
      await fetchToGAS({ formType: 'newsletter', email });
      toast({ title: t("Subscribed!", "सदस्यता ली!"), description: t("You'll receive our newsletter soon.", "आपको जल्द ही हमारा न्यूज़लेटर मिलेगा।") });
    } catch (error) {
      toast({ title: t("Subscription failed", "सदस्यता विफल"), description: t("Please try again.", "कृपया फिर से प्रयास करें।"), variant: "destructive" });
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <div className={`flex gap-2 ${containerClassName}`}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => { setEmail(e.target.value); setEmailError(""); }} 
        placeholder={t("Your email", "आपका ईमेल")} 
        disabled={loading}
        className={`bg-primary-foreground/10 border text-primary-foreground placeholder:text-primary-foreground/30 text-sm rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-primary ${emailError ? "border-destructive" : "border-primary-foreground/10"}`} 
      />
      <Button size="sm" className="shrink-0" onClick={handleSubscribe} disabled={loading}>
        {loading ? "..." : <Send className="w-4 h-4" />}
      </Button>
      {emailError && <p className="text-destructive text-xs mt-1">{emailError}</p>}
    </div>
  );
};

export default NewsletterForm;

