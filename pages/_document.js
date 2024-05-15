// >> Imports
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const name = 'X - The Internet of GPUs';
const desc =
	'Develop, train, and deploy Al applications on our decentralized cloud. Perfect for Al developers. A powerful no-fuss environment that "just works."';
const img = 'https://i.imgur.com/tf9lkR5.png';
const themeColor = '#000000';

// >> Script
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content={themeColor} />

					<meta property="og:type" content="website" />

					<meta property="og:title" content={name} />
					<meta name="twitter:title" content={name} />

					<meta name="description" content={desc} />
					<meta property="og:description" content={desc} />
					<meta name="twitter:description" content={desc} />

					<meta property="og:image" content={img} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={img} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
