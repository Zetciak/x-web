// >> Modules
import styles from './hero.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Dots from '@/components/overlay/dots/dots';
import TextShadow from '@/components/overlay/textShadow/textShadow';

import chip from '@/public/images/hero/chip.svg';
import heroBg from '@/public/images/hero/heroBg.png';

// >> Script
export default function Hero(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Dots type="hero1" />
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
				<h1 className={styles.title}>
					<span className={design.text_gradient}>
						The Internet of
					</span>{' '}
					<span className={design.text_shadow}>
						<TextShadow id="heroTitle" />
						GPUs
					</span>
				</h1>

				<div className={styles.buttons}>
					<Button
						className={`${design.button_blueGradient} ${styles.btn}`}
						href="https://google.com"
						target="_blank"
						disableRipple
					>
						<Typography>Deploy Now</Typography>
					</Button>
				</div>

				<h1 className={styles.bgTitle} data-text="CHANGE ME">
					<div className={styles.titleBg}>
						<Image
							src={heroBg}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<span className={styles.shadows}></span>
					CHANGE ME
				</h1>
			</div>
		</div>
	);
}
