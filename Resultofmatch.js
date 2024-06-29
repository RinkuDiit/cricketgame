import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


function Resultofmatch() {

    
  const team = localStorage.getItem('firstteam')
  const secteam = localStorage.getItem('secteam')

    const mytarget = localStorage.getItem('target')
    const wicket = localStorage.getItem('wicket')
    const lastinningscore = localStorage.getItem('2ndinningscore')
    const lastinninwicket = localStorage.getItem('2ndinningwicket')
    const lastinninover = localStorage.getItem('2ndinninover')

    const [result,setresult] = useState('')
    const[winningmargin , setwinnigmargin] = useState()

   useEffect(()=>{
    if( mytarget > lastinningscore){
        // const winteam = {team}
        setresult(team)
        const wonby = mytarget - lastinningscore + ' '+'run'
        setwinnigmargin('win by'+' '+wonby)
    }
    else if(lastinningscore == mytarget){
      setresult('Match Tied')
    }

    else{
        // const winteam = 'IND'
        setresult(secteam)
        const wonby = 10 - lastinninwicket +' '+ 'Wickets'
        setwinnigmargin('win by'+' '+wonby)
    }
   })
   



 return (
    <div>
      <center>
        <div className="row play">
          <div className="col-sm-12 ssss">
            <Link to='/'><button className='btn btn-primary refresh' type='button'>Refesh</button></Link>
            <p className='h2 score'>Score Card</p>
            <p>{team}  {mytarget}/{wicket} in 2.0 overs </p>
            <p>{secteam}  {lastinningscore}/{lastinninwicket} in {lastinninover} overs  </p>
           
           
           
          </div>
          <div className="col-sm-12 sss">
             <p className='h5'>{result} {winningmargin}</p>
          </div>
          <div className="col-sm-12 sss">
            {/* <button className='btn btn-primary btn_btn' >Batting</button> */}
          {/* <button className='btn btn-primary btn_btn'>Play 2nd inning</button> */}
          </div>
        </div>
        <canvas id="confetti"></canvas>

      </center>
    </div>
  )
}

export default Resultofmatch