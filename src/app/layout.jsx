import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import './globals.css'
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<title>Care Mall</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'
					rel='stylesheet'
				></link>
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
