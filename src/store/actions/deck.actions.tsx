export const tally = () => ({ type: 'TALLY' });

export const deal = () => (dispatch: any, getState: any) => {
    dispatch({ type: 'DEAL' });
    dispatch(tally());
    if (getState().playerScore >= 21) {
        dispatch({ type: 'OUTCOME' });
    }
};

export const hit = (who: any) => (dispatch: any, getState: any) => {
    dispatch({ type: 'HIT', who });
    dispatch(tally());
    if (getState().playerScore >= 21) {
        dispatch({ type: 'OUTCOME' });
    }
};

export const stand = () => (dispatch: any, getState: any) => {
    while(getState().dealerScore < 17) {
        dispatch(hit('dealer'));
    }
    dispatch({ type: 'OUTCOME' });
};
