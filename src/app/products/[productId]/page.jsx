import { Carousel, Rate } from 'antd'
import { CgMenuMotion } from 'react-icons/cg'
import { FaLocationDot } from 'react-icons/fa6'
import { SlHeart } from 'react-icons/sl'
import { PiShareNetworkFill } from 'react-icons/pi'
import ProductCard from '@/components/products/ProductCard'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import { PiWarningCircleFill } from 'react-icons/pi'
import { RiStarFill } from 'react-icons/ri'

const products = [
	{
		imageSource: '/images/popular-1.png',
		title: 'Quistal Brown Plastic 3 in 1 combo kitchen',
		price: '₹15,999',
		discountPrice: '₹12,999',
	},
	{
		imageSource: '/images/popular-2.png',
		title: 'Nexora Multipurpose Steel Rack Organizer',
		price: '₹5,499',
		discountPrice: '₹3,999',
	},
	{
		imageSource: '/images/popular-3.png',
		title: 'Velora Wooden Modular Kitchen Shelf',
		price: '₹9,299',
		discountPrice: '₹7,499',
	},
	{
		imageSource: '/images/popular-4.png',
		title: 'UrbanHome Foldable Kitchen Table Set',
		price: '₹12,799',
		discountPrice: '₹10,499',
	},
	{
		imageSource: '/images/popular-5.png',
		title: 'CookSmart Wall Mounted Spice Rack',
		price: '₹3,199',
		discountPrice: '₹2,299',
	},
	{
		imageSource: '/images/popular-6.png',
		title: 'ModiCasa Acrylic Kitchen Storage Jars - Set of 6',
		price: '₹2,999',
		discountPrice: '₹1,999',
	},
]

function ProductDetails() {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex p-4 items-center bg-primary/30 text-sm gap-2'>
				<FaLocationDot className='text-2xl' />
				<div className='flex flex-col'>
					<h1 className='font-bold'>Mumbai 400020</h1>
					<div className='flex items-center'>
						<CgMenuMotion className='text-green-500' />
						<p className='font-bold'>Quick Delivery in 10 to 30 mins</p>
					</div>
				</div>
			</div>
			<div className='px-4'>
				<h1 className='text-primary text-lg font-bold'>Home One</h1>
				<p className='text-xs'>Home one Foil Print Plastic Soap Dispenser</p>
				<div className='flex justify-between items-center mt-1'>
					<div className='flex items-center gap-2'>
						<Rate allowHalf value={3.5} disabled />
						<p className='text-primary font-extrabold'>20</p>
					</div>
					<div className='flex items-center gap-1'>
						<SlHeart className='text-2xl text-gray-600' />
						<PiShareNetworkFill className='text-2xl text-gray-600' />
					</div>
				</div>
				<img
					src='/images/electro-general.jpg'
					className='w-[25%] mt-6'
					alt=''
				/>
				<Carousel
					autoplay={{ dotDuration: true }}
					className='mt-2'
					autoplaySpeed={5000}
					arrows
				>
					<img
						src='/images/product-details-1.jpg'
						className='w-full object-contain bg-white h-[300px] rounded-2xl'
						alt=''
					/>
					<img
						src='/images/product-details-2.jpeg'
						className='w-full object-contain bg-white h-[300px] rounded-2xl'
						alt=''
					/>
					<img
						src='/images/product-details-3.avif'
						className='w-full object-contain bg-white h-[300px] rounded-2xl'
						alt=''
					/>
					<img
						src='/images/product-details-4.avif'
						className='w-full object-contain bg-white h-[300px] rounded-2xl'
						alt=''
					/>
				</Carousel>
				<h1 className='mt-2 text-2xl'>Zaca Organic Hair Product 250ml</h1>
				<div className='flex items-center gap-2 mt-2'>
					<h1 className='mt-2 text-3xl font-bold'>₹540.00</h1>
					<div className='bg-gray-300 rounded-xl p-2 text-green-600 text-xl font-bold'>
						45% OFF
					</div>
				</div>
				<p className='text-gray-500 mt-2 text-xl'>
					<del className='font-bold text-2xl'>1200.00</del> (Incl.of all texes)
				</p>
				<hr className='mt-4' />
				<div className='my-4 flex flex-col'>
					<h1 className='text-2xl font-bold'>Offers(8)</h1>
					<div className='flex items-center gap-4 mt-2'>
						<img
							src='/svgs/bank.svg'
							className='h-8 w-12 object-contain'
							alt=''
						/>
						<div className='flex justify-between items-center w-full'>
							<div className='flex flex-col'>
								<h1 className='text-lg font-bold'>Bank Offers</h1>
								<h2 className='w-full text-xs truncate text-gray-500'>
									Get 5% cashback in care mall wallet on...
								</h2>
								<p className='text-gray-500 text-xs'>7 Offers Available</p>
							</div>
							<img
								src='/svgs/arrow-right-black.svg'
								className='h-6 object-contain'
								alt=''
							/>
						</div>
					</div>
					<div className='flex items-center gap-4 w-full justify-between mt-2'>
						<img
							src='/svgs/coupans.svg'
							className='h-8 w-12 object-contain'
							alt=''
						/>
						<div className='flex justify-between items-center w-full'>
							<div className='flex flex-col'>
								<h1 className='text-lg font-bold'>Use Coupons</h1>
								<h2 className='w-full truncate text-xs text-gray-500'>
									COUPONS
								</h2>
								<p className='text-gray-500 text-xs'>1 Offers Available</p>
							</div>
							<img
								src='/svgs/arrow-right-black.svg'
								className='h-6 object-contain'
								alt=''
							/>
						</div>
					</div>
					<button className='border border-gray-500 w-[40%] py-2 px-4 ml-12 text-primary text-lg font-bold mt-4 rounded-full'>
						view all
					</button>
				</div>
				<hr />
				<h1 className='mt-4 text-xl font-bold'>Why Choose Caremall?</h1>
				<div className='flex overflow-x-auto gap-4 mt-4'>
					<img
						src='/images/quality.jpg'
						className='w-[175px] object-contain'
						alt=''
					/>
					<img
						src='/images/guarantee.jpg'
						className='w-[175px] object-contain'
						alt=''
					/>
					<img
						src='/images/delivery.jpg'
						className='w-[175px] object-contain'
						alt=''
					/>
					<img
						src='/images/return-policy.jpg'
						className='w-[175px] object-contain'
						alt=''
					/>
				</div>
				<hr className='mt-4' />
				<div className='flex flex-col gap-2 py-4'>
					<h1 className='text-xl font-bold'>Deliver To</h1>
					<p className='flex items-center gap-2 text-sm font-bold'>
						400020{''}
						<span className='text-gray-500 capitalize'>mumbai</span>
					</p>
					<div className='flex items-center gap-1'>
						<p className='text-green-600 font-bold text-nowrap capitalize text-sm'>
							in stock
						</p>
						<div className='h-8 w-[1px] bg-gray-600'></div>
						<div className='relative h-8 w-[100px] flex'>
							<h1 className='m-auto z-20 text-md font-extrabold italic text-green-950'>
								Quick
							</h1>
							<img
								src='/svgs/quick.svg'
								className='h-8 absolute top-0 left-0 z-10'
								alt=''
							/>
						</div>
						<p className='text-sm truncate'>Delivery in 10 to 30 mins</p>
					</div>
				</div>
				<hr />
				<div className='py-4 gap-2'>
					<h1 className='text-xl font-bold'>Sold By</h1>
					<div className='flex items-center gap-1'>
						<h1 className='text-lg text-primary font-bold'>Reilance Retail</h1>
						<img
							src='/images/electro-general.jpg'
							className='w-[35%] object-contain'
							alt=''
						/>
					</div>
				</div>
				<hr />
				<div className='py-4 gap-2'>
					<h1 className='text-xl font-bold'>Features & Details</h1>
					<ul className='list-disc pl-8 text-sm text-gray-500'>
						<li>Pump Mechanism</li>
						<li>Hygienic</li>
						<li>Easy to Clean</li>
						<li>Generic name - Dispenser</li>
					</ul>
				</div>
				<hr />
				<div className='py-4 gap-2 flex flex-col'>
					<h1 className='text-xl font-bold'>Description</h1>
					<p className='text-gray-500 text-sm'>
						Home One Foil Plastic Soap Dispenser is A Device Designed to Store
						And Dispense Liquid Soap or Hand Sanitizer in a Convenient And
						Hygicnic Manner. it is a Common House Hold and Commerical Product
						Used in Bathrooms, Kitchens, Offices, and Other Public Spaces. The
						Dispenser Typically Consists of a Plastic Container With a Pump
						Mechanism that Allows Users to Dispense the Soap With a Simple Push
						or Press. So What are you Waiting for? Buy this Product Online
						Today!
					</p>
					<h1 className='text-xl font-bold mt-2'>Description:</h1>
					<p className='text-gray-500 text-sm'>
						Despite our attempts to provide you with the most accurate
						information possible, the actual packing and color of the product
						may sometimes vary. pleas read the label, directions and warnings
						carefully before use.
					</p>
				</div>
				<hr />
				<div className='py-4'>
					<h1 className='text-xl font-bold'>Product information</h1>
					<h1 className='font-bold text-lg text-gray-500'>
						GENERAL INFORMATION
					</h1>
					<div className='mt-6 flex flex-col gap-2 w-full'>
						<div className='flex gap-1 w-full'>
							<h1 className='w-[30%] capitalize text-sm font-bold'>brand</h1>
							<h1 className='w-[65%] capitalize text-sm text-gray-500'>
								Home One
							</h1>
						</div>
						<div className='flex gap-1 w-full'>
							<h1 className='w-[30%] capitalize text-sm font-bold'>
								Manufacture
							</h1>
							<h1 className='w-[65%] capitalize text-sm text-gray-500'>
								Polyset Plastic Pvt. Ltd.
							</h1>
						</div>
						<div className='flex gap-1 w-full'>
							<h1 className='w-[30%] capitalize text-sm font-bold'>
								Manufacturer Address
							</h1>
							<h1 className='w-[65%] capitalize text-sm text-gray-500'>
								Polyset Plastic Pvt. Ltd. 901-906, cello triumph, B-wing, 9th
								Floor, I B Patel Road, Goregaon (East), Mumbai - 40063
							</h1>
						</div>
						<div className='flex gap-1 w-full'>
							<h1 className='w-[30%] capitalize text-sm font-bold'>
								Manufacturer Email
							</h1>
							<h1 className='w-[65%] capitalize text-sm text-gray-500'>
								PPL@Polyset.net
							</h1>
						</div>
						<div className='flex gap-1 w-full'>
							<h1 className='w-[30%] capitalize text-sm font-bold'>
								Manufacturer Website
							</h1>
							<h1 className='w-[65%] capitalize text-sm text-gray-500'>
								www.polyset.net
							</h1>
						</div>
					</div>
					<button className='capitalize py-2 px-4 text-lg font-bold text-primary border border-gray-500 rounded-full mt-4'>
						More Details
					</button>
				</div>
				<hr />
				<div className='py-4 gap-2'>
					<h1 className='text-xl font-bold'>Return Policy</h1>
					<p className='text-gray-500 text-sm'>
						This product is returnable within 7 days. For more details, please
						refer to the policy <span className='text-primary'>here</span>
					</p>
				</div>
				<hr />
				<div className='py-4 flex items-center justify-between'>
					<h1 className='text-lg font-bold'>Article ID: 493827594</h1>
					<img src='/svgs/copy.svg' className='size-4 object-contain' alt='' />
				</div>
			</div>
			<div className='h-2 bg-gray-300 w-full'></div>
			<div className='px-4 flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<h1 className='text-lg font-bold'>Frequently Bought Together</h1>
					<div className='grid grid-flow-col gap-2 overflow-x-auto py-2'>
						{products.map((product, i) => (
							<ProductCard key={i} product={product} />
						))}
					</div>
				</div>
			</div>
			<div className='h-2 bg-gray-300 w-full mt-6'></div>
			<div className='px-4 flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<h1 className='text-lg font-bold'>Similar Products</h1>
					<div className='grid grid-flow-col gap-2 overflow-x-auto py-2'>
						{products.map((product, i) => (
							<ProductCard key={i} product={product} />
						))}
					</div>
				</div>
				<hr />
				<div className='flex flex-col mt-4 py-4 gap-6'>
					<div className='flex justify-between items-center'>
						<h1 className='font-extrabold text-nowrap text-sm'>
							Questions & Answers
						</h1>
						<button className='rounded-full text-sm px-4 py-1 flex items-center gap-1 border text-primary font-extrabold border-gray-500'>
							<HiQuestionMarkCircle />
							<p className='text-nowrap'>Ask a question</p>
						</button>
					</div>
					<div className='p-4 bg-gray-300 rounded-2xl flex items-center gap-2 font-bold text-primary'>
						<PiWarningCircleFill />
						<p className='text-sm'>No question available for this product.</p>
					</div>
				</div>
				<hr />
				<div className='py-4'>
					<div className='grid grid-cols-2 gap-2'>
						<div className='flex flex-col gap-2 justify-between'>
							<h1 className='font-bold text-md'>Rating & Reviews</h1>
							<h1 className='text-3xl font-bold'>3.5</h1>
							<Rate allowHalf value={3.5} disabled />
						</div>
						<div className='flex flex-col gap-[1px]'>
							<div className='flex items-center text-gray-500 gap-1'>
								5<RiStarFill />
								<div className='w-full bg-gray-200 flex items-start overflow-hidden h-4 rounded'>
									<div className='h-full w-[30%] bg-amber-400'></div>
								</div>
							</div>
							<div className='flex items-center text-gray-500 gap-1'>
								4<RiStarFill />
								<div className='w-full bg-gray-200 flex items-start overflow-hidden h-4 rounded'>
									<div className='h-full w-[60%] bg-amber-400'></div>
								</div>
							</div>
							<div className='flex items-center text-gray-500 gap-1'>
								3<RiStarFill />
								<div className='w-full bg-gray-200 flex items-start overflow-hidden h-4 rounded'>
									<div className='h-full w-[40%] bg-amber-400'></div>
								</div>
							</div>
							<div className='flex items-center text-gray-500 gap-1'>
								2<RiStarFill />
								<div className='w-full bg-gray-200 flex items-start overflow-hidden h-4 rounded'>
									<div className='h-full w-[20%] bg-amber-400'></div>
								</div>
							</div>
							<div className='flex items-center text-gray-500 gap-1'>
								1<RiStarFill />
								<div className='w-full bg-gray-200 flex items-start overflow-hidden h-4 rounded'>
									<div className='h-full w-[10%] bg-amber-400'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col py-4 bg-primary/10 p-4 gap-1 rounded'>
					<h1 className='font-bold text-lg'>Review this product</h1>
					<p className='text-gray-500 text-sm'>
						Help others make an informed decision!
					</p>
					<Rate allowHalf />
				</div>
				<div className='py-4 gap-2'>
					<h1 className='text-xl font-bold text-primary'>Customers say</h1>
					<p className='text-gray-500 text-sm'>
						Customers appreciate businesses that provide reliability,
						efficiency, and exceptional service. A satisfied customer speaks
						volumes through their trust, loyalty, and positive experiences.
						Whether it's seamless transactions, personalized support, or simply
						exceeding expectations, the best customer feedback is reflected in
						their continued engagement and recommendations. "A happy customer is
						the best business strategy of all."
					</p>
				</div>
				<div className='py-4 gap-2'>
					<h1 className='text-xl font-bold text-primary'>Review with images</h1>
					<div className='grid grid-flow-col overflow-x-auto gap-2'>
						<div className='size-[130px] bg-amber-600'></div>
						<div className='size-[130px] bg-red-800'></div>
						<div className='size-[130px] bg-green-800'></div>
						<div className='size-[130px] bg-yellow-800'></div>
						<div className='size-[130px] bg-purple-800'></div>
					</div>
				</div>
				<div className='p-4'>
					<button className='rounded-full px-6 w-full py-2 text-primary text-xl font-bold border border-gray-500'>
						Write a review
					</button>
				</div>
			</div>
			<div className='h-2 bg-gray-300 w-full mt-6'></div>
			<div className='sticky bottom-0 shadow-2xl shadow-black bg-white z-30 p-4 flex justify-between'>
				<div>
					<h1 className='text-sm'>Explore More!</h1>
					<h1 className='text-lg font-bold text-primary'>View Categories </h1>
				</div>
				<button className='bg-primary text-white px-6 capitalize py-2 rounded-full text-md text-nowrap font-bold'>
					add to cart
				</button>
			</div>
		</div>
	)
}

export default ProductDetails
