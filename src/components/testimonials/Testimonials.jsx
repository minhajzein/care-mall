import React from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
	{
		id: 1,
		name: 'Aarav Mehta',
		designation: 'Founder, PixelNova',
		testimonial:
			'Working with Caremall was a game-changer for our business. Their team delivered on time with exceptional quality. Highly recommended!',
		image: '/images/testimonial-1.webp',
	},
	{
		id: 2,
		name: 'Sneha Reddy',
		designation: 'Marketing Head, GreenLeaf Organics',
		testimonial:
			"We've seen a 300% boost in conversions since implementing their solutions. Their support is fast and reliable.",
		image: '/images/testimonial-2.webp',
	},
	{
		id: 3,
		name: 'Rohan Kapoor',
		designation: 'CTO, EduLaunch',
		testimonial:
			'The UI/UX designs exceeded our expectations. Our users love the new interface. Thanks for the incredible work!',
		image: '/images/testimonial-3.jpeg',
	},
	{
		id: 4,
		name: 'Meera Nair',
		designation: 'Operations Manager, FitFuel',
		testimonial:
			'Their warehouse integration tools saved us hours of manual work every week. Great product with even better service.',
		image: '/images/testimonial-4.jpg',
	},
	{
		id: 5,
		name: 'Aditya Singh',
		designation: 'CEO, SkyTrade Logistics',
		testimonial:
			'They understood our logistics challenges and built exactly what we needed. Real professionals with a great approach.',
		image: '/images/testimonial-5.jpeg',
	},
]

function Testimonials() {
	return (
		<div className='flex flex-col mt-4 gap-2 md:gap-4'>
			<div className='flex gap-4 items-center'>
				<div className='md:size-8 size-4 bg-primary'></div>
				<h1 className='font-bold text-primary leading-3 text-sm md:text-3xl'>
					Testimonials
				</h1>
			</div>
			<div className='grid grid-flow-col overflow-x-auto p-4 gap-4  md:grid-flow-row md:grid-cols-3'>
				{testimonials.map(testimonial => (
					<TestimonialCard key={testimonial.id} testimonial={testimonial} />
				))}
			</div>
		</div>
	)
}

export default Testimonials
