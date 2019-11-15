import { Action } from 'redux';
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AppState } from "./store";

export type AsyncDispatch = ThunkDispatch<AppState, {}, Action>
export type AsyncAction = ThunkAction<Promise<void>, AppState, {}, Action>