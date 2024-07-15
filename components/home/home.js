// >> Modules
import styles from './home.module.scss';

// >> Components
import Nav from '@/components/overlay/nav/nav';
import Hero from './hero/hero';
import Gpu from './gpu/gpu';
import GpuWork from './gpuWork/gpuWork';
import Infrastructure from './infrastructure/infrastructure';
import Tokenomics from './tokenomics/tokenomics';
import Faq from './faq/faq';
import Participate from './participate/participate';
import HowItWorks from './howItWorks/howItWorks';
import Pricing from './pricing/pricing';
import KeyInfrastructure from './keyInfrastructure/keyInfrastructure';
import BuildAndScale from './buildAndScale/buildAndScale';

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
			<Faq />
			<Participate />
			<HowItWorks />
			<Pricing />
			<KeyInfrastructure />
			<BuildAndScale />
		</div>
	);
}
