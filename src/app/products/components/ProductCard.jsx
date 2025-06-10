import { addToCart } from '@/redux/slices/cartSlice'
import { addProductToCart } from '@/utils/cart-utils'
import { Rate } from 'antd'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ProductCard({ product }) {
	const dispatch = useDispatch()

	const addItemToCart = () => {
		// Function to handle adding item to cart
		addProductToCart(product)
		dispatch(addToCart(product))
		toast.success(`${product.title} added to cart!`)
	}
	return (
		<div className='w-full bg-white p-3 rounded shadow-black/50 shadow-md font-nunito gap-[2px] flex flex-col'>
			<div className='w-full relative'>
				<Link className='w-full' href={`/products/${product.title}`}>
					<img
						className='border h-40 p-2 w-full object-contain border-black'
						src={product.imageSource}
						alt=''
					/>
				</Link>

				<div className='absolute p-[7px] bg-gray-300 -top-1 -right-1 rounded-full'>
					<img className='size-3' src='/svgs/favourite.svg' alt='' />
				</div>
			</div>
			<h1 className='text-sm truncate'>{product.title}</h1>
			<Rate
				value={product.rating}
				style={{ fontSize: '12px' }}
				allowHalf
				disabled
			/>
			<h1 className='font-bold text-lg'>₹{product.discountPrice.toFixed(2)}</h1>
			<div className='flex gap-2 items-center'>
				<del className='text-gray-500 text-xs'>₹{product.price.toFixed(2)}</del>
				<div className='bg-green-500/20 rounded text-green-500 text-[10px] p-1'>
					15% OFF
				</div>
			</div>
			<button
				onClick={addItemToCart}
				className='uppercase border border-black rounded-lg mt-1 text-red-500 font-bold'
			>
				add to cart
			</button>
			<ToastContainer />
		</div>
	)
}

export default ProductCard
