import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { createBrowserHistory } from 'history';
import gameReducer, { RootState } from "./reducers/reducers";
import thunk from 'redux-thunk';

export const history = createBrowserHistory();
export const routerMiddleware = createRouterMiddleware(history);

export default function configureStore(initialState?: RootState) {    
    const middlewares = [routerMiddleware];
    const enhancer = compose(
        applyMiddleware(...middlewares, thunk)
    );

    const store = createStore(
        gameReducer,
        initialState,
        enhancer
    );

    console.log(store.getState());

    return store;
};
