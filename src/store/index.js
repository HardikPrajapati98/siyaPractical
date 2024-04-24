import {
    configureStore,
    applyMiddleware,
    combineReducers,
} from '@reduxjs/toolkit';

const combinedReducer = combineReducers({

});

const rootReducer = (state, action) => {
    if (action.type === 'CustomerLogin/logout') {
        state = undefined;
    }
    return combinedReducer(state, action);
};

export default configureStore({
    reducer: rootReducer,
});
