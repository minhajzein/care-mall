import React from 'react'

function InfinityCarousel() {
	return (
		<div className='bg-gray-300 py-1 overflow-hidden w-full'>
			<div className='w-auto grid grid-flow-col'>
				<div className='w-screen grid grid-cols-5 gap-2 p-1 animate-infinite-carousel'>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/10.png'
						alt=''
					/>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/11.png'
						alt=''
					/>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/12.png'
						alt=''
					/>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/13.png'
						alt=''
					/>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/14.png'
						alt=''
					/>
				</div>
				<div className='w-screen grid grid-cols-5 gap-2 p-1 animate-infinite-carousel'>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/10.png'
						alt=''
					/>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/11.png'
						alt=''
					/>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/12.png'
						alt=''
					/>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/13.png'
						alt=''
					/>
					<img
						className='rounded object-contain shadow-md shadow-black/50'
						src='/images/14.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}

export default InfinityCarousel
