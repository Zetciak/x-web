// >> Styles
import Head from 'next/head';

// >> Components
import Home from '@/components/home/home';

const name = 'X - The Internet of GPUs';

// >> Script
export default function Page(props) {
	// >> Render
	return (
		<>
			<Head>
				<title>{name}</title>
			</Head>

			<div className="base">
				<Home />
			</div>
		</>
	);
}
