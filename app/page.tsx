import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Services from "@/components/sections/services";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ocean Informatix. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Porto, Portugal</p>
        </div>
      </footer>
    </>
  );
}
