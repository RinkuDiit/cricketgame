import React from 'react'
import { Link } from 'react-router-dom'




function Firstinningover() {
  const mytarget = localStorage.getItem('target')
  const wicket = localStorage.getItem('wicket')
  const overs = localStorage.getItem('totalovers')
  const team = localStorage.getItem('firstteam')


  return (
    <div>
      <center>
        <div className="row play">
          <div className="col-sm-12 ssss">
            <p className='h2 score'>Score Board</p>
            <p>{team}  {mytarget}/{wicket}  </p>
            <p>Over:{overs}</p>
           
          </div>
          <div className="col-sm-12 sss">
             <p className='h5'>TARGET: {mytarget} Run in {overs} Overs</p>
          </div>
          <div className="col-sm-12 sss">
            {/* <button className='btn btn-primary btn_btn' >Batting</button> */}
              <Link to='/secoudinning' ><button className='btn btn-primary btn_btn'>Play 2nd inning</button></Link>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Firstinningover