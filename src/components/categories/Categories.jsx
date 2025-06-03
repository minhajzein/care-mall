const categories = [
	{ title: 'Electronics', icon: '/images/category-1.png' },
	{ title: 'Mobile Accossories', icon: '/images/category-2.png' },
	{ title: 'Home Applainces', icon: '/images/category-3.png' },
	{ title: 'Beauty Care', icon: '/images/category-4.png' },
	{ title: 'Fashion', icon: '/images/category-5.png' },
	{ title: "Women's Care", icon: '/images/category-6.png' },
	{ title: 'Baby Care', icon: '/images/category-7.png' },
	{ title: 'More', icon: '/images/category-8.png' },
]

function Categories() {
	return (
		<div className='grid grid-cols-4 py-4 px-6 lg:grid-cols-8 font-nunito gap-3 lg:gap-8'>
			{categories.map((category, i) => (
				<div
					key={i}
					className='flex flex-col gap-1 justify-center cursor-pointer'
				>
					<img src={category.icon} alt='' />
					<h1 className='text-[12px] lg:text-sm whitespace-nowrap text-ellipsis overflow-hidden text-center'>
						{category.title}
					</h1>
				</div>
			))}
		</div>
	)
}

export default Categories
