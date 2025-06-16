// >> Modules
// import { Particles } from '@blackbox-vision/react-particles';
import styles from './textShadow.module.scss';
import design from '@/styles/design_system.module.scss';

// >> Script
export default function TextShadow(props) {
	return (
		<div className={styles.dots}>
			{/* <Particles
				id={props.id || ''}
				width="100%"
				height="100%"
				params={{
					particles: {
						number: { value: 10, density: { enable: false } },
						size: {
							value: 2,
							random: true,
							anim: { speed: 10, size_min: 0.3 },
						},
						move: {
							speed: 1.5,
						},
						line_linked: { enable: false },
					},
				}}
			/> */}
		</div>
	);
}
