import { createSlice } from "@reduxjs/toolkit"

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
    }
  }
})

export const { createAnecdote, addVote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer