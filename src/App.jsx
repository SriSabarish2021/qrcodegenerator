import { useState } from 'react'
import Titimg from './titimg'
import './App.css'
import Imput from './imput'

function App() {
  const[img,newimg]=useState()

  const[classimg,classnewimg]=useState('')

  return (
    <>
      <Titimg img={img} 
      classimg={classimg}/>
      <Imput newimg={newimg}
      classnewimg={classnewimg}/>
    </>
  )
}

export default App
