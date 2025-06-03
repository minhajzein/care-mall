function TopOffers() {
	return (
		<div className='flex flex-col gap-2 md:gap-4'>
			<div className='flex gap-4 items-center'>
				<div className='md:size-8 size-4 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					Top Offers
				</h1>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'>
				<div className='flex flex-col bg-gray-400 rounded-lg overflow-hidden'>
					<div className='flex justify-between items-start p-2 md:p-4 bg-primary rounded-lg'>
						<h1 className='text-lg md:text-2xl uppercase leading-5 md:leading-8 text-white font-bold'>
							deal of <br />
							the week
						</h1>
						<img src='/svgs/care-logo.svg' className='md:size-10' alt='' />
					</div>
					<p className='text-xs p-1'>view all offers</p>
				</div>
				<div className='flex flex-col bg-gray-400 rounded-lg overflow-hidden'>
					<div className='flex justify-between items-start p-2 md:p-4 bg-primary rounded-lg'>
						<h1 className='text-lg md:text-2xl uppercase leading-5 md:leading-8 text-white font-bold'>
							limited <br />
							offer
						</h1>
						<img src='/svgs/care-logo.svg' className='md:size-10' alt='' />
					</div>
					<p className='text-xs p-1'>view all offers</p>
				</div>
				<div className='flex flex-col bg-gray-400 rounded-lg overflow-hidden'>
					<div className='flex justify-between items-start p-2 md:p-4 bg-primary rounded-lg'>
						<h1 className='text-lg md:text-2xl uppercase leading-5 md:leading-8 text-white font-bold'>
							combo <br />
							offer
						</h1>
						<img src='/svgs/care-logo.svg' className='md:size-10' alt='' />
					</div>
					<p className='text-xs p-1'>view all offers</p>
				</div>
				<div className='flex flex-col bg-gray-400 rounded-lg overflow-hidden'>
					<div className='flex justify-between items-start p-2 md:p-4 bg-primary rounded-lg'>
						<h1 className='text-lg md:text-2xl uppercase leading-5 md:leading-8 text-white font-bold'>
							daily <br />
							deals
						</h1>
						<img src='/svgs/care-logo.svg' className='md:size-10' alt='' />
					</div>
					<p className='text-xs p-1'>view all offers</p>
				</div>
			</div>
		</div>
	)
}

export default TopOffers
