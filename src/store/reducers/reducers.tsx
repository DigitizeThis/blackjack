import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from "react-router-redux";

import { State as GameState } from './game.reducer';
import gameReducer from './game.reducer';

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
    router: RouterState;
    gameReducer: GameState;
};

export default combineReducers<RootState>({
    router,
    gameReducer: gameReducer as any
});
