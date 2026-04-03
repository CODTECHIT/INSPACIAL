import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FloatingWhatsApp } from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
