import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

export const createAnecdote = (newNote) => {
    return axios.post(baseUrl, newNote).then(response => response.data)
}

export const updateAnecdote = (updatedNote) => {
    return axios.put(`${baseUrl}/${updatedNote.id}`, updatedNote).then(response => response.data)
}