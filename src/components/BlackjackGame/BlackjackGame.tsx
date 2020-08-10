import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import { RootState } from "../../store/reducers/reducers";
import { statuses, GameModel } from '../../store/reducers/game.reducer';

import { newShuffledPokerDeck, calculatePlayerScore, card } from '../../store/cards';

interface Props {
    gameState: GameModel;
    actions: any;
}

interface CardProps {
    color: any;
    face: any;
    faceDown: boolean;
};

interface LabelProps {
    label: string;
    cards: any[];
};

interface GameProps {
    newGame: any;
    deal: any;
    hit: Function;
    stand: any;
    drawPile: any[];
    dealerHand: any[];
    playerHand: any[];
    dealerScore: number;
    playerScore: number;
    status: string
};

const styles = {
    cardContainer: {
        height: '185px',
        backgroundImage: `url(${"card.png"})`
    }
};

export const Card = ({ color, face, faceDown }: CardProps) =>
    faceDown 
    ? <span>? </span>
    : <div className="cardwrap" style={ Object.assign(styles.cardContainer, { color }) }>{ face } </div>;

export const Hand: React.SFC<LabelProps> = ({ label, cards }) => {
    
    console.log({ label, cards });
    return (
        <div>
            <label>{ label }</label>
            {
                cards && cards.map((card, i) =>
                    <Card
                        face={ card.face }
                        faceDown={ card.faceDown }
                        color={ card.color }
                        key={ i }
                    />
                )
            }
        </div>
    );
}

export const BlackjackGame: React.SFC<GameProps> = ({
    newGame,
    deal,
    hit,
    stand,
    drawPile,
    dealerHand,
    playerHand,
    dealerScore,
    playerScore,
    status
}) => {

    const handleHit = () => {
        hit('player');
    };

    return (
        <div>
            <button className="btn btn-lg btn-danger my-2" onClick={ deal }>Deal</button>
            <hr />
            { drawPile && drawPile.length === 0 && 
                [<div>Deck is empty, refresh for a new game.</div>,
                <hr />]
            }
            <Hand label="Dealer: " cards={ dealerHand } />
            <div>Dealer Score: {
                status === statuses.PLAYING
                ? '?'
                : dealerScore }
            </div>
            <hr />
            <Hand label="Your Hand: " cards={ playerHand } />
            <div>Your Score: { playerScore }</div>
            <hr />
            <button className="btn btn-lg btn-warning my-2" onClick={ handleHit }>Hit me</button>
            &nbsp;<button className="btn btn-lg btn-info my-2" onClick={ stand }>Stand</button>
            <hr />
            <div style={{ fontWeight: 'bold' }}>{ status }</div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => state;

export default connect(
    mapStateToProps,
    actions
)(BlackjackGame);
