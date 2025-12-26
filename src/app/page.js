import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurSecrives";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <Navbar transparent={true} />  {/* pass prop */}
      <HeroSection />
      <Navbar transparent={false} /> {/* optional: if sticky, can stay */}
      <OurServices />
      <Team/>
      <FAQ />
     <ContactForm/>
     <Footer/>
    </div>
  );
}
