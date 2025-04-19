function Footer() {
	return (
		<footer className='bg-primary-black p-8 text-gray-100 font-nunito gap-4 flex flex-col'>
			<div className='grid grid-cols-2 gap-2'>
				<ul className='text-xs'>
					<li className='font-bold'>care mall</li>
					<li>About US</li>
					<li>Become a Care Mall Rider</li>
					<li>in News</li>
					<li>Privacy Policy</li>
					<li>Terms & Conditions</li>
					<li>Careers at Care Mall</li>
					<li>CM Instant</li>
					<li>CM Daily</li>
					<li>CM Blog</li>
					<li>CM Now</li>
				</ul>
				<ul className='text-xs'>
					<li className='font-bold'>Help</li>
					<li>FAQs</li>
					<li>Contact Us</li>
					<li>CM Wallet FAQs</li>
					<li>CM Wallet T&Cs</li>
					<li>Vendor Connect</li>
				</ul>
				<ul className='text-xs font-bold'>
					<li className='capitalize'>cities we serve</li>
					<li>Our Brands</li>
					<li>Popular Categories</li>
				</ul>
			</div>
			<p className='text-gray-500 text-[14px]'>Copyright 2025</p>
		</footer>
	)
}

export default Footer
