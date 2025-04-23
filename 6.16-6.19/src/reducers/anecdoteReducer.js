import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdote'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action){
      const newAnecdote = asObject(action.payload)
      state.push(newAnecdote)
    },
    addVote(state, action){
      const id = action.payload
      const anecdote = state.find(n => n.id === id)
      const changedAnecdote = {... anecdote, votes: anecdote.votes + 1}
      return state.map(
        note => note.id !== id ? note : changedAnecdote
      )
    },
    setAnecdotes(state, action){
      return action.payload
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    }
  }
})


export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes)) 
  }
}

export const createNewAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const { createAnecdote, addVote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer