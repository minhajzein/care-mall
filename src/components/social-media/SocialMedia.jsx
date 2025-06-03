import React from 'react'

function SocialMedia() {
	return (
		<div className='flex items-center flex-col gap-2'>
			<p>Get in touch with us</p>
			<div className='grid grid-cols-4 gap-2'>
				<img
					className='rounded-lg shadow-md shadow-black/50 size-8'
					src='/images/facebook.png'
					alt=''
				/>
				<img
					className='rounded-lg shadow-md bg-white shadow-black/50 size-8'
					src='/images/youtube.webp'
					alt=''
				/>
				<img
					className='rounded-lg shadow-md shadow-black/50 size-8'
					src='/images/instagram.webp'
					alt=''
				/>
				<img
					className='rounded-lg shadow-md shadow-black/50 size-8'
					src='/images/x.png'
					alt=''
				/>
			</div>
		</div>
	)
}

export default SocialMedia
