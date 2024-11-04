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
		title: 'What is NodeGPT?',
		desc: 'NodeGPT is a decentralized AI solution that revolutionizes the way computational resources are pooled together & managed.',
	},
	{
		title: 'How do I buy $NODE?',
		desc: 'xxxxxxxxxxxxxxx',
	},
	{
		title: 'How secure is a NodeGPT Node? ',
		desc: 'NodeGPT Nodes commit to the network with $NODE stakes. They are penalized for malicious actions and incentivized for uptime & great performances.  ',
	},
	{
		title: 'How can I access my Node? ',
		desc: 'If you participate on the NodeGPT network or run an AI application on it, you can track its performance from the NodeGPT web platform or installed app.',
	},
	{
		title: 'How much will I earn from being a NodeGPT node?',
		desc: 'Earnings depend on your $NODE stake and performance in the network. ',
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
