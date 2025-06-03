function ProductCardPopular({ product }) {
	return (
		<div className='h-[420px] w-[300px] md:w-full flex flex-col shadow-lg rounded-2xl overflow-hidden'>
			<img
				src={product.imageSource}
				className='h-[300px] w-full hover:scale-105 duration-300 cursor-pointer object-bottom object-contain p-2 bg-[#D9D9D9]'
				alt=''
			/>
			<div className='bg-white flex flex-col w-full items-center gap-1 justify-center h-[120px]'>
				<h1 className='capitalize font-bold'>{product.title}</h1>
				<p className='w-[80%] truncate text-center text-sm'>
					{product.description}
				</p>
				<button className='bg-primary cursor-pointer rounded-lg text-white px-8 py-1 capitalize hover:bg-primary/80 transition duration-300'>
					explore
				</button>
			</div>
		</div>
	)
}

export default ProductCardPopular
