import { useState } from 'react'

const Button = (props) =>(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) =>{
  const{text,value} = props
  return(
  <p> {text} {value} </p>
  )
}

const Statistic = (props) =>{
  const {good, bad, neutral, total} = props
  if (total === 0) {
    return (
    <div> 
      <h1> statistics </h1>
      No feedback is given yet. 
    </div>
    )
  }
  return(
    <div>
      <h1> statistics </h1>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="total" value ={total} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  const goodhandleClick = () =>{
    console.log('good before', good)
    setGood(good + 1)
    setTotal(total + 1)
  }

  const neutralhandleClick = () =>{
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const badhandleClick = () =>{
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={goodhandleClick} text='good'/>
      <Button handleClick={neutralhandleClick} text='neutral'/>
      <Button handleClick={badhandleClick} text='bad'/>
      <Statistic good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

export default App
