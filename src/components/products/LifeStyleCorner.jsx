import CategoryHeader from './CategoryHeader'
import ProductCard from './ProductCard'

const products = [
	{
		imageSource: '/images/19.png',
		title: 'Quistal Brown Plastic 3 in 1 combo kitchen',
		price: '15,999',
		discountPrice: '12,999',
	},
	{
		imageSource: '/images/20.png',
		title: 'NIRLON Stainless Steel Single Wall',
		price: '25,999',
		discountPrice: '20,999',
	},
	{
		imageSource: '/images/19.png',
		title: 'Quistal Brown Plastic 3 in 1 combo kitchen',
		price: '15,999',
		discountPrice: '12,999',
	},
	{
		imageSource: '/images/20.png',
		title: 'NIRLON Stainless Steel Single Wall',
		price: '25,999',
		discountPrice: '20,999',
	},
	{
		imageSource: '/images/19.png',
		title: 'Quistal Brown Plastic 3 in 1 combo kitchen',
		price: '15,999',
		discountPrice: '12,999',
	},
	{
		imageSource: '/images/20.png',
		title: 'NIRLON Stainless Steel Single Wall',
		price: '25,999',
		discountPrice: '20,999',
	},
]

function LifeStyleCorner() {
	return (
		<div className='flex flex-col w-full font-nunito'>
			<CategoryHeader title={'Home&LifeStyle Corner'} />
			<div className='grid md:grid-cols-6 lg:gap-4 scrollbar-hide md:grid-flow-row grid-flow-col overflow-x-auto gap-2 p-4'>
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</div>
	)
}

export default LifeStyleCorner
