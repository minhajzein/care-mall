import CategoryHeader from './CategoryHeader'
import ProductCard from './ProductCard'

const products = [
	{
		imageSource: '/images/19.png',
		title: 'Quistal Brown Plastic 3 in 1 combo kitchen',
		price: '₹15,999',
		discountPrice: '₹12,999',
	},
	{
		imageSource: '/images/20.png',
		title: 'NIRLON Stainless Steel Single Wall',
		price: '₹25,999',
		discountPrice: '₹20,999',
	},
	{
		imageSource: '/images/19.png',
		title: 'Quistal Brown Plastic 3 in 1 combo kitchen',
		price: '₹15,999',
		discountPrice: '₹12,999',
	},
	{
		imageSource: '/images/20.png',
		title: 'NIRLON Stainless Steel Single Wall',
		price: '₹25,999',
		discountPrice: '₹20,999',
	},
]

function LifeStyleCorner() {
	return (
		<div className='flex flex-col bg-green-700/40 w-full font-nunito'>
			<CategoryHeader title={'Home&LifeStyle Corner'} />
			<div className='grid grid-cols-2 lg:gap-6 lg:grid-cols-4 gap-2 p-4'>
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</div>
	)
}

export default LifeStyleCorner
