import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure } from './userRedux'
import {
    getWordlistStart,
    getWordlistSuccess,
    getWordlistFailure,
    deleteWordlistStart,
    deleteWordlistSuccess,
    deleteWordlistFailure,
    addWordlistStart,
    addWordlistSuccess,
    addWordlistFailure
} from './wordListRedux'


export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}



// export const getWordlist = async (dispatch, id) => {
export const getWordlist = async (dispatch) => {
    dispatch(getWordlistStart())
    try {
        // const res = await publicRequest.get(`/wordlist/find/${id}`)
        const res = await publicRequest.get(`/wordlist`)
        dispatch(getWordlistSuccess(res.data))
    } catch(err) {
        dispatch(getWordlistFailure())
    }
}


export const deleteWordlist = async (dispatch, id) => {
    dispatch(deleteWordlistStart())
    try {
        await publicRequest.delete(`/wordlist/${id}`)
        // await publicRequest.delete(`/wordlist`)
        dispatch(deleteWordlistSuccess(id))
    } catch(err) {
        dispatch(deleteWordlistFailure())
    }
}


export const addWordlist = async (dispatch, wordlist) => {
    dispatch(addWordlistStart())
    try {
        const res = await publicRequest.post('/wordlist', wordlist)
        dispatch(addWordlistSuccess(res.data))
    } catch(err) {
        dispatch(addWordlistFailure())
    }
}