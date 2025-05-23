import Banner from '@/components/banner/Banner'
import SliderSecond from '@/components/banner/SliderSecond'
import Categories from '@/components/categories/Categories'
import DownloadOptions from '@/components/downloads/DownloadOptions'
import InfinityCarousel from '@/components/infinity-carousel/InfinityCarousel'
import BeautyCare from '@/components/products/BeautyCare'
import Electrotinics from '@/components/products/electronics/Electrotinics'
import Fashion from '@/components/products/Fashion'
import LifeStyleCorner from '@/components/products/LifeStyleCorner'
import MobileAccesories from '@/components/products/MobileAccesories'
import SubCategories from '@/components/products/SubCategories'
import SocialMedia from '@/components/social-media/SocialMedia'
import Timer from '@/components/timer/Timer'
import TopOffers from '@/components/top-offers/TopOffers'

export default function Home() {
	return (
		<div className='flex flex-col justify-center min-h-dv bg-gray-100 text-gray-800'>
			<Banner />
			<Timer />
			<Categories />
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
