import './title.css'
const Titimg = ({img,classimg}) => {
    return (
        <div className='title'>
            <h4>QR generator</h4>
            <img id='image' className={classimg}  src={img} alt="" />
        </div>
    
  )
}

export default Titimg