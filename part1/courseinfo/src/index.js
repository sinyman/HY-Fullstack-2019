import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.part1}<br/> Exercises: {props.exercises1}<br/><br/>
      {props.part2}<br/> Exercises: {props.exercises2}<br/><br/>
      {props.part3}<br/> Exercises: {props.exercises3}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Total number of exercises: {props.exercises}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
