import { ADD_LEADS, GET_LEADS, DELETE_LEADS } from '../Actions/Types'

const initialStates = {
    leads: []
}

export default function (state = initialStates, action)  {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }
        case DELETE_LEADS:
            {
                return {
                    ...state,
                    leads: state.leads.filter(lead => {
                        return lead.id !== action.payload
                    })
                }
            }
        case ADD_LEADS:
            {
                return {
                    ...state,
                    leads: [...state.leads, action.payload]
                }
            }
        default:
            return state
    }
}