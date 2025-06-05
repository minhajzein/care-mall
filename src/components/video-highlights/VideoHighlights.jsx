const urls = [
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
]

function VideoHighlights() {
	return (
		<div className='flex gap-2 md:gap-4 flex-col'>
			<div className='flex gap-4 items-center'>
				<div className='md:size-8 size-4 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					Video Highlights
				</h1>
			</div>

			<div className='flex gap-2 md:gap-4 overflow-x-auto py-2'>
				{urls.map((url, index) => (
					<video
						key={index}
						src={url}
						autoPlay
						muted
						controls
						className='rounded-2xl w-[250px] h-[500px] object-cover md:w-[300px] md:h-96'
					></video>
				))}
			</div>
		</div>
	)
}

export default VideoHighlights
