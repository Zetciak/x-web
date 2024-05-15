// >> Modules
import styles from './home.module.scss';
import Image from 'next/image';

// >> Components
import Nav from '@/components/overlay/nav/nav';
import Hero from './hero/hero';

// >> Script
export default function Home() {
	return (
		<div className={styles.page}>
			<Nav />
			<Hero />
		</div>
	);
}
