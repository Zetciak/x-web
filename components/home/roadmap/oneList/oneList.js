// >> Modules
import styles from './oneList.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';

import roadmapIcon from '@/public/images/roadmap/roadmapIcon.svg';

// >> Script
export default function OneList(props) {
	return (
		<div className={styles.oneList} data-bg={props.bg}>
			<div className={styles.title}>
				<span className={styles.square}></span>
				<Typography>{props.title}</Typography>
			</div>
			<div className={styles.content}>
				{props.data.map((element, index) => {
					return (
						<div
							className={styles.onePoint}
							data-done={element.done}
							key={index}
						>
							<Image
								src={roadmapIcon}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
							<Typography>{element.title}</Typography>
						</div>
					);
				})}
			</div>
		</div>
	);
}
