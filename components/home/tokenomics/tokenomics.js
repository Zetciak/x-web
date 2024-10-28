// >> Modules
import styles from './tokenomics.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';
import Dots from '@/components/overlay/dots/dots';
import { useRive } from '@rive-app/react-canvas';

import logo from '@/public/logo.svg';
import tokenomicsBg from '@/public/images/tokenomics/bg.png';
import circle from '@/public/images/tokenomics/circle.png';
import circle2 from '@/public/images/tokenomics/circle2.png';
import copy from '@/public/images/tokenomics/copy.svg';
import toast from 'react-hot-toast';

// >> Script
export default function Tokenomics(props) {
	const { RiveComponent } = useRive({
		src: '/riv/tokenomics.riv',
		stateMachines: 'State Machine 1',
		autoplay: true,
	});

	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Dots type="tokenomics1" />
				<div className={styles.tokenomicsBg}>
					<Image
						src={tokenomicsBg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.left}>
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
							Deflationary
						</span>
						<br />
						<span className={design.text_shadow}>
							<TextShadow id="tokonomicsTitle" />
							Tokenomics
						</span>
					</h1>

					<Typography className={styles.desc}>
						Lorem ipsum dolor sit amet
					</Typography>

					<div className={styles.square}></div>
					<div className={styles.circle}>
						<Image
							src={circle2}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<RiveComponent className={styles.rive} />
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.titles}>
						<Typography className={styles.leftText}>CA</Typography>
						<Typography className={styles.rightText}>
							<span className={styles.desktop}>
								Ox1258d60b224c0c5cd888d37bbf31aa5fcfb7e870
							</span>
							<span className={styles.mobile}>
								Ox1258d60b...5fcfb7e870
							</span>
						</Typography>
						<div
							className={styles.copy}
							onClick={() => {
								toast.success('Contract address copied!');
								navigator.clipboard.writeText(
									'Ox1258d60b224c0c5cd888d37bbf31aa5fcfb7e870'
								);
							}}
						>
							<Image
								src={copy}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
					<div className={styles.texts}>
						<div className={styles.oneSection}>
							<Typography className={styles.sectionTitle}>
								Total Supply: 100M
							</Typography>
							<Typography className={styles.sectionDesc}>
								Our team operates on real revenue hence NO TEAM
								TOKENS
							</Typography>
						</div>
						<div className={styles.line}></div>
						<div className={styles.oneSection}>
							<Typography className={styles.sectionTitle}>
								Tax: 4% BUY / SELL
							</Typography>
							<Typography className={styles.sectionDesc}>
								2% For GPU Expansion & Maintenance
							</Typography>
							<Typography className={styles.sectionDesc}>
								1% For Marketing
							</Typography>
							<Typography className={styles.sectionDesc}>
								1% Revenue Sharing Pool
							</Typography>
						</div>
						<div className={styles.line}></div>
						<div className={styles.oneSection}>
							<Typography className={styles.sectionTitle}>
								REVENUE SHARING
							</Typography>
							<Typography className={styles.sectionDesc}>
								60% of revenue allocated to revenue sharing pool
							</Typography>
							<Typography className={styles.sectionDesc}>
								30% of revenue for team & maintenance costs
							</Typography>
							<Typography className={styles.sectionDesc}>
								10% of revenue for GPU Node Expansion
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
