import {ProfileState} from './models_d';
import {Action} from "../models_d";
import profileTypes from "./profileTypes";

const initialState: ProfileState = {
    data: {
        id: '',
        firstName: '',
        lastName: '',
        title: ''
    }
}

const profileReducers = (state: ProfileState = initialState, action: Action): ProfileState => {
    switch (action.type) {
        case profileTypes.SET_PROFILE:
            return {
                ...state,
                data: action.payload || state.data
            }
        default:
            return state;
    }
}

export default profileReducers;