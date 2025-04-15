import React from 'react'

function DownloadOptions() {
	return (
		<div className='p-4 bg-primary w-full flex flex-col gap-1'>
			<p className='text-xs text-center text-white'>
				Shoping at your fingertips!{' '}
				<span className='font-bold'>Download the app</span>
			</p>
			<div className='flex justify-evenly w-full items-center'>
				<img className='h-10 object-contain' src='/images/30.png' alt='' />
				<img className='h-12 object-contain' src='/images/31.png' alt='' />
			</div>
		</div>
	)
}

export default DownloadOptions
