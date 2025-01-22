// >> Modules
import styles from './oneList.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';

// >> Script
export default function OneList(props) {
	return (
		<div className={styles.oneList} data-active={props.active}>
			{props.data.map((element, index) => {
				return (
					<div
						className={styles.onePoint}
						key={index}
						style={{
							animationDuration: `${props.data.length * 4}s`,
							animationDelay: `-${index * 4}s`,
						}}
					>
						<Typography>{element}</Typography>
					</div>
				);
			})}
		</div>
	);
}
