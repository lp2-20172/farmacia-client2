import { PROVEEDOR_LIST_REQUEST, PROVEEDOR_LIST_SUCCESS, PROVEEDOR_LIST_FAILURE } from '../actions/proveedor-action'
import { PROVEEDOR_ADD, PROVEEDOR_FETCH, PROVEEDOR_UPDATE, PROVEEDOR_DELETE } from '../actions/proveedor-action'

const initialState = {
    list: [],
    data: {}
}

const proveedorReducer = (state = initialState, action) => {
    switch (action.type) {

        case PROVEEDOR_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case PROVEEDOR_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case PROVEEDOR_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case PROVEEDOR_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case PROVEEDOR_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case PROVEEDOR_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case PROVEEDOR_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default proveedorReducer
