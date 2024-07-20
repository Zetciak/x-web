// >> Modules
import { useEffect, useRef } from 'react';
import styles from './dots.module.scss';

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// >> Script
function OneDot(props) {
	return <div className={styles.oneDot} data-type={props.type}></div>;
}

export default function Dots(props) {
	const dotsRef = useRef(null);

	useEffect(() => {
		let createRandom = 10 - getRandomInt(7);

		const lightRandomElipse = () => {
			let rand = getRandomInt(dotsRef.current.children.length);
			dotsRef.current.children[rand].dataset.active = 'true';

			setTimeout(() => {
				dotsRef.current.children[rand].dataset.active = 'false';
			}, 2500);
		};

		lightRandomElipse();

		const interval = setInterval(() => {
			[...Array(createRandom)].map((x, i) => lightRandomElipse());

			createRandom = 10 - getRandomInt(7);
		}, 3000);
		return () => clearInterval(interval);
	}, [dotsRef]);

	return (
		<div className={styles.dots} ref={dotsRef} data-type={props.type}>
			{props.type === 'hero1' ? (
				<>
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'hero2' ? (
				<>
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'gpu1' ? (
				<>
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}

					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}

					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}

					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />

					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
				</>
			) : null}
			{props.type === 'gpu2' ? (
				<>
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'infrastructure1' ? (
				<>
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(40)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(40)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(40)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(40)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(40)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'tokenomics1' ? (
				<>
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'faq1' ? (
				<>
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(35)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(35)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(35)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(35)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
				</>
			) : null}
			{props.type === 'howItWorks1' ? (
				<>
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(35)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(35)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(37)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(35)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(35)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
				</>
			) : null}
			{props.type === 'pricing1' ? (
				<>
					{[...Array(24)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(24)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(24)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(24)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(24)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(24)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'pricing2' ? (
				<>
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'keyInfrastructure1' ? (
				<>
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(36)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(36)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(36)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(36)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
				</>
			) : null}
			{props.type === 'keyInfrastructure2' ? (
				<>
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'footer1' ? (
				<>
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(27)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
		</div>
	);
}
