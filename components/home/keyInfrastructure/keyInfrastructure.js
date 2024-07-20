// >> Modules
import styles from './keyInfrastructure.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Dots from '@/components/overlay/dots/dots';
import CountUp from 'react-countup';

import amd from '@/public/images/keyInfrastructure/amd.svg';
import nvidia from '@/public/images/keyInfrastructure/nvidia.svg';

// >> Script
export default function KeyInfrastructure(props) {
	return (
		<div className={styles.section}>
			<Dots type="keyInfrastructure1" />
			<Dots type="keyInfrastructure2" />
			<div className={styles.providers}>
				<div className={styles.providersInside}>
					<Typography className={styles.leftText}>
						KEY INFRASTRUCTURE PROVIDERS
					</Typography>
					<div className={styles.rightLogos}>
						<a
							href="https://www.nvidia.com/"
							target="_blank"
							className={styles.oneLogo}
							data-type="nvidia"
						>
							<Image
								src={nvidia}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</a>
						<a
							href="https://www.amd.com/"
							target="_blank"
							className={styles.oneLogo}
							data-type="amd"
						>
							<Image
								src={amd}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.numbers}>
				<div className={styles.oneNumber}>
					<Typography className={styles.topValue}>
						<CountUp
							enableScrollSpy={true}
							scrollSpyOnce={true}
							end={28}
							delay={0.5}
							duration={5}
						/>
					</Typography>
					<Typography className={styles.bottomValue}>
						Active Nodes
					</Typography>
				</div>
				<div className={styles.oneNumber}>
					<Typography className={styles.topValue}>
						$
						<CountUp
							enableScrollSpy={true}
							scrollSpyOnce={true}
							end={15750}
							delay={0.5}
							duration={5}
						/>
					</Typography>
					<Typography className={styles.bottomValue}>
						Avg Monthly Revenue
					</Typography>
				</div>
				<div className={styles.oneNumber}>
					<Typography className={styles.topValue}>
						<CountUp
							enableScrollSpy={true}
							scrollSpyOnce={true}
							end={28}
							delay={0.5}
							duration={5}
						/>
					</Typography>
					<Typography className={styles.bottomValue}>
						Active Nodes
					</Typography>
				</div>
			</div>
		</div>
	);
}
