import { Carousel, Rate } from 'antd'
import { CgMenuMotion } from 'react-icons/cg'
import { FaLocationDot } from 'react-icons/fa6'
import { SlHeart } from 'react-icons/sl'
import { PiShareNetworkFill } from 'react-icons/pi'

function ProductDetails() {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex p-4 items-center bg-primary/30 text-xl gap-2'>
				<FaLocationDot className='text-2xl' />
				<div className='flex flex-col'>
					<h1 className='font-bold'>Mumbai 400020</h1>
					<div className='flex items-center'>
						<CgMenuMotion className='text-green-500' />
						<p className='font-bold'>Quick Delivery in 10 to 30 mins</p>
					</div>
				</div>
			</div>
			<div className='px-4'>
				<h1 className='text-primary font-bold'>Home One</h1>
				<p>Home one Foil Print Plastic Soap Dispenser</p>
				<div className='flex justify-between items-center mt-1'>
					<div className='flex items-center gap-2'>
						<Rate allowHalf defaultValue={2.5} />
						<p className='text-primary font-extrabold'>20</p>
					</div>
					<div className='flex items-center gap-1'>
						<SlHeart className='text-2xl text-gray-600' />
						<PiShareNetworkFill className='text-2xl text-gray-600' />
					</div>
				</div>
				<img
					src='/images/electro-general.jpg'
					className='w-[25%] mt-6'
					alt=''
				/>
				<Carousel
					autoplay={{ dotDuration: true }}
					className='mt-2'
					autoplaySpeed={5000}
					arrows
				>
					<img
						src='/images/product-2.png'
						className='w-full h-[400px] rounded-2xl'
						alt=''
					/>
					<img
						src='/images/product-3.png'
						className='w-full h-[400px] rounded-2xl'
						alt=''
					/>
					<img
						src='/images/product-5.png'
						className='w-full h-[400px] rounded-2xl'
						alt=''
					/>
				</Carousel>
				<h1 className='mt-2 text-3xl'>Zaca Organic Hair Product 250ml</h1>
				<div className='flex items-center gap-2 mt-2'>
					<h1 className='mt-2 text-4xl font-bold'>₹540.00</h1>
					<div className='bg-gray-300 rounded-xl p-2 text-green-500 text-2xl font-bold'>
						45% OFF
					</div>
				</div>
				<p className='text-gray-500 mt-2 text-2xl'>
					<del className='font-bold text-3xl'>1200.00</del> (Incl.of all texes)
				</p>
				<hr className='mt-4' />
				<div className='my-4 flex flex-col'>
					<h1 className='text-3xl font-bold'>Offers(8)</h1>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
