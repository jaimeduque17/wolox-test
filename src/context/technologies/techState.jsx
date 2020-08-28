import React, { useReducer } from 'react';
import techContext from './techContext';
import techReducer from './techReducer';
import { GET_TECHS, ERROR_TECH } from '../../types';
import ClientAxios from '../../config/axios';
 
const TechState = (props) => {
    const initialState = {
        techs: [],
        tech: null
    }

    // Dispatch to execute the actions
    const [state, dispatch] = useReducer(techReducer, initialState);

    // Get techs
    const getTechs = async () => {
        try {
            const result = await ClientAxios.get('/techs');
            dispatch({
                type: GET_TECHS,
                payload: result.data
            })
        } catch (error) {
            const alert = {
                msg: 'There was an error',
                category: 'alert'
            }
            dispatch({
                type: ERROR_TECH,
                payload: alert
            })
        }
    }

    return (
        <techContext.Provider
            value={{
                techs: state.techs,
                tech: state.tech,
                getTechs
            }}
        >
            {props.children}
        </techContext.Provider>
    );
}
 
export default TechState;