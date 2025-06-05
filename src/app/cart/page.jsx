import { SiCheckmarx } from 'react-icons/si'
import { FaPlus } from 'react-icons/fa'

const products = [
	{
		imageSource: '/images/popular-3.png',
		title: 'Velora Wooden Modular Kitchen Shelf',
		price: '₹9,299',
		discountPrice: '₹7,499',
	},
	{
		imageSource: '/images/popular-4.png',
		title: 'UrbanHome Foldable Kitchen Table Set',
		price: '₹12,799',
		discountPrice: '₹10,499',
	},
	{
		imageSource: '/images/popular-5.png',
		title: 'CookSmart Wall Mounted Spice Rack',
		price: '₹3,199',
		discountPrice: '₹2,299',
	},
]

function Cart() {
	return (
		<div className='py-4 flex flex-col gap-4'>
			<div className='flex flex-col gap-4  px-4 bg-white sticky top-[145px] z-50'>
				<div className='flex flex-col'>
					<h1 className='text-xl'>
						Subtotal (3 items): ₹<span className='font-bold'>1080.00</span>
					</h1>
					<div className='flex items-center gap-1'>
						<h1>EMI available</h1>
						<img
							className='size-3 object-contain'
							src='/svgs/down-arrow-black.svg'
							alt=''
						/>
					</div>
				</div>
				<div className='flex w-full justify-between items-center gap-2'>
					<div className='w-full bg-green-500 h-4 rounded-full'></div>
					<h1 className='font-bold'>₹1080.00</h1>
				</div>
				<div className='flex gap-2'>
					<SiCheckmarx className='text-3xl text-green-500' />
					<div className='flex flex-col'>
						<h1 className='text-green-500 font-bold text-lg'>
							Your Order is Eligible for Free Delivery
						</h1>
						<h1 className='text-lg text-gray-500'>
							Choose free delivery option at checkout
						</h1>
					</div>
				</div>
				<button className='bg-primary p-3 w-full text-white text-lg font-bold rounded-full cursor-pointer'>
					Proceed To Buy
				</button>
				<hr />
			</div>
			<div className='flex flex-col gap-2 px-4'>
				<div className='flex gap-2 items-center'>
					<input type='checkbox' className='size-4 outline p-1 rounded' />
					<h1>Select All Items</h1>
				</div>
				<div className='flex flex-col gap-6'>
					{products.map((product, i) => (
						<div key={i} className='flex flex-col gap-2'>
							<div className='grid grid-cols-2 gap-3'>
								<div className='relative w-full'>
									<img
										src={product.imageSource}
										className='w-full p-4 border h-[200px] object-contain'
										alt=''
									/>
									<input
										type='checkbox'
										className='size-6 bg-primary absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 outline p-1 rounded'
									/>
									<div className='bg-gray-500 absolute -top-2 -right-2 rounded-full flex'>
										<img
											src='/svgs/favourite.svg'
											className='size-4 m-2 object-contain'
											alt=''
										/>
									</div>
								</div>
								<div className='flex flex-col justify-between'>
									<div>
										<h1 className='text-xl line-clamp-2'>{product.title}</h1>
										<h1 className='font-bold text-xl'>{product.price}.00</h1>
										<div className='flex items-center gap-2'>
											<del>{product.discountPrice}.00</del>
											<h1 className='bg-green-500/30 px-1 rounded font-bold text-green-700'>
												45% OFF
											</h1>
										</div>
									</div>
									<div>
										<h1 className='bg-primary text-white p-1 w-[50%] text-center italic'>
											Top Seller
										</h1>
										<p className='text-green-500 font-bold'>in stock</p>
										<p className='text-gray-500'>Eligible for free shipping</p>
									</div>
								</div>
							</div>
							<div className='flex flex-wrap gap-3 items-center'>
								<div className='border w-[40%] border-primary px-3 py-2 rounded-2xl flex justify-between items-center'>
									<img className='size-4' src='/svgs/delete.svg' alt='' />
									<h1 className='font-extrabold text-lg'>2</h1>
									<FaPlus />
								</div>
								<h1 className='text-xl'>Delete</h1>
								<div className='h-6 w-[1px] bg-gray-500'></div>
								<h1 className='text-xl'>Save for Later</h1>{' '}
								<h1 className='text-lg'>See more like this</h1>{' '}
								<div className='h-6 w-[1px] bg-gray-500'></div>
								<h1 className='text-lg'>Share</h1>{' '}
							</div>
						</div>
					))}
				</div>
				<hr />
				<div className='flex flex-col gap-1 w-full'>
					<div className='flex justify-between items-center'>
						<h1>Items:</h1>
						<h1>₹ 1870/-</h1>
					</div>
					<div className='flex justify-between items-center'>
						<h1>Delivery:</h1>
						<h1>₹ 80/-</h1>
					</div>
					<div className='flex justify-between items-center'>
						<h1>Total:</h1>
						<h1>₹ 1950/-</h1>
					</div>
					<div className='flex justify-between items-center'>
						<h1>Promotion Applied:</h1>
						<h1>₹ 50/-</h1>
					</div>
					<div className='flex justify-between font-bold text-lg items-center'>
						<h1>Order Total:</h1>
						<h1>₹ 2060/-</h1>
					</div>
				</div>
				<hr />
			</div>
		</div>
	)
}

export default Cart
