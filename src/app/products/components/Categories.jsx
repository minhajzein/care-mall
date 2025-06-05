const categories = [
	{ title: 'Electronics', icon: '/images/category-1.png' },
	{ title: 'Mobile Accossories', icon: '/images/category-2.png' },
	{ title: 'Home Applainces', icon: '/images/category-3.png' },
	{ title: 'Beauty Care', icon: '/images/category-4.png' },
	{ title: 'Fashion', icon: '/images/category-5.png' },
	{ title: "Women's Care", icon: '/images/category-6.png' },
	{ title: 'Baby Care', icon: '/images/category-7.png' },
]
function Categories() {
	return (
		<div className='grid grid-flow-col gap-2  overflow-x-auto'>
			{categories.map((category, i) => (
				<div
					key={i}
					className='flex flex-col gap-1 justify-start cursor-pointer'
				>
					<img src={category.icon} className='min-w-10 object-contain' alt='' />
					<h1 className='text-[8px] text-center'>{category.title}</h1>
				</div>
			))}
		</div>
	)
}

export default Categories
