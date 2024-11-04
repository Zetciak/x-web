// >> Modules
import styles from './topLeftAnim.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import { useRive } from '@rive-app/react-canvas';

// >> Script
export default function TopLeftAnim() {
	const { RiveComponent: Status1 } = useRive({
		src: '/riv/statusOne.riv',
		stateMachines: 'State Machine 1',
		autoplay: true,
	});

	const { RiveComponent: Status2 } = useRive({
		src: '/riv/statusOne.riv',
		stateMachines: 'State Machine 1',
		autoplay: true,
	});

	const { RiveComponent: Status3 } = useRive({
		src: '/riv/statusOne.riv',
		stateMachines: 'State Machine 1',
		autoplay: true,
	});

	return (
		<div className={styles.feature}>
			<div className={styles.bg}></div>
			<Typography className={styles.title}>
				Connect more GPU Partitions & increase your earnings.
			</Typography>
			<div className={styles.proceses}>
				<div className={styles.oneProcess}>
					<Status1 className={styles.rive} />
				</div>
				<div className={styles.oneProcess}>
					<Status2 className={styles.rive} />
				</div>
				<div className={styles.oneProcess}>
					<Status3 className={styles.rive} />
				</div>
			</div>
		</div>
	);
}
