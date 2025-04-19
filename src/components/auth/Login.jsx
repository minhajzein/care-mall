'use client'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import usePersist from '@/hooks/usePersist'
import { useLoginMutation } from '@/redux/apiSlices/authApiSlice'
import { setUser } from '@/redux/slices/userSlice'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import Link from 'next/link'
import { PiSpinnerGapLight } from 'react-icons/pi'

export default function Login({ setAuthType, setIsModalOpen }) {
	const [loginto, { isLoading }] = useLoginMutation()

	const [isShow, setIsShow] = useState(false)

	const [persist, setPersist] = usePersist()
	const handleToggle = () => setPersist(prev => !prev)

	const dispatch = useDispatch()

	const handleRegisterNavigate = () => setAuthType('register')

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid')
				.email('Invalid Email Address')
				.required(),
			password: Yup.string()
				.min(8, 'Password should be atleast 8 character')
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					'password should contain an uppercase,a lowercase, a number and a special character'
				)
				.required('Password is required'),
		}),

		onSubmit: async user => {
			try {
				const { data } = await loginto(user)
				if (data.success) {
					toast.success('Successfully logged in')
					dispatch(setUser({ ...data, token: data.accessToken }))
					formik.resetForm()
					setIsModalOpen(false)
				} else {
					toast.error(data.error_msg)
				}
			} catch (error) {
				console.error(error)
				toast.error('Internal Server Error')
			}
		},
	})

	return (
		<div className='relative w-full'>
			<div className='border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-2xl shadow-slate-500/10 dark:shadow-white/70 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none'>
				<div className='flex flex-col py-6'>
					<h3 className='text-xl font-semibold leading-6 tracking-tighter'>
						Login
					</h3>
					<p className='mt-1.5 text-sm font-medium text-black/50'>
						Welcome back! Enter your details and continue.
					</p>
				</div>
				<div className='py-6 pt-0 w-full'>
					<form
						className='flex flex-col gap-4 w-full'
						onSubmit={formik.handleSubmit}
					>
						<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30'>
							<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
								Email
							</label>
							<input
								type='email'
								name='email'
								onChange={formik.handleChange}
								value={formik.values.email}
								placeholder='Enter Your Email Address'
								autoComplete='off'
								className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground'
							/>
							<p className='text-xs font-thin text-red-500'>
								{formik.touched.email && formik?.errors?.email}
							</p>
						</div>
						<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30'>
							<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
								Password
							</label>
							<div className='flex justify-between items-center gap-2'>
								<input
									className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground'
									type={isShow ? 'text' : 'password'}
									name='password'
									onChange={formik.handleChange}
									value={formik.values.password}
									placeholder='Enter Your Password'
									autoComplete='off'
								/>
								{isShow ? (
									<FaRegEyeSlash
										className='cursor-pointer'
										onClick={() => setIsShow(false)}
									/>
								) : (
									<FaRegEye
										className='cursor-pointer'
										onClick={() => setIsShow(true)}
									/>
								)}
							</div>
							<p className='text-xs font-thin text-red-500'>
								{formik.touched.password && formik?.errors?.password}
							</p>
						</div>
						<div className='flex justify-between items-center'>
							<label className='flex items-center gap-2'>
								<input
									type='checkbox'
									name='remember'
									className='outline-none focus:outline focus:outline-sky-300'
									checked={persist}
									onChange={handleToggle}
								/>
								<span className='text-xs'>Trust this device</span>
							</label>
							<Link className='text-xs underline' href='/reset-password'>
								Forgot Password?
							</Link>
						</div>

						<button
							className='font-semibold hover:bg-primary border text-primary border-primary hover:text-black hover:ring cursor-pointer hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white h-10 px-4 py-2'
							type='submit'
							disabled={isLoading}
						>
							{isLoading ? (
								<PiSpinnerGapLight className='animate-spin m-auto' />
							) : (
								'Login'
							)}
						</button>
					</form>
					<div className='mt-4 flex items-center justify-between'>
						<p className='text-sm font-medium text-foreground underline'>
							Don't have an account?
						</p>
						<button
							onClick={handleRegisterNavigate}
							className='inline-flex cursor-pointer underline items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200'
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
