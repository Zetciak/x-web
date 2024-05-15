// >> Modules
import styles from './hero.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Dots from '@/components/overlay/dots/dots';

import chip from '@/public/icons/chip.svg';

// >> Script
export default function Hero(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Dots type="hero" />
				<Dots type="hero2" />
				<div className={styles.info}>
					<div className={styles.infoInside}>
						<Image
							src={chip}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>
							Unmatched Compute Power for Large-Scale AI Startups
						</Typography>
					</div>
				</div>
				<h1 className={styles.title}>The Internet of GPUs</h1>

				<div className={styles.buttons}>
					<Button
						className={`${design.button_pinkGradient} ${styles.btn}`}
						href="https://google.com"
						target="_blank"
						disableRipple
						data-value="left"
					>
						<Typography>Deploy Now</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}
