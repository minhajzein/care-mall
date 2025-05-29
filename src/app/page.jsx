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
import LifeStyleCorner from '@/components/products/LifeStyleCorner'
import MobileAccesories from '@/components/products/MobileAccesories'
import SubCategories from '@/components/products/SubCategories'
import SocialMedia from '@/components/social-media/SocialMedia'
import TopBrands from '@/components/top-brands/TopBrands'
import TopOffers from '@/components/top-offers/TopOffers'

export default function Home() {
	return (
		<div className='flex flex-col justify-center min-h-dv lg:px-[120px] pt-[30px] gap-[30px] bg-gray-100 text-gray-800'>
			<Banner />
			<Categories />
			<MiniBanners />
			<img
				src='/images/banner-third.jpg'
				className='w-full object-contain'
				alt=''
			/>
			<TopBrands />
			<FeaturedProducts />
			<img
				className='w-full object-contain'
				src='/images/small-banner.png'
				alt=''
			/>
			<InfinityCarousel />
			<TopOffers />
			<Electrotinics />
			<SubCategories />
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
