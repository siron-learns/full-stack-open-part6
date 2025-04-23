import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

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
      }

    return (
        <div>
        {anecdotes
            .sort((a, b) => b.votes - a.votes)
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