const Header = (props) => {
    console.log('Header component added.')
    return (
      <h1>{props.course}</h1>
    )
}

const Content = (props) => {
  console.log("Content component added.")
  return (
    <div>
      <Part exercise={props.exercises[0]} />
      <Part exercise={props.exercises[1]} />
      <Part exercise={props.exercises[2]} />
    </div>
  )
}

const Part = (props) => {
  console.log('Part component added.')
  return (
    <>
      <p>
        {props.exercise.part} {props.exercise.exercises}
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