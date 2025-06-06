import React from 'react'

function TestimonialCard({ testimonial }) {
	const { id, name, designation, testimonial: text, image } = testimonial
	return (
		<div className='w-[350px] rounded md:w-full gap-2 flex flex-col'>
			<img
				src={image}
				className='size-[100px] object-cover object-top mx-auto rounded-3xl border-4 border-primary'
				alt=''
			/>
			<div className='flex flex-col overflow-hidden gap-2 rounded-2xl shadow-lg shadow-black/50 -translate-y-1/4 bg-primary/10'>
				<p className='line-clamp-4 text-xs pt-12 px-8 md:text-md text-center'>
					{text} <span className='text-primary'>more..</span>.
				</p>
				<div className='bg-primary flex justify-end items-center gap-1 px-4 py-2 text-white text-xs'>
					<h1 className='font-bold'>{name}</h1>
					<span className='text-[10px]'>({designation})</span>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
