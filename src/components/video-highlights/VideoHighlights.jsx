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
import { FaShopify } from 'react-icons/fa'

function VideoHighlights() {
	return (
		<div className='flex gap-2 md:gap-4 flex-col'>
			<div className='flex gap-4 items-center'>
				<div className='md:size-8 size-4 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					Caremall Highlights
				</h1>
			</div>

			<div className='flex gap-2 px-4 md:gap-4 overflow-x-auto py-2'>
				{urls.map((url, index) => (
					<div className='relative min-w-[250px] h-[500px]'>
						<video
							key={index}
							src={url}
							autoPlay
							muted
							controls
							className='rounded-2xl w-full h-full object-cover md:w-[300px] md:h-96'
						></video>
						<div className='absolute shadow-lg shadow-white items-center bottom-16 w-[80%] left-1/2 rounded-full -translate-x-1/2 bg-primary-black p-2 flex gap-1'>
							<img
								src='/images/popular-6.png'
								className='size-8 object-contain'
								alt=''
							/>
							<div className='flex flex-col w-full'>
								<h1 className='truncate text-white w-[80%] text-[10px]'>
									Single Door Refrigerator 184L
								</h1>
								<h1 className='text-white text-xs font-bold'>₹25,999</h1>
								<del className='text-gray-400 text-[8px]'>₹20,999</del>
							</div>
							<FaShopify className='text-gray-300 absolute bottom-3 right-6' />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default VideoHighlights
