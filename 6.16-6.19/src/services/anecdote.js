import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const asObject = (anecdote) => {
    return {
      content: anecdote,
      votes: 0
    }
  }

const getAll =  async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const newAnecdote = asObject(content)
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

const updateVote = async (anecdote) => {
  console.log('ANECDOTE', anecdote)
  const newUrl = `${baseUrl}/${anecdote.id}`
  const response = await axios.put(newUrl, anecdote)
  return response.data
}

export default { getAll, createNew, updateVote } 