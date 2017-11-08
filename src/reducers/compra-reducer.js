import { COMPRA_LIST_REQUEST, COMPRA_LIST_SUCCESS, COMPRA_LIST_FAILURE } from '../actions/compra-action'
import { COMPRA_ADD, COMPRA_FETCH, COMPRA_UPDATE, COMPRA_DELETE } from '../actions/compra-action'

const initialState = {
    list: [],
    data: {}
}

const compraReducer = (state = initialState, action) => {
    switch (action.type) {

        case COMPRA_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case COMPRA_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case COMPRA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case COMPRA_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case COMPRA_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case COMPRA_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case COMPRA_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default compraReducer