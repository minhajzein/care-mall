function ProductCardPopular({ product }) {
	return (
		<div className='h-[300px] w-[175px] md:w-full flex flex-col shadow-lg rounded-2xl overflow-hidden'>
			<img
				src={product.imageSource}
				className='h-[175px] w-full hover:scale-105 duration-300 cursor-pointer object-bottom object-contain p-4 bg-[#D9D9D9]'
				alt=''
			/>
			<div className='bg-white flex flex-col w-full px-3 items-center gap-1 justify-center h-[150px]'>
				<h1 className='capitalize font-bold truncate text-sm w-[80%]'>
					{product.title}
				</h1>
				<p className='w-[80%] truncate text-center text-xs'>
					{product.description}
				</p>
				<button className='bg-primary cursor-pointer text-xs rounded-lg text-white px-8 py-1 capitalize hover:bg-primary/80 transition duration-300'>
					explore
				</button>
			</div>
		</div>
	)
}

export default ProductCardPopular
