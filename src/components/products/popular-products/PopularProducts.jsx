import ProductCardPopular from './ProductCardPopular'

const products = [
	{
		title: 'Titan New Edition',
		description: 'Consectetur adipisicing elit.',
		imageSource: '/images/popular-1.png',
	},
	{
		title: 'Fossil Chronograph',
		description: 'Elegant design with premium leather strap.',
		imageSource: '/images/popular-2.png',
	},
	{
		title: 'Casio G-Shock',
		description: 'Shock resistant with multi-function features.',
		imageSource: '/images/popular-3.png',
	},
	{
		title: 'Rolex Submariner',
		description: 'Luxury watch with timeless appeal.',
		imageSource: '/images/popular-4.png',
	},
	{
		title: 'Seiko 5 Sports',
		description: 'Reliable automatic movement in a sporty case.',
		imageSource: '/images/popular-5.png',
	},
	{
		title: 'Timex Expedition',
		description: 'Perfect for outdoor adventures and durability.',
		imageSource: '/images/popular-6.png',
	},
]

function PopularProducts() {
	return (
		<div className='flex flex-col gap-2 md:gap-4'>
			<div className='flex gap-4 items-center'>
				<div className='md:size-8 size-4 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					Popular Products
				</h1>
			</div>
			<div className='grid pb-2 md:grid-cols-6 px-4 grid-flow-col md:grid-flow-row gap-2 overflow-x-auto md:gap-4'>
				{products.map((product, index) => (
					<ProductCardPopular key={index} product={product} />
				))}
			</div>
		</div>
	)
}

export default PopularProducts
