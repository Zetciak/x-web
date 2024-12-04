// >> Modules
import styles from './nav.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';

import logo from '@/public/longLogo.svg';

// >> Script
export default function Nav(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.left}>
					<Image
						src={logo}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.center}>
					<Link to="Products" className={styles.oneCenter}>
						Products
					</Link>
					<Link to="Resources" className={styles.oneCenter}>
						Resources
					</Link>
					<Link to="Company" className={styles.oneCenter}>
						Company
					</Link>
					<a
						href="https://google.com"
						target="_blank"
						className={styles.oneCenter}
					>
						Docs
					</a>
				</div>
				<div className={styles.right}>
					<Button
						className={`${design.button_blueGradient} ${styles.btn}`}
						href="https://google.com"
						target="_blank"
						disableRipple
					>
						<div className={design.button_blueGradient_bg}></div>
						<Typography>Sign Up</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}
