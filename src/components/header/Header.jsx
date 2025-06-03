'use client'
import Modal from 'antd/es/modal/Modal'
import { useState } from 'react'
import Login from '../auth/Login'
import SignUp from '../auth/SignUp'
import { useSelector } from 'react-redux'

function Header() {
	const user = useSelector(state => state.user.user)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [authType, setAuthType] = useState('login')

	const handleModalOpen = () => setIsModalOpen(true)
	const handleCancel = () => setIsModalOpen(false)

	return (
		<header className='w-full flex relative flex-col text-white'>
			<div className='flex md:px-8 flex-col md:flex-row p-2 md:py-2  gap-2 md:gap-0 justify-between sticky bg-primary top-0 md:bg-white items-center'>
				<img className='hidden md:block' src='/svgs/logo-web.svg' alt='' />
				<div className='flex justify-between md:w-auto w-full items-center'>
					<img src='/svgs/CAREMALL.svg' alt='' />
					<div className='flex items-center gap-2 md:hidden'>
						<div className='flex items-center gap-2'>
							<img src='/svgs/location.svg' alt='' />
							<select name='location' id='location'>
								<option value='india'>india</option>
							</select>
						</div>
						<button className='flex items-center gap-2 cursor-pointer'>
							<img src='/svgs/cart.svg' alt='' />
						</button>
					</div>
				</div>
				<div className='relative rounded-md bg-white border border-gray-500 flex items-center gap-3 justify-between px-4 py-2 text-xs w-full md:w-[600px] h-[40px]'>
					<img
						src='/svgs/search.png'
						className='size-3 cursor-pointer'
						alt=''
					/>
					<input
						type='search'
						className='outline-none w-full  bg-white text-black'
						placeholder='Search for products, categories and more'
					/>
				</div>
				<div className='px-4 md:flex items-center hidden gap-6 text-black'>
					<div className='flex items-center gap-2'>
						<img src='/svgs/location.svg' alt='' />
						<select name='location' id='location'>
							<option value='india'>india</option>
						</select>
					</div>
					<button className='flex items-center gap-2 cursor-pointer'>
						<img src='/svgs/orders.svg' alt='' />
						<p>Orders</p>
					</button>
					<button className='flex items-center gap-2 cursor-pointer'>
						<img src='/svgs/wishlist.svg' alt='' />
						<p>Favorites</p>
					</button>
					<button className='flex items-center gap-2 cursor-pointer'>
						<img src='/svgs/cart.svg' alt='' />
						<p>Cart</p>
					</button>
				</div>
				<button
					onClick={handleModalOpen}
					className='h-[40px] hidden md:block text-black px-4 border cursor-pointer border-gray-500 rounded-md bg-white'
				>
					Sign In
				</button>
			</div>
			<div className='bg-primary w-full  md:h-[48px] flex items-center justify-between px-2 py-1 md:px-8'>
				<img src='/svgs/menu.svg' alt='' />
				<ul className='md:flex items-center hidden gap-6'>
					<li className='cursor-pointer hover:underline flex items-center gap-1 duration-300'>
						<h1>Electronics</h1>
						<img
							src='/svgs/down-arrow-white.svg'
							className='h-2 object-contain'
							alt=''
						/>
					</li>
					<li className='cursor-pointer hover:underline flex items-center gap-1 duration-300'>
						<h1>Mobile Accessories</h1>
						<img
							src='/svgs/down-arrow-white.svg'
							className='h-2 object-contain'
							alt=''
						/>
					</li>
					<li className='cursor-pointer hover:underline flex items-center gap-1 duration-300'>
						<h1>Home Appliances</h1>
						<img
							src='/svgs/down-arrow-white.svg'
							className='h-2 object-contain'
							alt=''
						/>
					</li>
					<li className='cursor-pointer hover:underline flex items-center gap-1 duration-300'>
						<h1>Beauty Care</h1>
						<img
							src='/svgs/down-arrow-white.svg'
							className='h-2 object-contain'
							alt=''
						/>
					</li>
					<li className='cursor-pointer hover:underline flex items-center gap-1 duration-300'>
						<h1>Cosmetics</h1>
						<img
							src='/svgs/down-arrow-white.svg'
							className='h-2 object-contain'
							alt=''
						/>
					</li>
					<li className='cursor-pointer hover:underline flex items-center gap-1 duration-300'>
						<h1>Women's Care</h1>
						<img
							src='/svgs/down-arrow-white.svg'
							className='h-2 object-contain'
							alt=''
						/>
					</li>
					<li className='cursor-pointer hover:underline flex items-center gap-1 duration-300'>
						<h1>Baby Care</h1>
						<img
							src='/svgs/down-arrow-white.svg'
							className='h-2 object-contain'
							alt=''
						/>
					</li>
					<li className='cursor-pointer hover:underline flex items-center gap-1 duration-300'>
						<h1>Fashion</h1>
						<img
							src='/svgs/down-arrow-white.svg'
							className='h-2 object-contain'
							alt=''
						/>
					</li>
				</ul>
				<button className='border border-white cursor-pointer px-3 py-1 rounded text-sm'>
					Be the Face of the Brand
				</button>
			</div>

			<Modal open={isModalOpen} onCancel={handleCancel} footer={[]}>
				{authType === 'login' ? (
					<Login setAuthType={setAuthType} setIsModalOpen={setIsModalOpen} />
				) : (
					<SignUp setAuthType={setAuthType} setIsModalOpen={setIsModalOpen} />
				)}
			</Modal>
		</header>
	)
}

export default Header
