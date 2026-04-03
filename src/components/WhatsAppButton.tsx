import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918179190101";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

const defaultMessages: Record<string, string> = {
  services: "Hi! I'm interested in your Luxury Architectural Planning and Interior Design services. Could you please share more details?",
  "sub-services": "Hi! I'm interested in your specialized design services. Could you please provide more information about the sub-services you offer?",
  portfolio: "Hi! I loved viewing your portfolio. I'd like to discuss a similar project for my space. Can we connect?",
  gallery: "Hi! I viewed your gallery and I'm impressed. I'd like to discuss a project. When can we connect?",
  default: "Hi! I visited your website and I'm interested in discussing a design project. Could we connect on WhatsApp?",
};

const getMessage = (page: string, customMessage?: string) => {
  const message = customMessage || defaultMessages[page] || defaultMessages.default;
  return encodeURIComponent(message);
};

export const WhatsAppButton = ({ message, className = "" }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const page = typeof window !== "undefined" ? window.location.pathname.replace("/", "").replace("-", "") : "";
    const messageParam = getMessage(page, message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${messageParam}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-body text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle size={20} />
      Chat on WhatsApp
    </button>
  );
};

export const WhatsAppCTA = ({ 
  title, 
  subtitle, 
  page, 
  customMessage 
}: { 
  title: string; 
  subtitle?: string; 
  page: string;
  customMessage?: string;
}) => {
  const handleClick = () => {
    const messageParam = getMessage(page, customMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${messageParam}`, "_blank");
  };

  return (
    <section className="bg-primary section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 uppercase tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-primary-foreground/60 mb-8 text-lg leading-relaxed max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-body text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <MessageCircle size={18} />
          Chat on WhatsApp
        </button>
      </div>
    </section>
  );
};

export default WhatsAppButton;
