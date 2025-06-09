import {
	decrementItemQuantity,
	deleteCartItem,
	incrementItemQuantity,
} from '@/redux/slices/cartSlice'
import {
	decrementCartItemQuantity,
	incrementCartItemQuantity,
	removeProductFromCart,
} from '@/utils/cart-utils'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { PiShareThin } from 'react-icons/pi'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CartItem({ product }) {
	const dispatch = useDispatch()

	const handleIncrement = () => {
		dispatch(incrementItemQuantity(product))
		incrementCartItemQuantity(product.id)
	}

	const handleDecrement = () => {
		dispatch(decrementItemQuantity(product))
		decrementCartItemQuantity(product.id)
	}

	const handleRemove = () => {
		dispatch(deleteCartItem(product))
		removeProductFromCart(product.id)
		toast.warn(`${product.title} removed from cart`)
	}

	return (
		<div className='flex flex-col gap-2'>
			<div className='grid grid-cols-3 gap-3'>
				<div className='relative w-full'>
					<div className='relative'>
						<img
							src={product.imageSource}
							className='w-full p-2 border h-[150px] object-contain'
							alt=''
						/>
						<input
							type='checkbox'
							className='size-4 bg-primary absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 outline p-1 rounded'
						/>
					</div>
					<div className='bg-gray-300 absolute -top-2 -right-2 rounded-full flex'>
						<img
							src='/svgs/favourite.svg'
							className='size-4 m-2 object-contain'
							alt=''
						/>
					</div>
				</div>
				<div className='flex flex-col col-span-2 gap-[2px] justify-between'>
					<div>
						<h1 className='text-sm line-clamp-2'>{product.title}</h1>
						<h1 className='font-bold text-lg'>{product.discountPrice}.00</h1>
						<div className='flex items-center gap-2'>
							<del className='text-xs'>{product.price}.00</del>
							<h1 className='bg-green-500/30 px-1 text-xs rounded font-bold text-green-700'>
								45% OFF
							</h1>
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<p className='text-green-500 font-bold text-xs'>in stock</p>
						<h1 className='bg-primary text-white text-xs p-1 w-[50%] text-center italic'>
							Top Seller
						</h1>
					</div>
					<p className='text-gray-500 truncate text-xs'>
						Eligible for free shipping
					</p>
				</div>
			</div>
			<div className='flex flex-wrap gap-2 items-center'>
				<div className='border w-[40%] border-primary px-3 py-1 rounded-2xl flex justify-between items-center'>
					<div>
						{product.quantity >= 2 ? (
							<FaMinus onClick={handleDecrement} className='cursor-pointer' />
						) : (
							<img
								onClick={handleRemove}
								className='size-4'
								src='/svgs/delete.svg'
								alt=''
							/>
						)}
					</div>
					<h1 className='font-extrabold text-lg'>{product.quantity}</h1>
					<FaPlus onClick={handleIncrement} className='cursor-pointer' />
				</div>
				<h1 className='text-primary' onClick={handleRemove}>
					Delete
				</h1>
				<div className='h-6 w-[1px] bg-gray-500'></div>
				<h1>Save for Later</h1>{' '}
				<Link href='/products'>
					<h1 className='text-blue-500 underline'>See more like this</h1>{' '}
				</Link>
				<div className='h-6 w-[1px] bg-gray-500'></div>
				<div className='flex items-center gap-2'>
					<h1>Share</h1>
					<PiShareThin />
				</div>
			</div>
			<ToastContainer />
		</div>
	)
}

export default CartItem
