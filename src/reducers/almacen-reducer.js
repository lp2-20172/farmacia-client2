import { ALMACEN_LIST_REQUEST, ALMACEN_LIST_SUCCESS, ALMACEN_LIST_FAILURE } from '../actions/almacen-action'
import { ALMACEN_ADD, ALMACEN_FETCH, ALMACEN_UPDATE, ALMACEN_DELETE } from '../actions/almacen-action'

const initialState = {
    list: [],
    data: {}
}

const almacenReducer = (state = initialState, action) => {
    switch (action.type) {

        case ALMACEN_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case ALMACEN_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case ALMACEN_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case ALMACEN_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case ALMACEN_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case ALMACEN_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case ALMACEN_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default almacenReducer
