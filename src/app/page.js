import BannerHome from '@/components/ui/BannerHome';
import CategorySection from '@/components/ui/CategorySection';
import FeaturedSection from '@/components/ui/FeaturedSection';
import MarqueeSlider from '@/components/ui/MarqueSlider';
import ProductsAdsSection from '@/components/ui/ProductsAdsSection';
import TopRatedSection from '@/components/ui/TopRatedSection';
import TrendingSection from '@/components/ui/TrendingSection';


const HomePage = () => {
  return (
    <main className=''>
      <BannerHome />
      <ProductsAdsSection />
      <MarqueeSlider />
      <FeaturedSection />
      <CategorySection />
      <TrendingSection />
      <TopRatedSection />
    </main>
  );
};

export default HomePage;
