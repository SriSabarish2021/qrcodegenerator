import React, { useState } from 'react'

const Number = () => {
    const [curnum,changenum]=useState(1)
    const incre=()=>{
        const val=curnum+1
        changenum(val)
    }
    const decre=()=>{
        const val=curnum-1
        changenum(val)
    }
    const [curname,chnagename]=useState('arun')
    const getval=(value)=>{
        chnagename(value)
    }
  return (
    <div>
        <h1>{curnum}</h1>
        <button type='button' onClick={incre}>grow</button>
        <button type='button' onClick={decre}>reduce</button>
        <h1>{curname}</h1>
        <h3>21</h3>
        <input type='text' value={curname} placeholder='enter name' onChange={(e)=>getval(e.target.value)}></input>
    </div>
  )
}

export default Number