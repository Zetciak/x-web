// >> Modules
import styles from './pricing.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';
import Dots from '@/components/overlay/dots/dots';

import logo from '@/public/logo.svg';
import leftShape from '@/public/images/participate/leftShape.png';
import rightShape from '@/public/images/participate/rightShape.png';
import bg from '@/public/images/pricing/bg.png';
import leftImg from '@/public/images/howItWorks/leftImg.png';

// >> Script
export default function Pricing(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.bg}>
					<Image
						src={bg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<Dots type="pricing1" />
				<div className={styles.top}>
					<div className={styles.logo}>
						<Image
							src={logo}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<h1 className={styles.title}>
						<span className={design.text_shadow}>
							<TextShadow id="pricingTitle" />
							Pircing
						</span>
					</h1>

					<div className={styles.square}></div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.left}>
						<Image
							src={leftImg}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.onePoint}>
							<div className={styles.number}>
								<Typography>01</Typography>
							</div>
							<div className={styles.texts}>
								<Typography className={styles.topText}>
									Task Submission and Distribution
								</Typography>
								<Typography className={styles.bottomText}>
									Clients submit their computational tasks to
									Node Al, where they are instantly
									distributed across our secure network of
									high-performance Al nodes.
								</Typography>
							</div>
						</div>
						<div className={styles.onePoint}>
							<div className={styles.number}>
								<Typography>02</Typography>
							</div>
							<div className={styles.texts}>
								<Typography className={styles.topText}>
									Processing and Verification
								</Typography>
								<Typography className={styles.bottomText}>
									The tasks are processed in parallel,
									harnessing the power of the L1 Blockchain
									for secure, efficient, and verifiable
									computation.
								</Typography>
							</div>
						</div>
						<div className={styles.onePoint}>
							<div className={styles.number}>
								<Typography>03</Typography>
							</div>
							<div className={styles.texts}>
								<Typography className={styles.topText}>
									Secure Delivery
								</Typography>
								<Typography className={styles.bottomText}>
									Verified results are encrypted and returned
									to the clients promptly. ensuring
									confidentiality and integrity.
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
