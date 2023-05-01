import React,{useState} from 'react'

export default function Usestate() {
    const [count,setCount] = useState(0)
    const IncNum = () =>{
        setCount(count + 1)
        console.log("clicked")
      }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    </>
  )
}
