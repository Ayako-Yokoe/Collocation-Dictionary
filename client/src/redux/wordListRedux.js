import { createSlice } from '@reduxjs/toolkit'

const wordlistSlice = createSlice({
    name: 'wordlist',
    initialState: {
        wordlist: [],
        isFetching: false,
        error: false
    },
    reducers: {
        // Get
        getWordlistStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getWordlistSuccess: (state, action) => {
            state.isFetching = false
            state.wordlist = action.payload
        },
        getWordlistFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        // Delete
        deleteWordlistStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        deleteWordlistSuccess: (state, action) => {
            state.isFetching = false
            state.wordlist.splice(state.wordlist.findIndex(word => word._id === action.payload), 1)
        },
        deleteWordlistFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        // Add
        addWordlistStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addWordlistSuccess: (state, action) => {
            state.isFetching = false
            state.wordlist.push(action.payload)
        },
        addWordlistFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})


export const {
    getWordlistStart,
    getWordlistSuccess,
    getWordlistFailure,
    deleteWordlistStart,
    deleteWordlistSuccess,
    deleteWordlistFailure,
    addWordlistStart,
    addWordlistSuccess,
    addWordlistFailure
} = wordlistSlice.actions

export default wordlistSlice.reducer