// >> Modules
import styles from './bottomCenterAnim.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';

// >> Script
export default function BottomCenterAnim() {
	const [currentIndex, setCurrentIndex] = useState(2);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const elements = [
		{ value: 15000 },
		{ value: 10000 },
		{ value: 25000 },
		{ value: 5000 },
		{ value: 2200 },
	];

	const handleNext = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setTimeout(() => setIsTransitioning(false), 200);
		setCurrentIndex((prevIndex) =>
			prevIndex === elements.length - 1 ? 0 : prevIndex + 1
		);
	};

	const getClassName = (index) => {
		const positions = [
			'top-hidden',
			'top',
			'center',
			'bottom',
			'bottom-hidden',
		];
		const adjustedIndex =
			(index - currentIndex + elements.length) % elements.length;
		return positions[adjustedIndex];
	};

	return (
		<div className={styles.feature}>
			<Typography className={styles.bottomTitle}>
				Track & Claim Earnings.
			</Typography>
			<Typography className={styles.bottomDesc}>Your rewards.</Typography>

			<div className={styles.slider}>
				{elements.map((element, index) => (
					<div
						key={index}
						className={styles.oneElement}
						data-class={getClassName(index)}
					>
						<Typography className={styles.value}>
							${element.value.toLocaleString('en-US')}
						</Typography>
						<Button
							onClick={() => {
								handleNext();
							}}
							className={styles.claimBtn}
						>
							<Typography>Claim</Typography>
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}
