// >> Modules
import styles from './buyBox.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useTimer } from 'react-timer-hook';
import TextShadow from '@/components/overlay/textShadow/textShadow';
import { useEffect } from 'react';

export const localeTimer = (value) => {
	return value > 9 ? value : `0${value}`;
};

// >> Script
export default function BuyBox(props) {
	// >> Timer
	const { seconds, minutes, hours, days, restart } = useTimer({
		expiryTimestamp: new Date(),
		onExpire: () => {
			console.log('end');
		},
	});

	useEffect(() => {
		restart(new Date().getTime() + 1000 * 60 * 60 * 23.9);
	}, [restart]);

	return (
		<div className={styles.buyBox}>
			<Typography className={styles.title}>
				<span className={design.text_shadow}>Buy $NODE Token </span>
				<br />
				<span className={design.text_gradient} data-type="bottom">
					In Presale Now!
				</span>
			</Typography>
			<div className={styles.timers}>
				<div className={styles.oneTimer}>
					<Typography className={styles.topText}>DAYS</Typography>
					<Typography className={styles.bottomText}>
						{localeTimer(days)}
					</Typography>
				</div>
				<div className={styles.line}></div>
				<div className={styles.oneTimer}>
					<Typography className={styles.topText}>HOURS</Typography>
					<Typography className={styles.bottomText}>
						{localeTimer(hours)}
					</Typography>
				</div>
				<div className={styles.line}></div>
				<div className={styles.oneTimer}>
					<Typography className={styles.topText}>MINUTES</Typography>
					<Typography className={styles.bottomText}>
						{localeTimer(minutes)}
					</Typography>
				</div>
				<div className={styles.line}></div>
				<div className={styles.oneTimer}>
					<Typography className={styles.topText}>SECONDS</Typography>
					<Typography className={styles.bottomText}>
						{localeTimer(seconds)}
					</Typography>
				</div>
			</div>
			<div className={styles.progress}>
				<div className={styles.fill}></div>
				<Typography>
					<span className={design.text_gradient}>
						UNTIL PRICE INCREASE
					</span>
				</Typography>
			</div>
			<div className={styles.numbers}>
				<Typography className={styles.numberText}>
					TOTAL USD RAISED:{' '}
					<span className={design.text_shadow}>$1,234,567.89</span>
				</Typography>
				<Typography className={styles.numberText}>
					1 <span className={design.text_shadow}>$NODE</span> =
					$1.234567
				</Typography>
			</div>
			<div className={styles.buttons}>
				<Button
					className={`${design.button_blueGradient} ${styles.btn}`}
					href="https://google.com"
					target="_blank"
					disableRipple
				>
					<div
						className={design.button_blueGradient_bg_before}
						data-type="long"
					></div>
					<div
						className={design.button_blueGradient_bg}
						data-type="long"
					></div>
					<Typography>Buy With Card</Typography>
				</Button>
				<Button
					className={`${design.button_blueGradient} ${styles.btn}`}
					href="https://google.com"
					target="_blank"
					disableRipple
					data-color="white"
				>
					<div
						className={design.button_blueGradient_bg_before}
						data-type="long"
					></div>
					<div
						className={design.button_blueGradient_bg}
						data-type="long"
					></div>
					<Typography>Buy With Crypto</Typography>
				</Button>
			</div>
			<Link
				href="https://google.com"
				target="_blank"
				className={styles.dontHaveWallet}
			>
				<span className={design.text_shadow}>DON’T HAVE A WALLET?</span>
			</Link>
		</div>
	);
}
