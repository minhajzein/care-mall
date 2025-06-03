import ProductCard from '../ProductCard'

const products = [
	{
		id: 1,
		title: 'Wireless Bluetooth Headphones',
		price: 59.99,
		discountPrice: 39.99,
		brand: 'SoundPro',
		imageSource: '/images/product-1.png',
	},
	{
		id: 2,
		title: 'Smart LED TV 42 inch',
		price: 349.99,
		discountPrice: 299.99,
		brand: 'VisionTech',
		imageSource: '/images/product-2.png',
	},
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

function FeaturedProducts() {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex gap-4 items-center'>
				<div className='md:size-8 size-4 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					Featured Products
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='grid grid-flow-col md:grid-flow-row overflow-x-auto md:grid-cols-3 gap-2 md:gap-4'>
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
				<div className='flex flex-col gap-4'>
					<img
						src='/images/feetured-porduct.png'
						className='rounded-4xl'
						alt=''
					/>
					<img
						src='/images/featured-banner.png'
						className='rounded-4xl'
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}

export default FeaturedProducts
