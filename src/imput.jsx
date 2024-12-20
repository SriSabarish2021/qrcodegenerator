import React, { useState } from 'react'
import './imput.css'
import { useEffect } from 'react'
const Imput = ({newimg,classnewimg,img}) => {
    const [curval,changeval]=useState('')
    const [getimg,changeimg]=useState('')
    const [load,isloading]=useState(true)

    async function getting(){
        try{
            isloading(true)
            const fetching= `https://api.qrserver.com/v1/create-qr-code/?size=${getimg}x${getimg}&data=${curval}`
            newimg(fetching)
        }
        catch(err){
            console.log(err);
            
        }
        finally{
            classnewimg("display")
            isloading(false)
        }
    }
    
  return (
    <>

        <div className='input'>
            <div className='oneinp'>
                <label htmlFor="url">Data for QR code</label>
                <input type="text" placeholder='enter the link' id='url' value={curval} onChange={(e)=>changeval(e.target.value)}/>
            </div>
            <div className='ndinp'>
                <label htmlFor="size">Image size (eg:..150)</label>
                <input type="text" placeholder='Metion size' id='size' value={getimg} onChange={(e)=>changeimg(e.target.value)}/>
            </div>
            <div className='buttons'>
                <button className='btn1' type='button' onClick={()=>{curval&&getimg?getting()
                :alert("please entet the field")}}>Get QR</button>
                <a href = {img} download>
                    <button className='btn2' type='button' >Get Image</button>
                </a>
            </div>
           

        </div>
    </>
  )
}

export default Imput