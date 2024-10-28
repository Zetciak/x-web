// >> Modules
import styles from './bottomLeftAnim.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useCountUp } from 'react-countup';

import bottomLeftFilled from '@/public/images/gpuWork/bottomLeftFilled.png';
import bottomLeftNotFilled from '@/public/images/gpuWork/bottomLeftNotFilled.png';
import arrow from '@/public/images/gpuWork/arrow.svg';

// >> Script
export default function BottomLeftAnim() {
	const [width, setWidth] = useState(50.3);

	const countUpRef1 = useRef(null);
	const { update: updateRef1 } = useCountUp({
		ref: countUpRef1,
		start: 506.14,
		end: 506.14,
		duration: 1,
		decimals: 2,
		suffix: ' MB/S',
	});

	const countUpRef2 = useRef(null);
	const { update: updateRef2 } = useCountUp({
		ref: countUpRef2,
		start: 620.72,
		end: 620.72,
		duration: 1,
		decimals: 2,
		suffix: '',
	});

	const countUpRef3 = useRef(null);
	const { update: updateRef3 } = useCountUp({
		ref: countUpRef3,
		start: 500.4,
		end: 500.4,
		duration: 1,
		decimals: 2,
		suffix: '',
	});

	useEffect(() => {
		const updateWidth = () => {
			let randomChange = Math.random() * 4 - 2;
			let newWidth = Math.max(20, Math.min(80, width + randomChange));

			setWidth(newWidth);
			updateRef1((newWidth / 100) * 1000);
			updateRef2((newWidth / 100) * 1200);
			updateRef3((newWidth / 100) * 800);
		};

		const intervalId = setInterval(updateWidth, 500);

		return () => clearInterval(intervalId);
	}, [updateRef1, updateRef2, updateRef3, width]);

	return (
		<div className={styles.feature}>
			<Typography className={styles.bottomTitle}>
				Track Connectivity Performance
			</Typography>
			<Typography className={styles.bottomDesc}>
				Connection Speed
			</Typography>

			<div className={styles.bottom}>
				<div className={styles.bg}>
					<Image
						src={bottomLeftNotFilled}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>

					<div
						className={styles.filledBg}
						style={{ width: `${width}%` }}
					>
						<Image
							src={bottomLeftFilled}
							alt=""
							quality={99}
							priority={true}
							className="imageCover"
						/>
					</div>
				</div>
				<div className={styles.topSpeed}>
					<div className={styles.topSpeedInside}>
						<Typography ref={countUpRef1}></Typography>
					</div>
				</div>
				<div className={styles.bottomSpeeds}>
					<div className={styles.oneSpeed}>
						<Typography
							className={styles.topValue}
							ref={countUpRef2}
						></Typography>
						<div className={styles.bottomValue}>
							<Typography>Download MB/s</Typography>
							<Image
								src={arrow}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
					<div className={styles.oneSpeed} data-type="upload">
						<Typography
							className={styles.topValue}
							ref={countUpRef3}
						></Typography>
						<div className={styles.bottomValue}>
							<Typography>Upload MB/s</Typography>
							<Image
								src={arrow}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
