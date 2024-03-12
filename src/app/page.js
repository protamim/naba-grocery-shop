import BannerHome from '@/components/ui/BannerHome';
import FeaturedSection from '@/components/ui/FeaturedSection';
import MarqueeSlider from '@/components/ui/MarqueSlider';
import ProductsAdsSection from '@/components/ui/ProductsAdsSection';


const HomePage = () => {
  return (
    <main className=''>
      <BannerHome />
      <ProductsAdsSection />
      <MarqueeSlider />
      <FeaturedSection />
    </main>
  );
};

export default HomePage;
