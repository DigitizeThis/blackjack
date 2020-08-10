import shuffle from 'shuffle-array';

const suits: Array<string> = ['♣', '♦', '♥', '♠'];
const values: Array<any> = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const colors: any = { '♣': 'black', '♦': 'red', '♥': 'red', '♠': 'black' };

export const card = (value: any, suit: number) => {
    let color = `${colors[suit]}`;
    return ({
        face: value + suit,
        value,
        suit,
        color,
        get score() {
            switch (this.value) {
                case 'A':
                    return 11;
                case 'K':
                case 'Q':
                case 'J':
                    return 10;
            default:
                return this.value;
            }
        }
    })
};

export const newShuffledPokerDeck = () =>
    shuffle(suits.reduce((cards: any, suit: any) =>
        [...cards, ...values.map((value: any) => card(value, suit))]
    , []));

export const calculatePlayerScore = (cards: any) => {
    let score = cards.reduce((score: any, card: any) => score + card.score, 0);
    cards.filter((c: any) => c.value === 'A').forEach((c: any) => {
        if (score > 21) {
            score -= 10;
        }
    });

    return score;
};
