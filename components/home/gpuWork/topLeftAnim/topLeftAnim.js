// >> Modules
import styles from './topLeftAnim.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';

import stopIcon from '@/public/images/gpuWork/stopIcon.svg';

// >> Script
export default function TopLeftAnim() {
	const [running1, setRunning1] = useState(true);
	const [running2, setRunning2] = useState(true);
	const [running3, setRunning3] = useState(false);

	return (
		<div className={styles.feature}>
			<div className={styles.bg}></div>
			<Typography className={styles.title}>
				Connect more services & increase your earnings
			</Typography>
			<div className={styles.proceses}>
				<div className={styles.oneProcess} data-running={running1}>
					<div className={styles.dot}></div>
					<Typography className={styles.statusTitle}>
						Status:
					</Typography>
					<Typography className={styles.statusDesc}>
						{running1 === true ? 'Running' : 'Not installed'}
					</Typography>
					<Button
						className={styles.btn}
						disableRipple
						onClick={() => {
							setRunning1(!running1);
						}}
					>
						<Typography>
							{running1 === true
								? 'Stop service'
								: 'Connect Service'}
						</Typography>

						{running1 === true ? (
							<Image
								src={stopIcon}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						) : null}
					</Button>
				</div>
				<div className={styles.oneProcess} data-running={running2}>
					<div className={styles.dot}></div>
					<Typography className={styles.statusTitle}>
						Status:
					</Typography>
					<Typography className={styles.statusDesc}>
						{running2 === true ? 'Running' : 'Not installed'}
					</Typography>
					<Button
						className={styles.btn}
						disableRipple
						onClick={() => {
							setRunning2(!running2);
						}}
					>
						<Typography>
							{running2 === true
								? 'Stop service'
								: 'Connect Service'}
						</Typography>

						{running2 === true ? (
							<Image
								src={stopIcon}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						) : null}
					</Button>
				</div>
				<div className={styles.oneProcess} data-running={running3}>
					<div className={styles.dot}></div>
					<Typography className={styles.statusTitle}>
						Status:
					</Typography>
					<Typography className={styles.statusDesc}>
						{running3 === true ? 'Running' : 'Not installed'}
					</Typography>
					<Button
						className={styles.btn}
						disableRipple
						onClick={() => {
							setRunning3(!running3);
						}}
					>
						<Typography>
							{running3 === true
								? 'Stop service'
								: 'Connect Service'}
						</Typography>

						{running3 === true ? (
							<Image
								src={stopIcon}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						) : null}
					</Button>
				</div>
			</div>
		</div>
	);
}
