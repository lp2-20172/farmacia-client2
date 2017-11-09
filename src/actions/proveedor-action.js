//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/proveedor/'

export const PROVEEDOR_LIST_REQUEST = "PROVEEDOR_LIST_REQUEST"
export const PROVEEDOR_LIST_SUCCESS = 'PROVEEDOR_LIST_SUCCESS'
export const PROVEEDOR_LIST_FAILURE = 'PROVEEDOR_LIST_FAILURE'

export const proveedorList = () => ({
    type: PROVEEDOR_LIST_REQUEST,
})

export const proveedorListSuccess = (list) => ({
    type: PROVEEDOR_LIST_SUCCESS,
    list
})

export const proveedorListFailure = error => ({
    type: PROVEEDOR_LIST_FAILURE,
    error
})

export const PROVEEDOR_ADD = "PROVEEDOR_ADD"
export const PROVEEDOR_FETCH = "PROVEEDOR_FETCH"
export const PROVEEDOR_UPDATE = "PROVEEDOR_UPDATE"
export const PROVEEDOR_DELETE = "PROVEEDOR_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(proveedorListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(proveedorListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(proveedorListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(proveedorListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return client.post(url, data)
            .then((r) => {
                dispatch({
                    "type": PROVEEDOR_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/proveedores/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return client.get(`${url}${id}`)
            .then((r) => {
                /*
                dispatch({
                    "type": CATEGORIA_FETCH,
                    "data": r.data 
                })
                */
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": PROVEEDOR_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/proveedores/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
        return client.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": PROVEEDOR_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/categorias')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}