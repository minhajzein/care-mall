import { Carousel } from 'antd'

function Banner() {
	return (
		<Carousel
			autoplay={{ dotDuration: true }}
			className=' w-full md:h-[316px] relative overflow-hidden'
			autoplaySpeed={5000}
			arrows
		>
			<div className='w-full md:h-[316px] h-[200px] p-4 flex relative'>
				<img
					className='w-full h-full object-cover -z-10 object-center absolute top-0 left-0'
					src='/images/banner-2.png'
					alt=''
				/>
			</div>
			<div className='w-full md:h-[316px] h-[200px] flex relative'>
				<img
					className='w-full h-full object-cover z-10 object-center absolute top-0 left-0'
					src='/images/banner-1.png'
					alt=''
				/>
			</div>
		</Carousel>
	)
}

export default Banner
