function ProductCard({ product }) {
	return (
		<div className='w-full bg-white p-2 rounded font-nunito gap-[2px] flex flex-col'>
			<div className='w-full relative'>
				<img className='border border-black' src={product.imageSource} alt='' />
				<img
					className='absolute p-[7px] size-6 -top-1 -right-1  rounded-full bg-gray-300'
					src='/svgs/favourite.svg'
					alt=''
				/>
			</div>
			<h1 className='text-sm line-clamp-2'>{product.title}</h1>
			<h1 className='font-bold text-lg'>{product.discountPrice}</h1>
			<div className='flex gap-2 items-center'>
				<del className='text-gray-500 text-xs'>{product.price}</del>
				<div className='bg-green-500/20 rounded text-green-500 text-[10px] p-1'>
					15% OFF
				</div>
			</div>
			<button className='uppercase border border-black rounded-lg text-red-500 font-bold'>
				add
			</button>
		</div>
	)
}

export default ProductCard
