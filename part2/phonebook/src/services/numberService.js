import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
  })
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => {
    return response.data
  })
}

const deletePerson = idToBeDeleted => {
  const deleteURL = baseUrl+'/'+idToBeDeleted
  const request = axios.delete(deleteURL)
  return request.then(response => {
    return response.data
  })
  .catch(error => {
    console.log('Error:',error)
  })
}


export default { getAll, create, deletePerson }
