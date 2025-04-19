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
		<header className='bg-primary gap-2 w-full flex flex-col text-white p-4'>
			<div className='flex items-center justify-between'>
				<img src='/svgs/CAREMALL.svg' alt='' />
				<select defaultValue={'india'} className='bg-primary'>
					<option value='india'>India</option>
					<option value='saudi-arabia'>Saudi</option>
					<option value='china'>China</option>
				</select>
				<div className='flex items-center gap-2'>
					{user ? (
						<div className='flex cursor-pointer items-center gap-1'>
							<img className='size-4 rounded-full' src={user?.avatar} alt='' />
							<h1 className='text-[14px]'>{user?.username}</h1>
						</div>
					) : (
						<button
							onClick={handleModalOpen}
							className='flex cursor-pointer items-center gap-1'
						>
							<img src='/svgs/sign-in.svg' alt='' />
							<h1 className='text-[14px]'>sign in</h1>
						</button>
					)}

					<button className='flex items-center gap-1'>
						<img src='/svgs/cart.svg' alt='' />
						<h1 className='text-[14px]'>cart</h1>
					</button>
				</div>
			</div>
			<div className='w-full relative'>
				<img
					className='absolute top-1/2 left-2 -translate-y-1/2'
					src='/svgs/search-icon.svg'
					alt=''
				/>
				<input
					className='w-full py-2 px-8 text-xs rounded text-black bg-white outline-none'
					type='search'
					placeholder='Search for products, brands and more'
					name='search'
				/>
				<img
					className='absolute border-l border-gray-500 px-3 p-2 top-1/2 right-0 -translate-y-1/2'
					src='/svgs/sound.svg'
					alt=''
				/>
			</div>
			<div className='flex justify-between items-center'>
				<img src='/svgs/menu.svg' alt='' />
				<button className='border border-white px-3 py-1 rounded text-sm'>
					Become a Promoter
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
