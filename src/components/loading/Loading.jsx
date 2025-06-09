import React from 'react'

function Loading() {
	return (
		<div className='w-full h-dvh flex bg-white'>
			<img
				className='m-auto w-[80%] object-contain'
				src='/images/loading.gif'
				alt=''
			/>
		</div>
	)
}

export default Loading
