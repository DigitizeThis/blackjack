import React from 'react';
import styles from '../../styles/app/pages/cards/Hand.module.scss';
import Card from './Card';

type HandProps = {
	label: string,
	cards: any[]
};

const Hand: React.FC<HandProps> = ({ label, cards }) => {
	const getLabel = () => {
		if (cards.length > 0) {
			return (
				<h1 className={styles.label}>{label}</h1>
			);
		}
	}
	return (
		<div className={styles.handContainer}>
			{getLabel()}
			<div className={styles.cardContainer}>
				{cards.map((card: any, index: number) => {
					return (
						<Card key={index} value={card.value} suit={card.suit} hidden={card.hidden} />
					);
				})}
			</div>
		</div>
	);
}

export default Hand;
