import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [backendStatus, setBackendStatus] = useState<"checking" | "connected" | "offline">("checking");
  const [databaseStatus, setDatabaseStatus] = useState<"unknown" | "connected" | "disconnected">("unknown");

  useEffect(() => {
    let isMounted = true;

    const checkBackend = async () => {
      try {
        const response = await fetch("/api/health");
        if (!response.ok) {
          throw new Error("Health check failed");
        }

        const data: { database?: "connected" | "disconnected" } = await response.json();

        if (isMounted) {
          setBackendStatus("connected");
          setDatabaseStatus(data.database ?? "unknown");
        }
      } catch {
        if (isMounted) {
          setBackendStatus("offline");
          setDatabaseStatus("unknown");
        }
      }
    };

    checkBackend();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed bottom-4 right-4 z-50 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
        API: {backendStatus} | DB: {databaseStatus}
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
