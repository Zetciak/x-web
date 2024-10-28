// >> Modules
import styles from './bottomLeftAnim.module.scss';
import design from '@/styles/design_system.module.scss';
import { useRive } from '@rive-app/react-canvas';

// >> Script
export default function BottomLeftAnim() {
	const { RiveComponent } = useRive({
		src: '/riv/trackPerformance.riv',
		stateMachines: 'State Machine 1',
		autoplay: true,
	});

	return (
		<div className={styles.feature}>
			<RiveComponent className={styles.rive} />
		</div>
	);
}
