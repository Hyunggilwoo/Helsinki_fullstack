
const Header = (props) => {
 // render name of course
 return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
 )
}

// const Content = (props) => {
// // render parts
// return (
//   <div>
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   </div>
// )
// }

const Content = (props) => {
  // TODO: How do I make this return 3 parts of things individually
  return (
    <div>
      <p>
        {props.parts.map((partObject) => (
          <Part name={partObject.name} exercises={partObject.exercises} />
          ))}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
}

const Total = (props) => {
  let totalExercises = 0
  for (let i = 0; i < props.number.length; i++) {
    totalExercises += props.number[i].exercises;
  }

  return (
    <div>
      Number of exercises {totalExercises}
    </div>
  )
}


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
      <Content parts={[part1, part2, part3]} />
      
      <Total number={[part1, part2, part3]} />        
    </div>
  )
}

export default App
