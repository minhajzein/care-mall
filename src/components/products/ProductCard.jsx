function ProductCard({ product }) {
	return (
		<div className='md:w-full bg-white p-3 rounded w-52 shadow-black/50 shadow-md font-nunito gap-[2px] flex flex-col'>
			<div className='w-full relative'>
				<img
					className='border h-60 w-full object-cover border-black'
					src={product.imageSource}
					alt=''
				/>
				<div className='absolute p-[7px] bg-gray-300 -top-1 -right-1 rounded-full'>
					<img className='size-3' src='/svgs/favourite.svg' alt='' />
				</div>
			</div>
			<h1 className='text-sm line-clamp-2'>{product.title}</h1>
			<h1 className='font-bold text-lg'>{product.discountPrice}</h1>
			<div className='flex gap-2 items-center'>
				<del className='text-gray-500 text-xs'>{product.price}</del>
				<div className='bg-green-500/20 rounded text-green-500 text-[10px] p-1'>
					15% OFF
				</div>
			</div>
			<button className='uppercase border border-black rounded-lg mt-1 text-red-500 font-bold'>
				add
			</button>
		</div>
	)
}

export default ProductCard
