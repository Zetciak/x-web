// >> Modules
import { useEffect, useRef } from 'react';
import styles from './heroDots.module.scss';
import design from '@/styles/design_system.module.scss';

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// >> Script
function OneDot(props) {
	return <div className={styles.oneDot} data-type={props.type}></div>;
}

export default function HeroDots(props) {
	const dotsRef = useRef(null);

	useEffect(() => {
		let createRandom = 10 - getRandomInt(7);
		//console.log(dotsRef.current.children.length);

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
		<div className={styles.dots} ref={dotsRef}>
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
		</div>
	);
}