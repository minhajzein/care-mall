import CategoryHeader from './CategoryHeader'
import ProductCard from './ProductCard'

const products = [
	{
		imageSource: '/images/23.png',
		title: 'dermawear Men Chest and Abdomen Vest',
		price: '999',
		discountPrice: '899',
	},
	{
		imageSource: '/images/24.png',
		title: "Women's Chanderi Stitched Printed kurti",
		price: '1999',
		discountPrice: '1799',
	},
	{
		imageSource: '/images/23.png',
		title: 'dermawear Men Chest and Abdomen Vest',
		price: '999',
		discountPrice: '899',
	},
	{
		imageSource: '/images/24.png',
		title: "Women's Chanderi Stitched Printed kurti",
		price: '1999',
		discountPrice: '1799',
	},
	{
		imageSource: '/images/23.png',
		title: 'dermawear Men Chest and Abdomen Vest',
		price: '999',
		discountPrice: '899',
	},
	{
		imageSource: '/images/24.png',
		title: "Women's Chanderi Stitched Printed kurti",
		price: '1999',
		discountPrice: '1799',
	},
]

function Fashion() {
	return (
		<div className='flex mt-2 flex-col bg-amber-500/10 w-full font-nunito'>
			<CategoryHeader title={'Fashion'} />
			<img className='p-4 w-full' src='/images/22.png' alt='' />
			<div className='grid md:gap-4 md:grid-cols-6 grid-flow-col md:grid-flow-row overflow-x-auto gap-2 p-4'>
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</div>
	)
}

export default Fashion
