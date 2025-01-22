// >> Modules
import styles from './roadmap.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';
import { useState } from 'react';

import logo from '@/public/logo.svg';
import bg from '@/public/images/pricing/bg.png';

// >> Componenets
import OneList from './oneList/oneList';

// >> Script
export default function Roadmap(props) {
	const [list1] = useState([
		'Launchpad',
		'Staking',
		'Dashboard',
		'Binance Listing',
		'Coingecko',
	]);
	const [list2] = useState([
		'2 - Launchpad',
		'2 - Staking',
		'2 - Dashboard',
		'2 - Binance Listing',
		'2 - Coingecko',
	]);
	const [list3] = useState([
		'3 - Launchpad',
		'3 - Staking',
		'3 - Dashboard',
		'3 - Binance Listing',
		'3 - Coingecko',
	]);
	const [list4] = useState([
		'4 - Launchpad',
		'4 - Staking',
		'4 - Dashboard',
		'4 - Binance Listing',
		'4 - Coingecko',
	]);

	const [selected, setSelected] = useState(1);

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
						<span className={design.text_shadow}>
							<TextShadow id="roadmapTitle" />
							Roadmap
						</span>
					</h1>

					<Typography className={styles.desc}>
						Profitable, transparent and simple. Join a network of
						GPU clusters with sky high returns
					</Typography>

					<div className={styles.square}></div>

					<div className={styles.buttons}>
						<Button
							className={`${design.button_blueGradient} ${styles.btn}`}
							onClick={() => {
								setSelected(1);
							}}
							disableRipple
							data-color={selected !== 1 ? 'white' : ''}
						>
							<div
								className={design.button_blueGradient_bg_before}
								data-type="long"
							></div>
							<div
								className={design.button_blueGradient_bg}
								data-type="long"
							></div>
							<Typography>Phase 1</Typography>
						</Button>
						<Button
							className={`${design.button_blueGradient} ${styles.btn}`}
							onClick={() => {
								setSelected(2);
							}}
							disableRipple
							data-color={selected !== 2 ? 'white' : ''}
						>
							<div
								className={design.button_blueGradient_bg_before}
								data-type="long"
							></div>
							<div
								className={design.button_blueGradient_bg}
								data-type="long"
							></div>
							<Typography>Phase 2</Typography>
						</Button>
						<Button
							className={`${design.button_blueGradient} ${styles.btn}`}
							onClick={() => {
								setSelected(3);
							}}
							disableRipple
							data-color={selected !== 3 ? 'white' : ''}
						>
							<div
								className={design.button_blueGradient_bg_before}
								data-type="long"
							></div>
							<div
								className={design.button_blueGradient_bg}
								data-type="long"
							></div>
							<Typography>Phase 3</Typography>
						</Button>
						<Button
							className={`${design.button_blueGradient} ${styles.btn}`}
							onClick={() => {
								setSelected(4);
							}}
							disableRipple
							data-color={selected !== 4 ? 'white' : ''}
						>
							<div
								className={design.button_blueGradient_bg_before}
								data-type="long"
							></div>
							<div
								className={design.button_blueGradient_bg}
								data-type="long"
							></div>
							<Typography>Phase 4</Typography>
						</Button>
					</div>
				</div>
				<div className={styles.right}>
					<OneList data={list1} active={selected === 1} />
					<OneList data={list2} active={selected === 2} />
					<OneList data={list3} active={selected === 3} />
					<OneList data={list4} active={selected === 4} />
				</div>
			</div>
		</div>
	);
}
