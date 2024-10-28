// >> Modules
import styles from './bottomRightAnim.module.scss';
import design from '@/styles/design_system.module.scss';
import { useRive } from '@rive-app/react-canvas';

// >> Script
export default function BottomRightAnim() {
	const { RiveComponent } = useRive({
		src: '/riv/monitorScore.riv',
		stateMachines: 'State Machine 1',
		autoplay: true,
	});

	return (
		<div className={styles.feature}>
			<RiveComponent className={styles.rive} />
		</div>
	);
}
