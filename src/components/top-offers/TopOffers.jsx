function TopOffers() {
	return (
		<div className='p-4 flex flex-col gap-1'>
			<h1 className='font-bold text-primary leading-3 text-sm'>Top Offers</h1>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
				<div className='flex flex-col bg-gray-400 rounded-lg overflow-hidden'>
					<div className='flex justify-between items-start p-2 bg-primary rounded-lg'>
						<h1 className='text-lg uppercase leading-5 text-white font-bold'>
							deal of <br />
							the week
						</h1>
						<img src='/svgs/care-logo.svg' alt='' />
					</div>
					<p className='text-xs p-1'>view all offers</p>
				</div>
				<div className='flex flex-col bg-gray-400 rounded-lg overflow-hidden'>
					<div className='flex justify-between items-start p-2 bg-primary rounded-lg'>
						<h1 className='text-lg uppercase leading-5 text-white font-bold'>
							limited <br />
							offer
						</h1>
						<img src='/svgs/care-logo.svg' alt='' />
					</div>
					<p className='text-xs p-1'>view all offers</p>
				</div>
				<div className='flex flex-col bg-gray-400 rounded-lg overflow-hidden'>
					<div className='flex justify-between items-start p-2 bg-primary rounded-lg'>
						<h1 className='text-lg uppercase leading-5 text-white font-bold'>
							combo <br />
							offer
						</h1>
						<img src='/svgs/care-logo.svg' alt='' />
					</div>
					<p className='text-xs p-1'>view all offers</p>
				</div>
				<div className='flex flex-col bg-gray-400 rounded-lg overflow-hidden'>
					<div className='flex justify-between items-start p-2 bg-primary rounded-lg'>
						<h1 className='text-lg uppercase leading-5 text-white font-bold'>
							daily <br />
							deals
						</h1>
						<img src='/svgs/care-logo.svg' alt='' />
					</div>
					<p className='text-xs p-1'>view all offers</p>
				</div>
			</div>
		</div>
	)
}

export default TopOffers
