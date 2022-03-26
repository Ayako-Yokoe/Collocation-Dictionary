import { createSlice } from '@reduxjs/toolkit'


const quizlistSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizlist: [],
        isFetching: false,
        error: false
    },
    reducers: {
        // Get
        getQuizlistStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getQuizlistSuccess: (state, action) => {
            state.isFetching = false
            state.quizlist = action.payload
        },
        getQuizlistFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        // Delete
        deleteQuizlistStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        deleteQuizlistSuccess: (state, action) => {
            state.isFetching = false
            state.quizlist.splice(state.quizlist.findIndex(quiz => quiz._id === action.payload), 1)
        },
        deleteQuizlistFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
    }
})


export const {
    getQuizlistStart,
    getQuizlistSuccess,
    getQuizlistFailure,
    deleteQuizlistStart,
    deleteQuizlistSuccess,
    deleteQuizlistFailure,
} = quizlistSlice.actions

export default quizlistSlice.reducer