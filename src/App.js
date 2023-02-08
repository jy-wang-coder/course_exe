
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      },
    ]

  }

  return (
    <div>
      <Head course={course}/>
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

const Head = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) =>{
  return (
    <div>
      <p>
        {props.course.parts[0].name} {props.course.parts[0].exercise}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exercise}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exercise}
      </p>
    </div>
  )
}



const Total = (props) =>{
  return (
    <div>
      <p>Number of exercises {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise}</p>
    </div>
  )
}



export default App