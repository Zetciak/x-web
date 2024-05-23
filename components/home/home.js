// >> Modules
import styles from './home.module.scss';
import Image from 'next/image';

// >> Components
import Nav from '@/components/overlay/nav/nav';
import Hero from './hero/hero';
import Gpu from './gpu/gpu';
import GpuWork from './gpuWork/gpuWork';
import Infrastructure from './infrastructure/infrastructure';
import Tokenomics from './tokenomics/tokenomics';

// >> Script
export default function Home() {
	return (
		<div className={styles.page}>
			<Nav />
			<Hero />
			<Gpu />
			<GpuWork />
			<Infrastructure />
			<Tokenomics />
		</div>
	);
}
