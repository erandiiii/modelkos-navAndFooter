import React from 'react'
import './Home.scss'
// import firstImage from '././assets/pic/secondpic.jpg'
// import secondImage from '././assets/pic/thirdpic.jpg'
// import Models from './Models'

const Home = () => {
  return (
    <div className="homepage">
      <div className="input-title">
        <h1>HIRE A MODEL OR <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BECOME ONE</h1>
        <div className="filter-models">
          <input className='input1' type="text" />
          <input  className='input2' type="text" />
          <button className='filter-button'>Find model</button>
        </div>

        {/* <div className="inner-img" style={{ content: `url(${firstImage})` }}></div> */}
        {/* <div className="inner-img2" style={{ content: `url(${secondImage})` }}></div> */}
      </div>


      


    </div>
  )
}

export default Home