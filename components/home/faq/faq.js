// >> Modules
import styles from './faq.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import {
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from '@mui/material';
import { useState } from 'react';
import TextShadow from '@/components/overlay/textShadow/textShadow';
import Dots from '@/components/overlay/dots/dots';

import logo from '@/public/logo.svg';
import faqBg from '@/public/images/faq/faqBg.png';
import arrow from '@/public/images/faq/arrow.svg';

const points = [
	{
		title: 'What is NODEAI?',
		desc: 'Node Al is a groundbreaking decentralized platform designed to facilitate access to GPU and Al resources, enabling users to participate, contribute, and benefit from the evolving landscape of artificial intelligence.',
	},
	{
		title: 'How do i buy $GPU?',
		desc: 'Node Al is a groundbreaking decentralized platform designed to facilitate access to GPU and Al resources, enabling users to participate, contribute, and benefit from the evolving landscape of artificial intelligence.',
	},
	{
		title: 'How secure is a GPU Node?',
		desc: 'Node Al is a groundbreaking decentralized platform designed to facilitate access to GPU and Al resources, enabling users to participate, contribute, and benefit from the evolving landscape of artificial intelligence.',
	},
	{
		title: 'How can i access my Node?',
		desc: 'Node Al is a groundbreaking decentralized platform designed to facilitate access to GPU and Al resources, enabling users to participate, contribute, and benefit from the evolving landscape of artificial intelligence.',
	},
	{
		title: 'How much will i earn by staking $GPU?',
		desc: 'Node Al is a groundbreaking decentralized platform designed to facilitate access to GPU and Al resources, enabling users to participate, contribute, and benefit from the evolving landscape of artificial intelligence.',
	},
];

// >> Script
export default function Faq(props) {
	// >> Variables
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.faqBg}>
					<Image
						src={faqBg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.left}>
					<Dots type="faq1" />
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
							<TextShadow id="faqTitle" />
							FAQ
						</span>
					</h1>

					<Typography className={styles.desc}>
						Here are some of the most frequently asked questions
						about our project. If you have any other questions, feel
						free to reach out to us. We are happy to help.
					</Typography>

					<div className={styles.square}></div>
				</div>
				<div className={styles.right}>
					{points.map((element, index) => {
						return (
							<div className={styles.oneAccordion} key={index}>
								<Accordion
									expanded={expanded === index}
									onChange={handleChange(index)}
									square
									disableGutters
									className={styles.accordion}
									data-selected={
										expanded === index ? true : false
									}
								>
									<AccordionSummary
										expandIcon={
											<div className={styles.arrow}>
												<Image
													src={arrow}
													alt=""
													quality={99}
													priority={true}
													className="image"
												/>
											</div>
										}
									>
										<Typography
											className={styles.accordionTitle}
										>
											<span className={styles.normal}>
												{element.title}
											</span>
											<span className={styles.gradient}>
												{element.title}
											</span>
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography
											className={styles.accordionDesc}
										>
											{element.desc}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
