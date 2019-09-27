import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises}
        part2={part2.name} exercises2={part2.exercises}
        part3={part3.name} exercises3={part3.exercises} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
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
      {props.part1}<br/> Exercises: {props.exercises1}<br/>
      {props.part2}<br/> Exercises: {props.exercises2}<br/>
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