// >> Modules
import styles from './footer.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Dots from '@/components/overlay/dots/dots';

import logo from '@/public/logo.svg';
import chip from '@/public/images/footer/chip.svg';
import footerShadow from '@/public/images/footer/footerShadow.png';
import { Link } from 'react-scroll';

// >> Script
export default function Footer(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.footerShadow}>
					<Image
						src={footerShadow}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.left}>
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
						<div className={styles.services}>
							<Image
								src={chip}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
							<Typography>All services are online</Typography>
						</div>
						<Dots type="footer1" />
					</div>
					<div className={styles.bottom}>
						<a
							href="mailto:support@x.x"
							className={styles.link}
							target="_blank"
						>
							Email Addres: <span>Support@x.x</span>
						</a>

						<a
							href="https://google.com"
							className={styles.link}
							target="_blank"
						>
							Privacy Policy
						</a>
						<Typography className={styles.copyright}>
							© Copyright io.net, inc. 447 Broadway, New York, NY
							10013
						</Typography>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.oneList}>
						<Typography className={styles.listTitle}>
							Company
						</Typography>
						<Link className={styles.oneLink} to="about-us">
							About Us
						</Link>
						<Link className={styles.oneLink} to="contact-us">
							Contact Us
						</Link>
						<a
							href="https://google.com"
							target="_blank"
							className={styles.oneLink}
						>
							Media Kit
						</a>
						<Link className={styles.oneLink} to="faq">
							FAQs
						</Link>
					</div>
					<div className={styles.oneList}>
						<Typography className={styles.listTitle}>
							Resources
						</Typography>
						<Link className={styles.oneLink} to="Roadmap">
							Roadmap
						</Link>

						<a
							href="https://google.com"
							target="_blank"
							className={styles.oneLink}
						>
							3 Documentation
						</a>
						<a
							href="https://google.com"
							target="_blank"
							className={styles.oneLink}
						>
							2 Documentation
						</a>
						<a
							href="https://google.com"
							target="_blank"
							className={styles.oneLink}
						>
							1 Documentation
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
