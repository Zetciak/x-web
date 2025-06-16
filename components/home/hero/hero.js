// >> Modules
import styles from './hero.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import BuyBox from './buyBox/buyBox';
import Dots from '@/components/overlay/dots/dots';
import TextShadow from '@/components/overlay/textShadow/textShadow';

import chip from '@/public/images/hero/chip.svg';
import heroBg from '@/public/images/hero/heroBg.png';

// >> Script
export default function Hero(props) {
	return (
		<div className={styles.section}>
			<div className={styles.heroBg}>
				<Image
					src={heroBg}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
				{/* <video
					src="./heroRobot.mp4"
					autoPlay
					loop
					muted
					playsInline
					className={styles.videoDiv}
				></video> */}
			</div>
			<div className={styles.anim1}></div>
			<div className={styles.anim2}></div>
			<div className={styles.inside}>
				<Dots type="hero1" />

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
							Limitless Computational Power for Scalable GPTs.
						</Typography>
					</div>
				</div>
				<h1 className={styles.title}>
					<span className={design.text_gradient}>The </span>{' '}
					<span className={design.text_shadow}>
						<TextShadow id="heroTitle" />
						AI Power{' '}
					</span>
					<span className={design.text_gradient}>Network</span>
				</h1>

				<div className={styles.buttons}>
					<Button
						className={`${design.button_blueGradient} ${styles.btn}`}
						href="https://google.com"
						target="_blank"
						disableRipple
					>
						<div
							className={design.button_blueGradient_bg_before}
							data-type="long"
						></div>
						<div
							className={design.button_blueGradient_bg}
							data-type="long"
						></div>
						<Typography>Join Network</Typography>
					</Button>
				</div>
				<BuyBox />
			</div>
		</div>
	);
}
