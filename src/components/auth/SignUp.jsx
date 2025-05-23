'use client'

import { PiSpinnerGapLight } from 'react-icons/pi'
import { MdVerifiedUser } from 'react-icons/md'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import {
	useSendOtpMutation,
	useSignupMutation,
	useVerifyOtpMutation,
} from '@/redux/apiSlices/authApiSlice'
import { useState } from 'react'
import usePersist from '@/hooks/usePersist'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { setUser } from '@/redux/slices/userSlice'
import UploadProfilePicture from '../uploads/UploadProfilePicture'

function SignUp({ setAuthType, setIsModalOpen }) {
	const [signup, { isLoading }] = useSignupMutation()
	const [sendOTP, { isLoading: generating }] = useSendOtpMutation()
	const [verifyOTP, { isLoading: verifying }] = useVerifyOtpMutation()

	const handleLoginNavigate = () => setAuthType('login')

	const [isShow, setIsShow] = useState(false)
	const [emailVerified, setEmailVerified] = useState(false)
	const [image, setImage] = useState(null)
	const [otp, setOtp] = useState('')

	const [persist, setPersist] = usePersist()
	const handleToggle = () => setPersist(prev => !prev)

	const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			mobile: '',
			DOB: '',
			gender: '',
			address: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: Yup.object({
			username: Yup.string().min(3).required(),
			email: Yup.string()
				.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid')
				.email('Invalid Email Address')
				.required(),
			mobile: Yup.string()
				.required('mobile number is required')
				.matches(
					/^(?:(\s*[\-]\s*)?|[0]?)?[6-9]\d{9}$/,
					'mobile number is not valid'
				),
			gender: Yup.string().required('Please select a gender'),
			DOB: Yup.string().required('Please choose your Date of Birth'),
			address: Yup.string().required('Please provide an address'),
			password: Yup.string()
				.min(8, 'Password should be atleast 8 character')
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					'password should contain an uppercase,a lowercase, a number and a special character'
				)
				.required('Password is required'),
			confirmPassword: Yup.string()
				.required('Please confirm your password')
				.oneOf([Yup.ref('password')], 'Password must be same'),
		}),

		onSubmit: async user => {
			if (emailVerified !== true) return toast.warn('Please Verify Your Email')
			if (!image) return toast.warn('Please upload a profile picture')

			try {
				const { data } = await signup({ ...user, avatar: image })
				if (data.success) {
					toast.success('Welcome to Care Mall')
					dispatch(setUser({ ...data, token: data.accessToken }))
					formik.resetForm()
					setImage(null)
					setIsModalOpen(false)
				} else {
					toast.error(data.error_msg)
				}
			} catch (error) {
				console.error(error)
			}
		},
	})
	const handleEmailChange = e => {
		formik.setFieldValue('email', e.target.value)
		setEmailVerified(false)
	}

	const generateOTP = async () => {
		try {
			if (!formik.errors.email) {
				const { data } = await sendOTP({ email: formik.values.email })
				if (data.success) {
					setEmailVerified('sent')
					toast.success(data.message)
				} else {
					toast.error(data.message)
				}
			} else toast.error('Enter a Valid Email')
		} catch (error) {
			console.error(error)
		}
	}

	const handleVerifyOTP = async () => {
		try {
			const { data } = await verifyOTP({ otp, email: formik.values.email })

			if (data.success) {
				setEmailVerified(true)
				toast.success(data.message)
			} else {
				toast.error(data.message)
			}
		} catch (error) {
			console.error(error)
			toast.error('Internal Server Error')
		}
	}

	return (
		<div className='relative w-full'>
			<div className='border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-2xl shadow-slate-500/10 dark:shadow-white/70 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none'>
				<div className='flex flex-col py-6'>
					<h3 className='text-xl font-semibold leading-6 tracking-tighter'>
						Register
					</h3>
					<p className='mt-1.5 text-sm font-medium text-black/50'>
						Welcome! Create your account by entering your details below.{' '}
					</p>
				</div>
				<div className='py-6 pt-0 w-full'>
					<form
						className='flex flex-col gap-4 w-full'
						onSubmit={formik.handleSubmit}
					>
						<div className='flex gap-2 w-full'>
							<UploadProfilePicture image={image} setImage={setImage} />
							<div className='group w-[90%] relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-primary/30'>
								<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
									Username
								</label>
								<input
									type='text'
									name='username'
									onChange={formik.handleChange}
									value={formik.values.username}
									placeholder='Enter Your Username'
									autoComplete='off'
									className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground'
								/>
								<p className='text-xs font-thin text-red-500'>
									{formik.touched.username && formik?.errors?.username}
								</p>
							</div>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-primary/30'>
								<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
									{emailVerified === 'sent' ? formik.values.email : 'Email'}
								</label>
								<div className='flex justify-center items-center gap-3'>
									<input
										type={emailVerified === false ? 'email' : 'text'}
										name='email'
										onChange={
											emailVerified === 'sent'
												? e => setOtp(e.target.value)
												: handleEmailChange
										}
										value={emailVerified === 'sent' ? otp : formik.values.email}
										placeholder={
											emailVerified === 'sent'
												? 'Please enter your OTP before expiring'
												: 'Enter Your Email Address'
										}
										autoComplete='off'
										className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground'
									/>
									{emailVerified === true && (
										<MdVerifiedUser className='text-green-500' />
									)}
									{emailVerified === false && (
										<button
											type='button'
											disabled={generating}
											onClick={generateOTP}
											className='ring cursor-pointer rounded text-xs p-1'
										>
											{generating ? (
												<PiSpinnerGapLight className='animate-spin m-auto' />
											) : (
												'Get..OTP'
											)}
										</button>
									)}
									{emailVerified === 'sent' && (
										<button
											type='button'
											disabled={verifying}
											onClick={handleVerifyOTP}
											className='ring cursor-pointer animate-pulse bg-white text-black rounded text-xs p-1'
										>
											{verifying ? (
												<PiSpinnerGapLight className='animate-spin m-auto' />
											) : (
												'Verify'
											)}
										</button>
									)}
								</div>
								<p className='text-xs font-thin text-red-500'>
									{formik.touched.email && formik?.errors?.email}
								</p>
							</div>
							<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-primary/30'>
								<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
									Contact Number
								</label>
								<div className='flex gap-2 items-center'>
									<span className='text-sm text-gray-400'>+91</span>
									<input
										type='mobile'
										name='mobile'
										onChange={formik.handleChange}
										value={formik.values.mobile}
										placeholder='Enter Your Phone Number'
										autoComplete='off'
										className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground'
									/>
								</div>
								<p className='text-xs font-thin text-red-500'>
									{formik.touched.mobile && formik?.errors?.mobile}
								</p>
							</div>
							<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-primary/30'>
								<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
									Gender
								</label>
								<div className='flex text-gray-400 justify-between p-1'>
									<label className='flex cursor-pointer justify-center items-center gap-2 text-sm'>
										<input
											type='radio'
											onChange={formik.handleChange}
											checked={formik.values.gender === 'Male'}
											name='gender'
											value='Male'
										/>
										Male
									</label>
									<label className='flex cursor-pointer justify-center items-center gap-2 text-sm'>
										<input
											type='radio'
											onChange={formik.handleChange}
											checked={formik.values.gender === 'Female'}
											name='gender'
											value='Female'
										/>
										Female
									</label>
									<label className='flex cursor-pointer justify-center items-center gap-2 text-sm'>
										<input
											type='radio'
											onChange={formik.handleChange}
											checked={formik.values.gender === 'Others'}
											name='gender'
											value='Others'
										/>
										Others
									</label>
								</div>
								<p className='text-xs font-thin text-red-500'>
									{formik.touched.gender && formik?.errors?.gender}
								</p>
							</div>
							<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-primary/30'>
								<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
									Date Of Birth
								</label>
								<input
									className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground'
									type='date'
									name='DOB'
									onChange={formik.handleChange}
									value={formik.values.DOB}
									placeholder='Choose the Date'
									autoComplete='off'
								/>{' '}
								<p className='text-xs font-thin text-red-500'>
									{formik.touched.DOB && formik?.errors?.DOB}
								</p>
							</div>
						</div>
						<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-primary/30'>
							<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
								Address
							</label>
							<textarea
								type='text'
								name='address'
								onChange={formik.handleChange}
								value={formik.values.address}
								placeholder='Enter Your Full Address'
								autoComplete='off'
								className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground'
							/>
							<p className='text-xs font-thin text-red-500'>
								{formik.touched.address && formik?.errors?.address}
							</p>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-primary/30'>
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
										placeholder='Secure with password'
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
							<div className='group relative rounded-lg border focus-within:border-primary px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-primary/30'>
								<label className='text-xs font-medium text-muted-foreground group-focus-within:text-black text-gray-400'>
									Confirm Your Password
								</label>
								<input
									className='block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground'
									type='password'
									name='confirmPassword'
									onChange={formik.handleChange}
									value={formik.values.confirmPassword}
									placeholder='Re-enter your password'
								/>
								<p className='text-xs font-thin text-red-500'>
									{formik.touched.confirmPassword &&
										formik?.errors?.confirmPassword}
								</p>
							</div>
						</div>
						<label className='flex items-center gap-2'>
							<input
								type='checkbox'
								name='remember'
								className='outline-none focus:outline focus:outline-primary'
								checked={persist}
								onChange={handleToggle}
							/>
							<span className='text-xs'>Trust this device</span>
						</label>
						<button
							className='font-semibold hover:bg-primary border text-primary border-primary hover:text-white hover:ring cursor-pointer hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white h-10 px-4 py-2'
							type='submit'
							disabled={isLoading}
						>
							{isLoading ? (
								<PiSpinnerGapLight className='animate-spin m-auto' />
							) : (
								'Register'
							)}
						</button>
					</form>
					<div className='mt-4 flex items-center justify-between'>
						<p className='text-sm font-medium text-foreground underline'>
							Already have an account?
						</p>
						<button
							onClick={handleLoginNavigate}
							className='inline-flex underline items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200'
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
