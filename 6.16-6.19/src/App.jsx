import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, createAnecdote } from './reducers/anecdoteReducer'

import Anecdotes from './components/Anecdotes'
import CreateNewAnecdote from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdote'
import { setAnecdotes, initializeAnecdote } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdote())
  })

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter/>
      <Anecdotes />
      <CreateNewAnecdote  />
    </div>
  )
}

export default App