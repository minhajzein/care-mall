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
			<div className='bg-primary-black w-full h-[48px] flex items-center justify-end'>
				<div className='flex items-center justify-between w-[50%]'>
					<h3 className='text-center text-sm -translate-x-1/2'>
						Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
						<span className='font-bold underline capitalize cursor-pointer'>
							ShopNow
						</span>
					</h3>
					<select name='language' className='-translate-x-1/2' id='language'>
						<option value='english' className='capitalize bg-primary-black'>
							english
						</option>
					</select>
				</div>
			</div>
			<div className='flex px-8 py-2 justify-between sticky top-0 bg-white items-center'>
				<div className='flex items-center gap-1'>
					<img
						src='/svgs/caremall-logo.svg'
						className='rounded size-[31px]'
						alt=''
					/>
					<h2 className='text-black font-bold'>CareMall</h2>
				</div>
				<div className='flex items-center gap-3'>
					<button className='flex justify-center items-center gap-3 bg-primary rounded-md px-4 h-[40px]'>
						<img src='/svgs/menu.svg' alt='' />
						<p>Categories</p>
					</button>
					<div className='relative rounded-md border border-gray-500 flex items-center justify-between px-4 py-2 text-xs w-[600px] h-[40px]'>
						<input
							type='search'
							className='outline-none w-full  bg-white text-black'
							placeholder='Search for products, categories and more'
						/>
						<img
							src='/svgs/search.png'
							className='size-3 cursor-pointer'
							alt=''
						/>
					</div>
				</div>
				<div className='px-4 flex items-center gap-6 text-black'>
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
					className='h-[40px] text-black px-4 border cursor-pointer border-gray-500 rounded-md bg-white'
				>
					Sign In
				</button>
			</div>
			<div className='bg-primary w-full h-[48px] flex items-center justify-between px-8'>
				<div className='flex items-center gap-2'>
					<img src='/svgs/location.svg' alt='' />
					<select name='location' id='location'>
						<option value='india'>india</option>
					</select>
				</div>
				<ul className='flex items-center gap-6'>
					<li className='cursor-pointer hover:underline duration-300'>
						Best Sellers
					</li>
					<li className='cursor-pointer hover:underline duration-300'>
						New Releases
					</li>
					<li className='cursor-pointer hover:underline duration-300'>Books</li>
					<li className='cursor-pointer hover:underline duration-300'>
						Best Sellers
					</li>
					<li className='cursor-pointer hover:underline duration-300'>
						Computers
					</li>
					<li className='cursor-pointer hover:underline duration-300'>
						Fashion
					</li>
					<li className='cursor-pointer hover:underline duration-300'>
						Health
					</li>
					<li className='cursor-pointer hover:underline duration-300'>
						Pharmacy
					</li>
					<li className='cursor-pointer hover:underline duration-300'>
						Toys & Games
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
