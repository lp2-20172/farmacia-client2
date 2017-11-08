//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/almacen/'

export const ALMACEN_LIST_REQUEST = "ALMACEN_LIST_REQUEST"
export const ALMACEN_LIST_SUCCESS = 'ALMACEN_LIST_SUCCESS'
export const ALMACEN_LIST_FAILURE = 'ALMACEN_LIST_FAILURE'

export const almacenList = () => ({
    type: ALMACEN_LIST_REQUEST,
})

export const almacenListSuccess = (list) => ({
    type: ALMACEN_LIST_SUCCESS,
    list
})

export const almacenListFailure = error => ({
    type: ALMACEN_LIST_FAILURE,
    error
})

export const ALMACEN_ADD = "ALMACEN_ADD"
export const ALMACEN_FETCH = "ALMACEN_FETCH"
export const ALMACEN_UPDATE = "ALMACEN_UPDATE"
export const ALMACEN_DELETE = "ALMACEN_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(almacenListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(almacenListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(almacenListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(almacenListFailure('Error '+error.message))
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
                    "type": ALMACEN_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/almacenes/list')
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
                    "type": ALMACEN_FETCH,
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
                    "type": ALMACEN_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/almacenes/list')
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
                    "type": ALMACEN_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/almacenes')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}