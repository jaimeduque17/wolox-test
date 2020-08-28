import { GET_TECHS, ERROR_TECH } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload
            }
        case ERROR_TECH:
            return {
                ...state
            }
        default:
            return state;
    }
}