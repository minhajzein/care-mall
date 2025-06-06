import Banner from '@/components/banner/Banner'
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
import PopularProducts from '@/components/products/popular-products/PopularProducts'
import 'react-toastify/dist/ReactToastify.css'
import Testimonials from '@/components/testimonials/Testimonials'
import TopOffers from '@/components/top-offers/TopOffers'
import VideoHighlights from '@/components/video-highlights/VideoHighlights'
import { ToastContainer } from 'react-toastify'
import Timer from '@/components/timer/Timer'

export default function Home() {
	return (
		<div className='flex flex-col justify-center min-h-dv bg-gray-100 text-gray-800'>
			<Banner />
			<Timer />
			<div className='md:hidden'>
				<Categories />
			</div>
			<InfinityCarousel />
			<div className='w-full md:p-8  md:gap-8 flex flex-col'>
				<TopOffers />
				<MiniBanners />
				<FeaturedProducts />
				<FlashSale />
				<NewArrivals />
				<Electrotinics />
				<VideoHighlights />
				<LifeStyleCorner />
				<PopularProducts />
				<Fashion />
				<BeautyCare />
				<MobileAccesories />
				<Testimonials />
			</div>
			<DownloadOptions />
			<div className='flex bg-primary p-4 flex-col items-center gap-1'>
				<h1 className='text-sm font-bold text-white'>
					Get top deals, latest trends and more
				</h1>
				<form className='flex items-center w-full justify-center gap-2'>
					<input
						type='email'
						className='bg-white rounded-xl w-[70%] outline-none p-2'
					/>
					<button className='border border-white text-white p-2 rounded-xl'>
						Subscribe
					</button>
				</form>
			</div>
			<ToastContainer />
		</div>
	)
}
