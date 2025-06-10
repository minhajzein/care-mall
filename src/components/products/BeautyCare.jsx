import CategoryHeader from './CategoryHeader'
import ProductCard from './ProductCard'

const products = [
	{
		imageSource: '/images/25.png',
		title: 'HD Android Smart TV 32 Inch',
		price: '15,999',
		discountPrice: '12,999',
	},
	{
		imageSource: '/images/26.png',
		title: 'Single Door Refrigerator 184L',
		price: '25,999',
		discountPrice: '20,999',
	},
	{
		imageSource: '/images/25.png',
		title: 'HD Android Smart TV 32 Inch',
		price: '15,999',
		discountPrice: '12,999',
	},
	{
		imageSource: '/images/26.png',
		title: 'Single Door Refrigerator 184L',
		price: '25,999',
		discountPrice: '20,999',
	},
	{
		imageSource: '/images/25.png',
		title: 'HD Android Smart TV 32 Inch',
		price: '15,999',
		discountPrice: '12,999',
	},
	{
		imageSource: '/images/26.png',
		title: 'Single Door Refrigerator 184L',
		price: '25,999',
		discountPrice: '20,999',
	},
]

function BeautyCare() {
	return (
		<div className='flex flex-col bg-orange-700/10 w-full font-nunito'>
			<CategoryHeader title={'Beauty Care'} />
			<div className='grid grid-flow-col scrollbar-hide md:grid-flow-row overflow-x-auto md:gap-4 md:grid-cols-6 gap-2 p-4'>
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
			<img className='p-4 object-contain w-full' src='/images/27.png' alt='' />
		</div>
	)
}

export default BeautyCare
