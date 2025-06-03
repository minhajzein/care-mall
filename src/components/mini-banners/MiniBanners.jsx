import { Carousel } from 'antd'
import React from 'react'

function MiniBanners() {
	return (
		<div className='w-full'>
			<div className='md:grid grid-cols-2 gap-4 hidden w-full'>
				<img
					src='/images/mini-banner-1.png'
					className='w-full h-full rounded-2xl overflow-hidden'
					alt=''
				/>
				<img
					src='/images/mini-banner-2.png'
					className='w-full h-full rounded-2xl overflow-hidden'
					alt=''
				/>
			</div>
			<div className='w-full md:hidden'>
				<Carousel
					autoplay={{ dotDuration: true }}
					className=' w-full md:h-[316px] relative'
					autoplaySpeed={3000}
					arrows
				>
					<div className='w-full md:h-[316px] h-[100px] flex relative'>
						<img
							src='/images/mini-banner-1.png'
							className='w-full h-full rounded-2xl object-cover overflow-hidden'
							alt=''
						/>
					</div>
					<div className='w-full md:h-[316px] h-[100px] flex relative'>
						<img
							src='/images/mini-banner-2.png'
							className='w-full h-full rounded-2xl object-cover overflow-hidden'
							alt=''
						/>
					</div>
				</Carousel>
			</div>
		</div>
	)
}

export default MiniBanners
