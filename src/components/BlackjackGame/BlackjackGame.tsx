import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";
import * as actions from '../../store/actions/actions';
import { RootState } from "../../store/reducers/reducers";
import { statuses, GameModel } from '../../store/reducers/game.reducer';

import { card } from '../../store/cards';

interface Props {
    gameState: GameModel;
    actions: any;
}

interface CardProps {
    color: any;
    face: any;
    faceDown: boolean;
    score?: number;
    suit?: string;
    value?: number;
};

interface LabelProps {
    label: string;
    cards: {
        face: string;
        faceDown: boolean;
        value: number;
        suit: string;
        color: string;
        score: number;
    }[];
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

export const Hand: React.SFC<LabelProps> = ({ label, cards = [] }) => {

    return (
        <div>
            <label>{ label }</label>
            {
                cards && cards.map((card, i) =>
                    <Card
                        key={ i }
                        face={ card.face }
                        faceDown={ card.faceDown }
                        color={ card.color }
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
            <button className="btn btn-lg btn-warning my-2" onClick={ () => hit('player') }>Hit me</button>
            &nbsp;<button className="btn btn-lg btn-info my-2" onClick={ stand }>Stand</button>
            <hr />
            <div style={{ fontWeight: 'bold' }}>{ status }</div>
        </div>
    );
};


const mapStateToProps = (state: RootState) => ({ gameState: state.gameReducer });
const mapDispatchToProps = (dispatch: Dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlackjackGame);
