import { useState } from 'react'
import Titimg from './titimg'
import './App.css'
import Imput from './imput'
import Number from './number'

function App() {
  const[img,newimg]=useState()

  const[classimg,classnewimg]=useState('')

  return (
    <>
      <Titimg img={img} 
      classimg={classimg}/>
      <Imput newimg={newimg}
      classnewimg={classnewimg}/>
      <Number/>
    </>
  )
}

export default App
