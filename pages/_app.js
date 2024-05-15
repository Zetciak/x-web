// >> Modules
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useEffect } from 'react';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import '@/styles/variables.scss';
import '@/styles/fonts.css';
import '@/styles/globals.scss';

// >> Script
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({ duration: 700, once: true });
	}, []);

	// >> Render
	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />

			<Component {...pageProps} />
		</StyledEngineProvider>
	);
}

export default MyApp;
