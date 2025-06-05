'use client'

import { RiMenuUnfold4Fill } from 'react-icons/ri'
import ProductCard from './components/ProductCard'
import { Modal } from 'antd'
import { useState } from 'react'
import Categories from './components/Categories'

const products = [
	{
		id: 1,
		imageSource: '/images/popular-1.png',
		title: 'Quistal Brown Plastic 3 in 1 combo kitchen',
		price: 15999,
		discountPrice: 12999,
		rating: 4.2,
	},
	{
		id: 2,
		imageSource: '/images/popular-2.png',
		title: 'Nexora Multipurpose Steel Rack Organizer',
		price: 5499,
		discountPrice: 3999,
		rating: 3.8,
	},
	{
		id: 3,
		imageSource: '/images/popular-3.png',
		title: 'Velora Wooden Modular Kitchen Shelf',
		price: 9299,
		discountPrice: 7499,
		rating: 4.5,
	},
	{
		id: 4,
		imageSource: '/images/popular-4.png',
		title: 'UrbanHome Foldable Kitchen Table Set',
		price: 12799,
		discountPrice: 10499,
		rating: 4.0,
	},
	{
		id: 5,
		imageSource: '/images/popular-5.png',
		title: 'CookSmart Wall Mounted Spice Rack',
		price: 3199,
		discountPrice: 2299,
		rating: 4.3,
	},
	{
		id: 6,
		imageSource: '/images/popular-6.png',
		title: 'ModiCasa Acrylic Kitchen Storage Jars - Set of 6',
		price: 2999,
		discountPrice: 1999,
		rating: 4.1,
	},
	{
		id: 7,
		imageSource: '/images/popular-1.png',
		title: 'LuxeFit Compact Modular Kitchen Unit',
		price: 19499,
		discountPrice: 15999,
		rating: 3.9,
	},
	{
		id: 8,
		imageSource: '/images/popular-2.png',
		title: 'ChefNest Multi Utility Kitchen Stand',
		price: 4999,
		discountPrice: 3799,
		rating: 4.4,
	},
	{
		id: 9,
		imageSource: '/images/popular-3.png',
		title: 'FabWood 2 Door Kitchen Cabinet with Drawers',
		price: 14899,
		discountPrice: 11799,
		rating: 4.0,
	},
	{
		id: 10,
		imageSource: '/images/popular-4.png',
		title: 'SpaceCraft Sleek Kitchen Corner Shelf',
		price: 3699,
		discountPrice: 2799,
		rating: 3.7,
	},
	{
		id: 11,
		imageSource: '/images/popular-5.png',
		title: 'Kitchora 3 Tier Stainless Storage Rack',
		price: 6499,
		discountPrice: 5199,
		rating: 4.6,
	},
	{
		id: 12,
		imageSource: '/images/popular-6.png',
		title: 'SmartDine Wooden Kitchen Trolley',
		price: 11499,
		discountPrice: 8999,
		rating: 4.2,
	},
]

function ProductDetails() {
	const [isOpen, setIsOpen] = useState(false)
	const handleOpen = () => setIsOpen(true)
	const handleCancel = () => setIsOpen(false)
	return (
		<div className='w-full p-4 flex flex-col gap-4'>
			<div className='text-primary flex justify-between items-center w-full'>
				<h1>Filter Products</h1>
				<button className='md:hidden' onClick={handleOpen}>
					<RiMenuUnfold4Fill className='text-2xl' />
				</button>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<Modal
				open={isOpen}
				onCancel={handleCancel}
				title='Filter Products'
				footer={[]}
			>
				<div className='flex flex-col gap-2'>
					<Categories />
				</div>
			</Modal>
		</div>
	)
}

export default ProductDetails
