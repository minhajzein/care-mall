'use client'

import { useEffect, useState } from 'react'

function Timer({ seconds }) {
	const [timeLeft, setTimeLeft] = useState(seconds || 36000)
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prev => {
				if (prev <= 1) {
					clearInterval(timer)
					return 0
				}
				return prev - 1
			})
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	const formatTime = seconds => {
		const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
		const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
		const s = String(seconds % 60).padStart(2, '0')
		return (
			<div className='flex font-nunito text-primary gap-[1px] items-center'>
				<div className='border px-1 rounded border-white text-primary font-bold'>
					{h}
				</div>
				<span className='text-xl font-bold pb-1'>:</span>
				<div className='border px-1 rounded border-white text-primary font-bold'>
					{m}
				</div>
				<span className='text-xl font-bold pb-1'>:</span>
				<div className='border px-1 rounded border-white text-primary font-bold'>
					{s}
				</div>
			</div>
		)
	}
	return (
		<div className='bg-primary-black/70 p-1 flex justify-evenly'>
			<h1 className='text-primary font-nunito font-bold text-lg capitalize'>
				flash sales
			</h1>
			{formatTime(timeLeft)}
		</div>
	)
}

export default Timer
