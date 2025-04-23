import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            {anecdote.content}
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
          </div>
        </div>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if (state.filter !== ""){
            return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter))
        }
        return state.anecdotes

    })

    const vote = (id) => {
        dispatch(addVote(id))
        const selectedAnecdote = anecdotes.filter(note => note.id === String(id))
        dispatch(createNotification(`You voted "${selectedAnecdote[0].content}"`))
        setTimeout(() => {dispatch(createNotification(""))}, 5000)
      }

    return (
        <div>
        {[...anecdotes].sort((a, b) => b.votes - a.votes)
            .map(
                anecdote => <Anecdote 
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => vote(anecdote.id)
                } 
            />
        )} 
        </div>
    )
}

export default Anecdotes