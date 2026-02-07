import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Transformation />
      <Testimonials />
      <Team />
      <CallToAction />
      <Footer />
    </main>
  );
}
