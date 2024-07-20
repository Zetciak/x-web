// >> Modules
import styles from './bottomRightAnim.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useCountUp } from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

import bottomRightFilled from '@/public/images/gpuWork/bottomRightFilled.png';
import bottomRightNotFilled from '@/public/images/gpuWork/bottomRightNotFilled.png';

// >> Script
export default function BottomRightAnim() {
	const [visible, setVisible] = useState(false);

	const countUpRef = useRef(null);
	const { start, update } = useCountUp({
		ref: countUpRef,
		start: 0,
		end: 0,
		duration: 3,
		decimals: 0,
		suffix: '%',
		useEasing: false,
	});

	const changeVisible = (isVisible) => {
		if (visible === false && isVisible === true) {
			setVisible(true);
			start();
			update(100);
		}
	};

	return (
		<ReactVisibilitySensor
			onChange={(isVisible) => {
				changeVisible(isVisible);
			}}
		>
			<div className={styles.feature}>
				<Typography className={styles.bottomTitle}>
					Monitor Your Reputation Score
				</Typography>

				<div className={styles.bottom}>
					<div className={styles.notFilled}>
						<Image
							src={bottomRightNotFilled}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.filled} data-fill={visible}>
						<Image
							src={bottomRightFilled}
							alt=""
							quality={99}
							priority={true}
							className="imageCover"
						/>
					</div>
				</div>

				<div className={styles.bottomTexts}>
					<Typography className={styles.topText}>
						Uptime Percentage
					</Typography>
					<Typography
						className={styles.percentage}
						ref={countUpRef}
					></Typography>
					<div className={styles.hightBtn}>
						<div className={styles.hightBtnInside}>
							<Typography>HIGH</Typography>
						</div>
					</div>
				</div>
			</div>
		</ReactVisibilitySensor>
	);
}
