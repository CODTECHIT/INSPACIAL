import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <img src="/logo.png" alt="Inspacial Logo" className="h-10 w-auto" />
              <h3 className="font-display text-3xl font-semibold uppercase">
                INSPACIAL<span className="text-accent">.</span>
              </h3>
            </div>
            <p className="font-body text-primary-foreground/60 max-w-sm leading-relaxed">
              We craft premium, detail-driven spaces that reflect sophistication, comfort, and a refined lifestyle.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-6 text-accent">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Portfolio", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-6 text-accent">Contact</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-primary-foreground/60">
              <p>inspacialdesigns.info@gmail.com</p>
              <p>+91 77993 26935</p>
              <p>Inspacial Designs Studio<br />Premium Residential & Luxury Spaces</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Inspacial Designs. All rights reserved.
          </p>
          <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/inspacial_designs?igsh=MTZvb284dHNueWs5YQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-xs text-primary-foreground/40 hover:text-accent transition-colors tracking-widest uppercase"
              >
                Instagram
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
