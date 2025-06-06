function CategoryHeader({ title }) {
	return (
		<div className='flex justify-between items-center pt-2'>
			<div className='flex items-center gap-1'>
				<div className='size-4 bg-primary'></div>
				<h1 className='font-bold text-primary text-sm md:text-3xl capitalize'>
					{title}
				</h1>
			</div>
			<p className='pr-4 text-xs text-gray-500'>see all</p>
		</div>
	)
}

export default CategoryHeader
