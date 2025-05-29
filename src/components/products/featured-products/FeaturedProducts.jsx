import FeaturedProductCard from './FeaturedProductCard'

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
	{
		id: 7,
		title: 'Portable Bluetooth Speaker',
		price: 45.0,
		discountPrice: 29.99,
		brand: 'BassBoom',
		imageSource: '/images/product-7.png',
	},
	{
		id: 8,
		title: 'Ergonomic Office Chair',
		price: 229.99,
		discountPrice: 179.99,
		brand: 'ComfortSit',
		imageSource: '/images/product-8.png',
	},
	{
		id: 9,
		title: 'Smartphone 128GB Dual SIM',
		price: 699.0,
		discountPrice: 599.0,
		brand: 'NextGen',
		imageSource: '/images/product-9.png',
	},
	{
		id: 10,
		title: 'Electric Toothbrush Set',
		price: 89.99,
		discountPrice: 59.99,
		brand: 'SmileCare',
		imageSource: '/images/product-10.png',
	},
	{
		id: 11,
		title: 'High-Speed Blender 1500W',
		price: 199.99,
		discountPrice: 149.99,
		brand: 'BlendPro',
		imageSource: '/images/product-11.png',
	},
	{
		id: 12,
		title: 'Noise Cancelling Earbuds',
		price: 99.99,
		discountPrice: 74.99,
		brand: 'SilentBeats',
		imageSource: '/images/product-12.png',
	},
]

function FeaturedProducts() {
	return (
		<div className='flex flex-col gap-4'>
			<div className='w-full h-1 bg-gray-500'></div>
			<h1 className='uppercase text-2xl font-bold text-primary'>
				Featured Products
			</h1>
			<div className='grid grid-cols-6'>
				{products.map(product => (
					<FeaturedProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default FeaturedProducts
