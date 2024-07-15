// >> Modules
import styles from './buildAndScale.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

import bgImage from '@/public/images/buildAndScale/bgImage.png';

// >> Script
export default function BuildAndScale(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.bg}>
					<div className={styles.bgImg}>
						<Image
							src={bgImage}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.stripesMask}>
						<div className={styles.square} data-number="1"></div>
						<div className={styles.square} data-number="2"></div>
						<div className={styles.square} data-number="3"></div>
						<div className={styles.square} data-number="4"></div>
					</div>
				</div>
				asd
			</div>
		</div>
	);
}
