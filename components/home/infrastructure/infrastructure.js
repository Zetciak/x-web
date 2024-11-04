// >> Modules
import styles from './infrastructure.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';
import { useRive } from '@rive-app/react-canvas';

import Dots from '@/components/overlay/dots/dots';

import logo from '@/public/logo.svg';
import infrastructureBg from '@/public/images/infrastructure/bg.png';
import leftDiagram from '@/public/images/infrastructure/leftDiagram.png';
import infrastructureIcon from '@/public/images/infrastructure/icon.svg';
import rightDiagram from '@/public/images/infrastructure/rightDiagram.png';

// >> Script
export default function Infrastructure(props) {
	const { RiveComponent } = useRive({
		src: '/riv/savePerMonth.riv',
		stateMachines: 'State Machine 1',
		autoplay: true,
	});

	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Dots type="infrastructure1" />
				<div className={styles.infrastructureBg}>
					<Image
						src={infrastructureBg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.topTexts}>
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
							Maximize Your
						</span>{' '}
						<span className={design.text_shadow}>
							<TextShadow id="infrastructureTitle" />
							AI Potential.
						</span>
					</h1>

					<Typography className={styles.desc}>
						Power up your generative AI applications
						<br />
						with a growing cluster of GPU resources at lower costs.
					</Typography>
				</div>
				<div className={styles.access}>
					<div className={styles.texts}>
						<Typography className={styles.topText}>
							On-demand Computational Resources.
						</Typography>

						<Typography className={styles.bottomText}>
							Instant & permissionless access to a global cluster
							of shared GPUs & CPUs
						</Typography>

						<div className={styles.square}></div>
					</div>
					<div className={styles.features}>
						<div className={styles.oneFeature}>
							<div className={styles.icon}>
								<Image
									src={infrastructureIcon}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
							</div>
							<Typography className={styles.featureTitle}>
								Cost-saving GPU Resources.
							</Typography>
							<Typography className={styles.featureDesc}>
								Spend up to 90% less on computational resources,
								relative to other clouds & local set-up.
							</Typography>
						</div>
						<div className={styles.oneFeature}>
							<div className={styles.icon}>
								<Image
									src={infrastructureIcon}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
							</div>
							<Typography className={styles.featureTitle}>
								Instant cluster deployment & adaptation.
							</Typography>
							<Typography className={styles.featureDesc}>
								Go live with your AI application in seconds
								without worrying about resource demand & strain.
							</Typography>
						</div>
						<div className={styles.oneFeature}>
							<div className={styles.icon}>
								<Image
									src={infrastructureIcon}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
							</div>
							<Typography className={styles.featureTitle}>
								Transparent Fees.
							</Typography>
							<Typography className={styles.featureDesc}>
								All fees are stated upfront with accurate
								metering to measure performance against cost.
							</Typography>
						</div>
					</div>
				</div>
				<div className={styles.diagrams}>
					<div className={styles.leftDiagram}>
						<div className={styles.diagramBg}>
							<Image
								src={leftDiagram}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<RiveComponent className={styles.rive} />
					</div>
					<div className={styles.rightDiagram}>
						<Image
							src={rightDiagram}
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
