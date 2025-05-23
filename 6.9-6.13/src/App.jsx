import { useSelector, useDispatch } from 'react-redux'
import { addVote, createAnecdote } from './reducers/anecdoteReducer'

import Anecdotes from './components/Anecdotes'
import CreateNewAnecdote from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
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