import React from 'react'

function NewArrivals() {
	return (
		<div className='flex flex-col gap-2 bg-amber-300/30 pt-4 md:gap-4'>
			<div className='flex gap-4 items-center'>
				<div className='md:size-8 size-4 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					New Arrivals
				</h1>
			</div>
			<div className='md:grid px-4 pb-4 flex h-[200px] md:h-auto gap-2 md:gap-4 overflow-x-auto md:grid-cols-5'>
				<img
					src='/images/new-arrivals.jpg'
					className='rounded-2xl shadow-2xl object-contain  md:w-full'
					alt=''
				/>
				<img src='/images/17.png' alt='' />
				<img src='/images/18.png' alt='' />
				<img src='/images/17.png' alt='' />
				<img src='/images/18.png' alt='' />
			</div>
		</div>
	)
}

export default NewArrivals
