import { useDispatch, useSelector } from 'react-redux'
import { createAnecdote, createNewAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdote'

const newAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createNewAnecdote(content))
        dispatch(createNotification(`You have created a new anecdote: ${content}`))
        setTimeout(() => {dispatch(createNotification(""))}, 5000)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
            </form>
        </div>
    )
}

export default newAnecdote