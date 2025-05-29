import React from 'react'

function FeaturedProductCard({ product }) {
	return (
		<div className='w-full h-[360px] border border-gray-300 p-3 flex flex-col'>
			<img
				className='h-[230px] w-full object-contain object-center'
				src={product.imageSource}
				alt=''
			/>
			<div className='flex flex-col items-center justify-center'>
				<title>{product.title}</title>
			</div>
		</div>
	)
}

export default FeaturedProductCard
