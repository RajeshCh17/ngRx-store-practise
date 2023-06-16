import { createReducer } from "@ngrx/store";

const initialState = 0;

//Alternative syntax some app may be using old version of store.
export function counterReducer(state = initialState){
    return state;
}