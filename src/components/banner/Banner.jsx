import { Carousel } from 'antd'

function Banner() {
	return (
		<Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
			<div className='w-full h-[160px] p-4 flex relative'>
				<div className='w-[50%] p-2 flex gap-2 flex-col bg-black/20'>
					<h1 className='text-primary text font-bold'>
						Seasons change, your style evolves
					</h1>
					<img src='/svgs/shop-now.svg' alt='' />
				</div>
				<img
					className='w-full h-full object-cover -z-10 object-center absolute top-0 left-0'
					src='/images/banner.webp'
					alt=''
				/>
			</div>
			<div className='w-full h-[160px] flex relative'>
				<img
					className='w-full h-full object-cover z-10 object-center absolute top-0 left-0'
					src='/images/01.jpg'
					alt=''
				/>
			</div>
		</Carousel>
	)
}

export default Banner
