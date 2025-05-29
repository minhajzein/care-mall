import React from 'react'

function MiniBanners() {
	return (
		<div className='flex gap-6 w-full'>
			<img src='/images/mini-banner.jpg' className='w-[70%] h-[500px]' alt='' />
			<div className='flex flex-col h-full gap-6'>
				<img src='/images/sub-mini-banner-1.jpg' alt='' />
				<img src='/images/sub-mini-banner-2.png' alt='' />
			</div>
		</div>
	)
}

export default MiniBanners
