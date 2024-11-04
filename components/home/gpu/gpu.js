// >> Modules
import styles from './gpu.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';
import Dots from '@/components/overlay/dots/dots';

import gpuBg from '@/public/images/gpu/gpuBg.png';
import gpu1 from '@/public/images/gpu/gpu1.png';
import gpu2 from '@/public/images/gpu/gpu2.png';
import gpu3 from '@/public/images/gpu/gpu3.png';
import logo from '@/public/logo.svg';

// >> Script
export default function Gpu(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Dots type="gpu1" />
				<Dots type="gpu2" />
				<div className={styles.gpu}>
					<div className={styles.gpuBg}>
						<Image
							src={gpuBg}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.oneGpu} data-number={1}>
						<div className={styles.gpu1}>
							<Image
								src={gpu1}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.gpu2}>
							<Image
								src={gpu2}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.gpu3}>
							<Image
								src={gpu3}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
					<div className={styles.oneGpu} data-number={2}>
						<div className={styles.gpu1}>
							<Image
								src={gpu1}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.gpu2}>
							<Image
								src={gpu2}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.gpu3}>
							<Image
								src={gpu3}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
					<div className={styles.oneGpu} data-number={3}>
						<div className={styles.gpu1}>
							<Image
								src={gpu1}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.gpu2}>
							<Image
								src={gpu2}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.gpu3}>
							<Image
								src={gpu3}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
					<div className={styles.oneGpu} data-number={4}>
						<div className={styles.gpu1}>
							<Image
								src={gpu1}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.gpu2}>
							<Image
								src={gpu2}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.gpu3}>
							<Image
								src={gpu3}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
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
							Power up your
						</span>{' '}
						<span className={design.text_shadow}>
							<TextShadow id="gpuTitle" />
							Generative AI
						</span>{' '}
						<span className={design.text_gradient}>
							with a global pool of GPU resources!
						</span>
					</h1>

					<div className={styles.buttons}>
						<Button
							className={`${design.button_blueGradient} ${styles.btn}`}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>Launch</Typography>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
