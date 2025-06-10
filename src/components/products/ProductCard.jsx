import { Rate } from 'antd'
import Link from 'next/link'

function ProductCard({ product }) {
	return (
		<div className='md:w-full bg-white p-3 rounded w-[160px] shadow-black/50 shadow-md font-nunito gap-[2px] flex flex-col'>
			<div className='w-full relative'>
				<Link className='w-full' href={`/products/${product.title}`}>
					<img
						className='border h-40 w-full object-contain border-black'
						src={product.imageSource}
						alt=''
					/>
				</Link>

				<div className='absolute p-[7px] bg-gray-300 -top-1 -right-1 rounded-full'>
					<img className='size-3' src='/svgs/favourite.svg' alt='' />
				</div>
			</div>
			<h1 className='text-sm truncate'>{product.title}</h1>
			<Rate value={4.5} style={{ fontSize: '12px' }} allowHalf disabled />
			<h1 className='font-bold text-lg'>₹{product.discountPrice}</h1>
			<div className='flex gap-2 items-center'>
				<del className='text-gray-500 text-xs'>₹{product.price}</del>
				<div className='bg-green-500/20 rounded text-green-500 text-[10px] p-1'>
					15% OFF
				</div>
			</div>
			<button className='uppercase border border-black rounded-lg mt-1 text-red-500 font-bold'>
				add to cart
			</button>
		</div>
	)
}

export default ProductCard
