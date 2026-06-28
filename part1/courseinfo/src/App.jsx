const Header = (props) => {
    console.log('Header component added.')
    return (
      <h1>{props.course}</h1>
    )
}

const Content = (props) => {
  console.log("Content component added.")
  return (
    <>
      <p>
      {props.exercises[0].part} {props.exercises[0].exercises}
      </p>
      <p>
        {props.exercises[1].part} {props.exercises[1].exercises}
      </p>
      <p>
        {props.exercises[2].part} {props.exercises[2].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  console.log('Total component added.')
  return (
    <>
      <p>Number of exercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const exercises = [
    {part: "Fundamentals of React", exercises: 10}, 
    {part: "Using props to pass data", exercises: 7}, 
    {part: "State of a component", exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App