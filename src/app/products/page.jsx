'use client'

import { RiMenuUnfold4Fill } from 'react-icons/ri'
import ProductCard from './components/ProductCard'
import { Modal } from 'antd'
import { useState } from 'react'
import Categories from './components/Categories'

const products = [
	{
		imageSource: '/images/popular-1.png',
		title: 'Quistal Brown Plastic 3 in 1 combo kitchen',
		price: '₹15,999',
		discountPrice: '₹12,999',
		rating: 4.2,
	},
	{
		imageSource: '/images/popular-2.png',
		title: 'Nexora Multipurpose Steel Rack Organizer',
		price: '₹5,499',
		discountPrice: '₹3,999',
		rating: 3.8,
	},
	{
		imageSource: '/images/popular-3.png',
		title: 'Velora Wooden Modular Kitchen Shelf',
		price: '₹9,299',
		discountPrice: '₹7,499',
		rating: 4.5,
	},
	{
		imageSource: '/images/popular-4.png',
		title: 'UrbanHome Foldable Kitchen Table Set',
		price: '₹12,799',
		discountPrice: '₹10,499',
		rating: 4.0,
	},
	{
		imageSource: '/images/popular-5.png',
		title: 'CookSmart Wall Mounted Spice Rack',
		price: '₹3,199',
		discountPrice: '₹2,299',
		rating: 4.3,
	},
	{
		imageSource: '/images/popular-6.png',
		title: 'ModiCasa Acrylic Kitchen Storage Jars - Set of 6',
		price: '₹2,999',
		discountPrice: '₹1,999',
		rating: 4.1,
	},
	{
		imageSource: '/images/popular-1.png',
		title: 'LuxeFit Compact Modular Kitchen Unit',
		price: '₹19,499',
		discountPrice: '₹15,999',
		rating: 3.9,
	},
	{
		imageSource: '/images/popular-2.png',
		title: 'ChefNest Multi Utility Kitchen Stand',
		price: '₹4,999',
		discountPrice: '₹3,799',
		rating: 4.4,
	},
	{
		imageSource: '/images/popular-3.png',
		title: 'FabWood 2 Door Kitchen Cabinet with Drawers',
		price: '₹14,899',
		discountPrice: '₹11,799',
		rating: 4.0,
	},
	{
		imageSource: '/images/popular-4.png',
		title: 'SpaceCraft Sleek Kitchen Corner Shelf',
		price: '₹3,699',
		discountPrice: '₹2,799',
		rating: 3.7,
	},
	{
		imageSource: '/images/popular-5.png',
		title: 'Kitchora 3 Tier Stainless Storage Rack',
		price: '₹6,499',
		discountPrice: '₹5,199',
		rating: 4.6,
	},
	{
		imageSource: '/images/popular-6.png',
		title: 'SmartDine Wooden Kitchen Trolley',
		price: '₹11,499',
		discountPrice: '₹8,999',
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
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
			<Modal
				open={isOpen}
				onCancel={handleCancel}
				title='Filter Products'
				footer={[]}
			>
				<div className='flex flex-col gap-2'><Categories/></div>
			</Modal>
		</div>
	)
}

export default ProductDetails
