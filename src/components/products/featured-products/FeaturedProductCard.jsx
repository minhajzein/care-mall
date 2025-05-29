import React from 'react'

function FeaturedProductCard({ product }) {
	return (
		<div className='w-full h-[360px] border border-gray-300 p-3 flex flex-col'>
			<img
				className='h-[230px] w-full object-contain object-center'
				src={product.imageSource}
				alt=''
			/>
			<div className='flex flex-col items-center text-black justify-between'>
				<h1 className='line-clamp-2 text-center font-bold'>{product.title}</h1>
				<p>
					<del>${product.price}</del> {product.discountPrice}
				</p>
				<h3 className='text-gray-500'>{product.brand}</h3>
			</div>
		</div>
	)
}

export default FeaturedProductCard
