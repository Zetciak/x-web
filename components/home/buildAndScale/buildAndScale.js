// >> Modules
import styles from './buildAndScale.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

import logo from '@/public/logo.svg';
import bgImage from '@/public/images/buildAndScale/bgImage.png';
import shadowBg from '@/public/images/buildAndScale/shadowBg.png';

// >> Script
export default function BuildAndScale(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.bg}>
					<div className={styles.bgImg}>
						<Image
							src={bgImage}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.shadowBg}>
						<Image
							src={shadowBg}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.stripesMask}>
						<div className={styles.square} data-number="1"></div>
						<div className={styles.square} data-number="2"></div>
						<div className={styles.square} data-number="3"></div>
						<div className={styles.square} data-number="4"></div>
					</div>
					<div className={styles.centerMask}>
						<div className={styles.numbers}></div>
					</div>
				</div>

				<div className={styles.logo}>
					<Image
						src={logo}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<h1 className={styles.title}>Build and scale AI Models</h1>

				<Typography className={styles.desc}>
					Develop, train, and deploy Al applications on our
					decentralized cloud. Perfect for Al developers. A powerful
					no-fuss environment that &quot;just works.&quot;
				</Typography>

				<div className={styles.buttons}>
					<Button
						className={`${design.button_blueGradient} ${styles.btn}`}
						href="https://google.com"
						target="_blank"
						disableRipple
					>
						<Typography>Sign Up Now</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}
