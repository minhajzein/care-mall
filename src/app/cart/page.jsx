'use client'

import { SiCheckmarx } from 'react-icons/si'
import ProductCard from '@/components/products/ProductCard'
import CartItem from './components/CartItem'
import { useSelector } from 'react-redux'

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
	const cart = useSelector(state => state.cart)

	return (
		<div className='pt-4 flex flex-col gap-4'>
			{cart.items.length > 0 ? (
				<>
					<div className='flex flex-col gap-4  px-4 bg-white'>
						<div className='flex flex-col'>
							<h1 className='text-xl'>
								Subtotal ({cart.totalQuantity} items): ₹
								<span className='font-bold'>{cart.totalPrice.toFixed(2)}</span>
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
							{cart.items.map(product => (
								<CartItem key={product.id} product={product} />
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
				</>
			) : (
				<div className='flex flex-col items-center justify-center p-4'>
					<h1>Your Cart is Empty</h1>
				</div>
			)}
			<div className='flex flex-col gap-4 px-4'>
				<div className='flex flex-col gap-2 mt-4'>
					<h1 className='text-primary text-xl font-bold'>Your Favorite</h1>
					<div className='grid grid-flow-col gap-2 overflow-x-auto pb-4'>
						{products.map((product, i) => (
							<ProductCard key={i} product={product} />
						))}
					</div>
				</div>
				<hr />
				<div className='flex flex-col gap-2 mt-4'>
					<h1 className='text-primary text-xl font-bold'>Matching Products</h1>
					<div className='grid grid-flow-col gap-2 overflow-x-auto pb-4'>
						{products.map((product, i) => (
							<ProductCard key={i} product={product} />
						))}
					</div>
				</div>
				<hr />
				<div className='flex flex-col gap-2 mt-4'>
					<h1 className='text-primary text-xl font-bold'>
						You Might Also Like
					</h1>
					<div className='grid grid-flow-col gap-2 overflow-x-auto pb-4'>
						{products.map((product, i) => (
							<ProductCard key={i} product={product} />
						))}
					</div>
				</div>
			</div>
			<div className='bg-primary p-4 gap-2'>
				<div className='flex flex-col items-center gap-1'>
					<h1 className='text-lg font-bold text-white'>
						Get top deals, latest trends and more
					</h1>
					<form className='flex items-center w-full justify-center gap-2'>
						<input
							type='email'
							className='bg-white rounded-xl w-[70%] outline-none p-2'
						/>
						<button className='border border-white text-white p-2 rounded-xl'>
							Subscribe
						</button>
					</form>
				</div>
				<div className='p-4 flex flex-col gap-1 items-center text-white justify-center'>
					<p>
						Shoping at your fingertips!
						<span className='font-bold'>Download the app</span>
					</p>
					<div className='flex gap-4 justify-center'>
						<img
							src='/images/30.png'
							className='w-[50%] object-contain'
							alt=''
						/>
						<img
							src='/images/31.png'
							className='w-[50%] object-contain'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
