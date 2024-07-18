// >> Modules
import styles from './topRightAnim.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import refreshIcon from '@/public/images/gpuWork/refreshIcon.svg';
import clockIcon from '@/public/images/gpuWork/clockIcon.svg';

// >> Script
export default function TopRightAnim() {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			const intervalId = setInterval(() => {
				setCurrentDateTime(new Date());
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [isClient]);

	const formatDate = (date) => {
		const options = { month: 'short', day: 'numeric' };
		const formattedDate = date.toLocaleDateString('en-US', options);
		const parts = formattedDate.split(' ');
		return `${parts[0]}, ${parts.slice(1).join(' ')}`;
	};

	const formatTime = (date) => {
		const options = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
		};
		return date.toLocaleTimeString(undefined, options);
	};

	if (!isClient) {
		return null;
	}

	return (
		<div className={styles.feature}>
			<div className={styles.bg}></div>
			<Typography className={styles.title}>
				Keep track of all your previous Jobs
			</Typography>
			<div className={styles.proceses}>
				<div className={styles.oneStatus}>
					<div className={styles.statusLeft}>
						<Typography className={styles.leftTitle}>
							In Progress
						</Typography>
						<Typography className={styles.leftDesc}>
							Your Job is currently in Progress
						</Typography>
					</div>
					<div className={styles.statusRight} data-loading={true}>
						<Typography>Job status</Typography>
						<Image
							src={refreshIcon}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
				</div>
				<div className={styles.line}></div>
				<div className={styles.oneStatus}>
					<div className={styles.statusLeft}>
						<Typography className={styles.leftTitle}>
							{formatDate(currentDateTime)}
						</Typography>
						<Typography className={styles.leftDesc}>
							{formatTime(currentDateTime)}
						</Typography>
					</div>
					<div className={styles.statusRight}>
						<Typography>Start Date & Time</Typography>
						<Image
							src={clockIcon}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
