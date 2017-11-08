import { DETALLECOMPRA_LIST_REQUEST, DETALLECOMPRA_LIST_SUCCESS, DETALLECOMPRA_LIST_FAILURE } from '../actions/detalleCompra-action'
import { DETALLECOMPRA_ADD, DETALLECOMPRA_FETCH, DETALLECOMPRA_UPDATE, DETALLECOMPRA_DELETE } from '../actions/detalleCompra-action'

const initialState = {
    list: [],
    data: {}
}

const detalleCompraReducer = (state = initialState, action) => {
    switch (action.type) {

        case DETALLECOMPRA_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case DETALLECOMPRA_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case DETALLECOMPRA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case DETALLECOMPRA_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case DETALLECOMPRA_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case DETALLECOMPRA_FETCH: {
            //console.log('detalleCompraReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case DETALLECOMPRA_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default detalleCompraReducer
