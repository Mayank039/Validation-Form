import React, { useState } from 'react'

export default function Timer() {

    let newTime = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(newTime)

    const UpdateTime = () =>{
        let newCTime = new Date().toLocaleTimeString();
        setCtime(newCTime)
    }
  setInterval(UpdateTime,1000)
  return (
    <div>
    <h1>{newTime}</h1>
    {/* <button onClick={UpdateTime}>Get Time</button>
      */}
    </div>
  )
}
