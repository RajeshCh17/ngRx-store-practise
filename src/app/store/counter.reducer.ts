import { createReducer } from "@ngrx/store";

const initialState = 0;

//It has logic for initial counter reducer state not for changing it.
export const counterReducer = createReducer(initialState);