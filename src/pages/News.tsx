import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LatestNews from "@/components/LatestNews";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <LatestNews />
      </div>
      <Footer />
    </div>
  );
};

export default News;
