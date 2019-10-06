import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TopAnecdote = ({votes}) => {
  let largest = votes.indexOf(Math.max(...votes));

  if(votes[largest] === 0) {
    return(
      <div>
        <h2>Anecdote with the most votes</h2>
        Insufficient amount of votes to determine a winner
      </div>
    )
  }
  return(
    <div>
      <h2>Anecdote with the most votes</h2>
      "{anecdotes[largest]}"<br/>
      with {votes[largest]} votes!
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))


  const setSelectedAnecdote = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const addVote = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      "{props.anecdotes[selected]}"
      <br/>has {votes[selected]} votes
      <br/>
      <button onClick={() => setSelectedAnecdote()} >Next anecdote</button>
      <button onClick={() => addVote()} >Vote</button>
      <br/>
      <TopAnecdote votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Live, love, mene töihin!'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
