'use client'
import Modal from 'antd/es/modal/Modal'
import { useState } from 'react'
import Login from '../auth/Login'
import SignUp from '../auth/SignUp'
import { useSelector } from 'react-redux'
import { CgMenuLeft } from 'react-icons/cg'
import Link from 'next/link'
import { PiShoppingCartSimple } from 'react-icons/pi'

function Header() {
	const user = useSelector(state => state.user.user)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [authType, setAuthType] = useState('login')

	const handleModalOpen = () => setIsModalOpen(true)
	const handleCancel = () => setIsModalOpen(false)

	return (
		<header className='w-full flex relative flex-col text-white'>
			<div className='flex md:px-8 flex-col md:flex-row px-4 pb-2 pt-4 gap-2 md:gap-0 md:py-2 justify-between sticky bg-primary top-0 md:bg-white items-center'>
				<img className='hidden md:block' src='/svgs/logo-web.svg' alt='' />
				<div className='flex justify-between md:w-auto w-full items-center'>
					<Link href='/'>
						<img src='/svgs/CAREMALL.svg' alt='' />
					</Link>
					<div className='flex items-center gap-2 md:hidden'>
						<div className='flex items-center gap-2'>
							<img src='/svgs/location.svg' alt='' />
							<select name='location' id='location'>
								<option value='india'>india</option>
							</select>
						</div>
						<Link
							href='/cart'
							className='flex items-center gap-2 cursor-pointer'
						>
							<div className='relative'>
								<PiShoppingCartSimple className='text-2xl' />
								<div className='rounded-full font-bold bg-white px-[3px] py-[1px] flex absolute -top-[1px] right-1/2 translate-x-1/2 '>
									<p className='m-auto text-primary text-[9px] pt-[1px]'>0</p>
								</div>
							</div>
						</Link>
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
					<Link href='/cart' className='flex items-center gap-2 cursor-pointer'>
						<img src='/svgs/14.svg' alt='' />
						<p>Cart</p>
					</Link>
				</div>
				<button
					onClick={handleModalOpen}
					className='h-[40px] hidden md:block text-black px-4 border cursor-pointer border-gray-500 rounded-md bg-white'
				>
					Sign In
				</button>
			</div>
			<div className='bg-primary w-full px-4  md:h-[48px] flex items-center justify-between pb-4 pt-1 md:px-8'>
				<CgMenuLeft className='text-2xl' />
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
