import {ProfileState} from './models_d';
import {Action} from "../models_d";

const initialState: ProfileState = {
    id: '',
    firstName: '',
    lastName: '',
    title: ''
}

const profileReducers = (state: ProfileState = initialState, action: Action): ProfileState => {
    switch (action.type) {
        default:
            return state;
    }
}

export default profileReducers;