// >> Modules
import styles from './roadmap.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import TextShadow from '@/components/overlay/textShadow/textShadow';

import logo from '@/public/logo.svg';
import bg from '@/public/images/pricing/bg.png';

// >> Componenets
import OneList from './oneList/oneList';

// >> Script
export default function Roadmap(props) {
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
						Our{' '}
						<span className={design.text_shadow}>
							<TextShadow id="pricingTitle" />
							Roadmap
						</span>
					</h1>
					<Typography className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Etiam eget auctor ante. Aenean viverra magna eget
						feugiat feugiat.
					</Typography>

					<div className={styles.square}></div>
				</div>
				<div className={styles.bottom}>
					<OneList
						title={
							<>
								Lorem <span>ipsum 111</span>
							</>
						}
						bg="bg1"
						data={[
							{
								title: 'Tax: 4% BUY / SELL',
								done: true,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: 'Tax: 4% BUY / SELL',
								done: true,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
						]}
					/>
					<OneList
						title={
							<>
								Lorem <span>ipsum 222</span>
							</>
						}
						bg="bg2"
						data={[
							{
								title: 'Tax: 4% BUY / SELL',
								done: true,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: 'Tax: 4% BUY / SELL',
								done: true,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
						]}
					/>
					<OneList
						title={
							<>
								Lorem <span>ipsum 333</span>
							</>
						}
						bg="bg3"
						data={[
							{
								title: 'Tax: 4% BUY / SELL',
								done: true,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: 'Tax: 4% BUY / SELL',
								done: true,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
						]}
					/>
					<OneList
						title={
							<>
								Lorem <span>ipsum 444</span>
							</>
						}
						bg="bg4"
						data={[
							{
								title: 'Tax: 4% BUY / SELL',
								done: true,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: 'Tax: 4% BUY / SELL',
								done: true,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
							{
								title: '2% For GPU Expansion & Maintenance',
								done: false,
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}
