import React from 'react'

function TopBrands() {
	return (
		<div className='flex w-full flex-col gap-4'>
			<h1 className='text-2xl font-bold text-gray-800'>
				Top <span className='text-primary'>Electronics Brands</span>
			</h1>
			<div className='h-1 w-full border-b border-gray-300'>
				<div className='w-[20%] h-1 bg-primary rounded-full'></div>
			</div>
			<div className='grid grid-cols-3 gap-6'>
				<img className='rounded-lg' src='/images/brand-1.png' alt='' />
				<img className='rounded-lg' src='/images/brand-2.png' alt='' />
				<img className='rounded-lg' src='/images/brand-3.png' alt='' />
			</div>
		</div>
	)
}

export default TopBrands
