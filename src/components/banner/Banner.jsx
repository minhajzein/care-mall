import { Carousel } from 'antd'

function Banner() {
	return (
		<Carousel
			autoplay={{ dotDuration: true }}
			className=' w-full md:h-[316px] relative overflow-hidden'
			autoplaySpeed={5000}
			arrows
		>
			<div className='w-full md:h-[316px] h-[225px] p-4 flex relative'>
				<img
					className='w-full h-full object-cover -z-10 object-left absolute top-0 left-0'
					src='/images/mini-banner-2.png'
					alt=''
				/>
			</div>
			<div className='w-full md:h-[316px] h-[225px] flex relative'>
				<img
					className='w-full h-full object-cover z-10 object-left absolute top-0 left-0'
					src='/images/mini-banner.jpg'
					alt=''
				/>
			</div>
		</Carousel>
	)
}

export default Banner
