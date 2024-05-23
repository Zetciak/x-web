// >> Modules
import styles from './gpuWork.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';

import logo from '@/public/logo.svg';
import gpuWorkBg from '@/public/images/gpuWork/bg.png';
import feature1 from '@/public/images/gpuWork/feature1.png';
import feature2 from '@/public/images/gpuWork/feature2.png';
import feature3 from '@/public/images/gpuWork/feature3.png';
import feature4 from '@/public/images/gpuWork/feature4.png';
import feature5 from '@/public/images/gpuWork/feature5.png';

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
						<div className={styles.oneFeature}>
							<Image
								src={feature1}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.oneFeature}>
							<Image
								src={feature2}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
					<div className={styles.bottomRow}>
						<div className={styles.oneFeature}>
							<Image
								src={feature3}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.oneFeature}>
							<Image
								src={feature4}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.oneFeature}>
							<Image
								src={feature5}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
