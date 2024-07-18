// >> Modules
import styles from './gpuWork.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';

import logo from '@/public/logo.svg';
import gpuWorkBg from '@/public/images/gpuWork/gpuBg.png';

import BottomLeftAnim from './bottomLeftAnim/bottomLeftAnim';
import BottomCenterAnim from './bottomCenterAnim/bottomCenterAnim';
import BottomRightAnim from './bottomRightAnim/bottomRightAnim';
import TopLeftAnim from './topLeftAnim/topLeftAnim';
import TopRightAnim from './topRightAnim/topRightAnim';

// >> Script
export default function GpuWork(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.gpuWorkBg}>
					<Image
						src={gpuWorkBg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.texts}>
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
						<span className={design.text_gradient}>
							We put your
						</span>{' '}
						<span className={design.text_shadow}>
							<TextShadow id="gpuWorkTitle" />
							GPU
						</span>{' '}
						<span className={design.text_gradient}>to work</span>
					</h1>

					<Typography className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Etiam eget auctor ante. Aenean viverra magna eget
						feugiat feugiat.
					</Typography>

					<div className={styles.square}></div>
				</div>
				<div className={styles.features}>
					<div className={styles.topRow}>
						<TopLeftAnim />
						<TopRightAnim />
					</div>
					<div className={styles.bottomRow}>
						<BottomLeftAnim />
						<BottomCenterAnim />
						<BottomRightAnim />
					</div>
				</div>
			</div>
		</div>
	);
}
