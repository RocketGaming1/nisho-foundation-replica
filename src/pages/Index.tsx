import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import MakeDifference from "@/components/MakeDifference";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Vacancies from "@/components/Vacancies";
import TipEditors from "@/components/TipEditors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LatestNews />
      <MakeDifference />
      <Projects />
      <Vacancies />
      <TipEditors />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
