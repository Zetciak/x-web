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
								Buy $GPU
							</Typography>
							<Typography className={styles.bottomText}>
								Copy the contract address, go to Uniswap and
								swap ETH to GPU
							</Typography>
						</div>
					</div>
					<div className={styles.onePoint}>
						<div className={styles.number}>
							<Typography>02</Typography>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.topText}>
								Go to NODEAI DAPP
							</Typography>
							<Typography className={styles.bottomText}>
								Visit the NodeAl dApp and view the staking pool
							</Typography>
						</div>
					</div>
					<div className={styles.onePoint}>
						<div className={styles.number}>
							<Typography>03</Typography>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.topText}>
								Stake $GPU and earn $ETH
							</Typography>
							<Typography className={styles.bottomText}>
								Stake your $GPU tokens and earn a share of the
								monthly revenue
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
							praticipate
						</span>
					</h1>

					<Typography className={styles.desc}>
						Here are the step-by-step instructions to participate in
						our revenue-sharing ecosystem.
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
