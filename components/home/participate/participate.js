// >> Modules
import styles from './participate.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';

import logo from '@/public/logo.svg';
import leftShape from '@/public/images/participate/leftShape.png';
import rightShape from '@/public/images/participate/rightShape.png';
import xShapes from '@/public/images/participate/xShapes.png';

// >> Script
export default function Participate(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.left}>
					<div className={styles.leftShape}>
						<Image
							src={leftShape}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.rightShape}>
						<Image
							src={rightShape}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.onePoint}>
						<div className={styles.number}>
							<Typography>01</Typography>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.topText}>
								Installation & Preparation
							</Typography>
							<Typography className={styles.bottomText}>
								Download the NodeGPT dapp to simplify CPU/GPU
								partitioning to be dedicated to the network as a
								node.
							</Typography>
						</div>
					</div>
					<div className={styles.onePoint}>
						<div className={styles.number}>
							<Typography>02</Typography>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.topText}>
								Join Network
							</Typography>
							<Typography className={styles.bottomText}>
								Connect to the NodeGPT network to make GPU
								resources available for use in the resource
								marketplace setting your pricing.
							</Typography>
						</div>
					</div>
					<div className={styles.onePoint}>
						<div className={styles.number}>
							<Typography>03</Typography>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.topText}>
								Earn Rewards
							</Typography>
							<Typography className={styles.bottomText}>
								Earn rewards in $NODE when your computer
								completes assigned tasks in the open marketplace
								based on the demand and supply of resources.
							</Typography>
						</div>
					</div>
				</div>
				<div className={styles.right}>
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
						<span className={design.text_gradient}>How to</span>{' '}
						<span className={design.text_shadow}>
							<TextShadow id="participateTitle" />
							Participate
						</span>
					</h1>

					<Typography className={styles.desc}>
						Join a global decentralised computation machine to power
						the next AI revolution & earn rewards.
					</Typography>

					<div className={styles.square}></div>
					<div className={styles.xshapes}>
						<Image
							src={xShapes}
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
