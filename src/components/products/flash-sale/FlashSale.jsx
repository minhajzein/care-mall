import ProductCard from '../ProductCard'

const products = [
	{
		id: 3,
		title: 'Gaming Laptop 15.6" i7 16GB RAM',
		price: 1199.99,
		discountPrice: 999.99,
		brand: 'CyberCore',
		imageSource: '/images/product-3.png',
	},
	{
		id: 4,
		title: 'Fitness Tracker Watch',
		price: 79.99,
		discountPrice: 49.99,
		brand: 'FitPulse',
		imageSource: '/images/product-4.png',
	},
	{
		id: 5,
		title: 'Air Purifier with HEPA Filter',
		price: 149.99,
		discountPrice: 119.99,
		brand: 'PureBreeze',
		imageSource: '/images/product-5.png',
	},
	{
		id: 6,
		title: '4K Action Camera Waterproof',
		price: 129.99,
		discountPrice: 89.99,
		brand: 'GoXtreme',
		imageSource: '/images/product-6.png',
	},
]
function FlashSale() {
	return (
		<div className='flex flex-col gap-2 md:gap-4'>
			<div className='flex gap-4 items-center'>
				<div className='h-8 w-4 bg-primary rounded'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					Flash Sale
				</h1>
			</div>
			<div className='grid grid-flow-col md:grid-flow-row overflow-x-auto md:grid-cols-6 gap-2 pb-4 md:gap-4'>
				<img
					src='/images/flash-sale.jpg'
					className='md:col-span-2 rounded-lg hidden md:block'
					alt=''
				/>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default FlashSale
