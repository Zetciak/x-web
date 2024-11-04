// >> Modules
import styles from './pricing.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';
import Dots from '@/components/overlay/dots/dots';

import logo from '@/public/logo.svg';
import bg from '@/public/images/pricing/bg.png';
import leftLine from '@/public/images/pricing/leftLine.png';
import centerLine from '@/public/images/pricing/centerLine.png';

const list = [
	{
		mark: 'NVIDIA',
		model: 'RTX 3060 (Entry-Level)',
		perHr: 0.04,
		avgMonthly: 28.8,
	},
	{
		mark: 'NVIDIA',
		model: 'RTX 3080 (Advanced)',
		perHr: 0.085,
		avgMonthly: 61.2,
	},
	{
		mark: 'NVIDIA',
		model: 'A40 (Professional)	   ',
		perHr: 0.15,
		avgMonthly: 108.0,
	},
	{
		mark: 'NVIDIA',
		model: 'A100 (High-End)',
		perHr: 0.25,
		avgMonthly: 180,
	},
	{
		mark: 'NVIDIA',
		model: 'H100 (Cutting-Edge)',
		perHr: 0.35,
		avgMonthly: 252,
	},
];

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
				<Dots type="pricing2" />
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
							Pricing
						</span>
					</h1>
					<Typography className={styles.desc}>
						NodeGPT Resource performance are tailored according to
						user preference.
					</Typography>

					<div className={styles.square}></div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.point}>
						<div className={styles.card}>
							<Typography className={styles.pointTitle}>
								Model/Tier
							</Typography>
						</div>
						<div className={styles.perHour}>
							<Typography className={styles.pointTitle}>
								Hourly Rate
							</Typography>
						</div>
						<div className={styles.avg}>
							<Typography className={styles.pointTitle}>
								Monthly Cost
							</Typography>
						</div>
					</div>
					{list.map((element, index) => {
						return (
							<div className={styles.point} key={index}>
								<div className={styles.card}>
									<Typography className={styles.value}>
										{element.mark}{' '}
										<span>{element.model}</span>
									</Typography>
									<div className={styles.pointLine}>
										<Image
											src={leftLine}
											alt=""
											quality={99}
											priority={true}
											className="image"
										/>
									</div>
								</div>
								<div className={styles.perHour}>
									<Typography className={styles.value}>
										<span>
											${element.perHr.toFixed(3)} / hr
										</span>
									</Typography>
									<div
										className={styles.pointLine}
										data-value="center"
									>
										<Image
											src={centerLine}
											alt=""
											quality={99}
											priority={true}
											className="image"
										/>
									</div>
								</div>
								<div className={styles.avg}>
									<Typography className={styles.value}>
										<span>
											${element.avgMonthly.toFixed(2)}
										</span>
									</Typography>
									<div
										className={styles.pointLine}
										data-value="right"
									>
										<Image
											src={leftLine}
											alt=""
											quality={99}
											priority={true}
											className="image"
										/>
									</div>
								</div>
							</div>
						);
					})}
					<div className={styles.lines}>
						<div className={styles.line}></div>
						<div className={styles.line}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
