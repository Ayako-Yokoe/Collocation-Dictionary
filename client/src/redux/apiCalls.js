import { publicRequest } from "../requestMethods";
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


export const getWordlist = async (dispatch) => {
    dispatch(getWordlistStart())
    try {
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
        dispatch(deleteWordlistSuccess(id))
    } catch(err) {
        dispatch(deleteWordlistFailure())
    }
}


export const addWordlist = async (dispatch, wordlist) => {
    dispatch(addWordlistStart())
    try {
        // const res = await publicRequest.post('/wordlist', { wordlist })
        const res = await publicRequest.post('/wordlist',  { front: wordlist.collocation, back: wordlist.examples } ) 
        dispatch(addWordlistSuccess(res.data))
    } catch(err) {
        dispatch(addWordlistFailure())
    }
}
