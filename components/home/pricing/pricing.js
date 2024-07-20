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
		model: 'A100',
		perHr: 0.85,
		avgMonthly: 600,
	},
	{
		mark: 'NVIDIA',
		model: 'A6000 / A40',
		perHr: 0.44,
		avgMonthly: 300,
	},
	{
		mark: 'NVIDIA',
		model: 'GeForce 4090',
		perHr: 0.47,
		avgMonthly: 200,
	},
	{
		mark: 'NVIDIA',
		model: 'GeForce 3090',
		perHr: 0.2,
		avgMonthly: 150,
	},
	{
		mark: 'NVIDIA',
		model: 'A5000 / A10',
		perHr: 0.22,
		avgMonthly: 125,
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

					<div className={styles.square}></div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.point}>
						<div className={styles.card}>
							<Typography className={styles.pointTitle}>
								GRAPHICS CARD
							</Typography>
						</div>
						<div className={styles.perHour}>
							<Typography className={styles.pointTitle}>
								PER HOUR
							</Typography>
						</div>
						<div className={styles.avg}>
							<Typography className={styles.pointTitle}>
								AVG MONTHLY
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
										<span>${element.perHr} / hr</span>
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
										<span>${element.avgMonthly}</span>
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
