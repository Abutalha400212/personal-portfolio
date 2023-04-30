import About from "@/components/FrontPage/About";
import Contact from "@/components/FrontPage/Contact";
import Experience from "@/components/FrontPage/Experience";
import Feedback from "@/components/FrontPage/Feedback";
import Hero from "@/components/FrontPage/Hero";
import Technology from "@/components/FrontPage/Technology";
import Works from "@/components/FrontPage/Works";
import Footer from "@/components/FrontPage/shared/Footer";
import Navbar from "@/components/FrontPage/shared/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-[90%] mx-auto">
        <Hero />
        <About />
        <Technology />
        <Experience />
        <Works />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
