import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export interface AppState {

}

const rootReducer = combineReducers({

});

export default function makeStore(initialState?: AppState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware
    )),
);
}