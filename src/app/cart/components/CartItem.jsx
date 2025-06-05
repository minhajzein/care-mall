import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

function CartItem({ product }) {
	return (
		<div className='flex flex-col gap-2'>
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
					<div className='bg-gray-300 absolute -top-2 -right-2 rounded-full flex'>
						<img
							src='/svgs/favourite.svg'
							className='size-4 m-2 object-contain'
							alt=''
						/>
					</div>
				</div>
				<div className='flex flex-col justify-between'>
					<div>
						<h1 className='text-lg line-clamp-2'>{product.title}</h1>
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
						<p className='text-gray-500 truncate'>Eligible for free shipping</p>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap gap-3 items-center'>
				<div className='border w-[40%] border-primary px-3 py-2 rounded-2xl flex justify-between items-center'>
					<div>
						{product.quantity >= 2 ? (
							<FaMinus />
						) : (
							<img className='size-4' src='/svgs/delete.svg' alt='' />
						)}
					</div>
					<h1 className='font-extrabold text-lg'>{product.quantity}</h1>
					<FaPlus />
				</div>
				<h1 className='text-xl'>Delete</h1>
				<div className='h-6 w-[1px] bg-gray-500'></div>
				<h1 className='text-xl'>Save for Later</h1>{' '}
				<Link href='/products'>
					<h1 className='text-lg'>See more like this</h1>{' '}
				</Link>
				<div className='h-6 w-[1px] bg-gray-500'></div>
				<h1 className='text-lg'>Share</h1>{' '}
			</div>
		</div>
	)
}

export default CartItem
