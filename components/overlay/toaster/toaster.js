// >> Modules
import styles from './toaster.module.scss';
import design from '@/styles/design_system.module.scss';
import { Toaster } from 'react-hot-toast';

// >> Script
export default function CustomToaster(props) {
	return (
		<Toaster
			position="top-center"
			reverseOrder={false}
			toastOptions={{
				style: {
					border: '1px solid rgba(255, 255, 255, 0.08)',
					background: 'rgba(255, 255, 255, 0.04)',
					boxShadow:
						'0px 0px 48px 0px rgba(255, 255, 255, 0.08) inset',

					color: '#fff',
					borderRadius: '8px',
					backdropFilter: 'blur(10px)',
					maxWidth: '90%',
					padding: '6px 16px',
					fontWeight: '400',
				},
			}}
		/>
	);
}
