// >> Modules
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useEffect } from 'react';
import CustomToaster from '@/components/overlay/toaster/toaster';

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
			<CustomToaster />
			<Component {...pageProps} />
		</StyledEngineProvider>
	);
}

export default MyApp;
