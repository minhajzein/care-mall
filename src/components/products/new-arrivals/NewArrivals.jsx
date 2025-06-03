import React from 'react'

function NewArrivals() {
	return (
		<div className='flex flex-col gap-2 md:gap-4'>
			<div className='flex gap-4 items-center'>
				<div className='md:size-8 size-4 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					New Arrivals
				</h1>
			</div>
			<div className='md:grid flex h-64 md:h-auto gap-2 md:gap-4 overflow-x-auto md:grid-cols-5'>
				<img
					src='/images/new-arrivals.png'
					className='rounded-2xl  md:w-full'
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
