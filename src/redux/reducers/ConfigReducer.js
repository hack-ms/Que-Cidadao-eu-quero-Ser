import {createActions, createReducer} from "reduxsauce";
import InitialState from "../InitialState";

const { Types, Creators } = createActions({
    setFirstAccess: null
});

export const ConfigTypes = Types;

export default Creators;

const setFirstAccess = state => ({...state, isFirstAccess: true});

export const reducer = createReducer(InitialState.config, {
   [Types.SET_FIRST_ACCESS]: setFirstAccess
});
