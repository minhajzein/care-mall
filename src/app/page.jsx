import Banner from '@/components/banner/Banner'
import SliderSecond from '@/components/banner/SliderSecond'
import Categories from '@/components/categories/Categories'
import DownloadOptions from '@/components/downloads/DownloadOptions'
import InfinityCarousel from '@/components/infinity-carousel/InfinityCarousel'
import MiniBanners from '@/components/mini-banners/MiniBanners'
import BeautyCare from '@/components/products/BeautyCare'
import Electrotinics from '@/components/products/electronics/Electrotinics'
import Fashion from '@/components/products/Fashion'
import FeaturedProducts from '@/components/products/featured-products/FeaturedProducts'
import FlashSale from '@/components/products/flash-sale/FlashSale'
import LifeStyleCorner from '@/components/products/LifeStyleCorner'
import MobileAccesories from '@/components/products/MobileAccesories'
import NewArrivals from '@/components/products/new-arrivals/NewArrivals'
import SubCategories from '@/components/products/SubCategories'
import SocialMedia from '@/components/social-media/SocialMedia'
import TopBrands from '@/components/top-brands/TopBrands'
import TopOffers from '@/components/top-offers/TopOffers'

export default function Home() {
	return (
		<div className='flex flex-col justify-center min-h-dv bg-gray-100 text-gray-800'>
			<Banner />
			<div className='md:hidden'>
				<Categories />
			</div>
			<InfinityCarousel />
			<div className='w-full md:p-8 p-2 gap-4 md:gap-8 flex flex-col'>
				<TopOffers />
				<MiniBanners />
				<FeaturedProducts />
				<FlashSale />
				<NewArrivals />
				<Electrotinics />
			</div>

			<LifeStyleCorner />
			<SliderSecond />
			<Fashion />
			<BeautyCare />
			<MobileAccesories />
			<DownloadOptions />
			<SocialMedia />
		</div>
	)
}
