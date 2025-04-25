import CategoryHeader from '../CategoryHeader'
import ProductCard from '../ProductCard'

const products = [
	{
		imageSource: '/images/15.png',
		title: 'HD Android Smart TV 32 Inch',
		price: '₹15,999',
		discountPrice: '₹12,999',
	},
	{
		imageSource: '/images/16.png',
		title: 'Single Door Refrigerator 184L',
		price: '₹25,999',
		discountPrice: '₹20,999',
	},
]

function Electrotinics() {
	return (
		<div className='flex flex-col bg-yellow-400/40 w-full font-nunito'>
			<CategoryHeader title={'Electronics'} />
			<div className='grid grid-cols-2 gap-2 p-4'>
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</div>
	)
}

export default Electrotinics
