import BannerHome from "@/components/ui/BannerHome";
import CategorySection from "@/components/ui/CategorySection";
import FeaturedSection from "@/components/ui/FeaturedSection";
import MarqueeSlider from "@/components/ui/MarqueSlider";
import ProductsAdsSection from "@/components/ui/ProductsAdsSection";
import TopRatedSection from "@/components/ui/TopRatedSection";
import TrendingSection from "@/components/ui/TrendingSection";
import BlogSection from "@/components/ui/BlogSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import FloatCart from "@/components/ui/FloatCart";

const HomePage = () => {
  return (
    <main className="">
      <BannerHome />
      <ProductsAdsSection />
      <MarqueeSlider />
      <FeaturedSection />
      <CategorySection />
      <TrendingSection />
      <TopRatedSection />
      <BlogSection />
      <FeaturesSection />
      <FloatCart />
    </main>
  );
};

export default HomePage;
