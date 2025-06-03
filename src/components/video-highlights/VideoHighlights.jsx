import React from 'react'

function VideoHighlights() {
	return (
		<div className='flex gap-2 md:gap-4 flex-col'>
			<div className='flex gap-4 items-center'>
				<div className='size-8 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					Video Highlights
				</h1>
			</div>

			<div className='flex gap-2 md:gap-4 overflow-x-auto py-2'>
				<video
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					autoPlay
					muted
					controls
					className='rounded-2xl w-[200px] h-72 object-cover md:w-[300px] md:h-96'
				></video>
				<video
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
					autoPlay
					muted
					controls
					className='rounded-2xl w-[200px] h-72 object-cover md:w-[300px] md:h-96'
				></video>
				<video
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
					autoPlay
					muted
					controls
					className='rounded-2xl w-[200px] h-72 object-cover md:w-[300px] md:h-96'
				></video>
				<video
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
					autoPlay
					muted
					controls
					className='rounded-2xl w-[200px] h-72 object-cover md:w-[300px] md:h-96'
				></video>
				<video
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
					autoPlay
					muted
					controls
					className='rounded-2xl w-[200px] h-72 object-cover md:w-[300px] md:h-96'
				></video>
				<video
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
					autoPlay
					muted
					controls
					className='rounded-2xl w-[200px] h-72 object-cover md:w-[300px] md:h-96'
				></video>
			</div>
		</div>
	)
}

export default VideoHighlights
