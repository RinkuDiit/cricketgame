import React, { useEffect } from 'react'
import { useState } from 'react';
import {Link } from 'react-router-dom';

function Toss() {

  

  const [myteam, setmyteam] = useState('')
  const [opponent, setopponent] = useState('')
  const [side, setSide] = useState("");
  const [toss , setToss] = useState('')
  const[button ,setbutton] = useState(false)
  const [mydisplay , setdisplay] = useState('none')
  const[blur ,setblur] = useState('none')
  const[coinbutton ,setcoinbutton] = useState(true)
  const [hello, sethello] = useState('')
  const [first, setFirst] = useState('')

  const team = ['IND','ENG', 'AUS','PAK']
 



  const flipCoin = () => {
    
    const randomNumber = Math.floor(Math.random() * 2);
    const result = randomNumber === 0 ? "HEAD" : "TAIL";
    setSide(result);

    const  display = 'block'
    setdisplay(display)

    const blurs = 'blur(1px)'
    setblur(blurs)

    setcoinbutton(true)


    const batboll = Math.floor(Math.random() * 2);
    const whatfirst = batboll === 0 ? "Bat" : "Boll";
    setFirst(whatfirst);  

    if(whatfirst=='Bat'){
      localStorage.setItem('secteam', myteam )
      localStorage.setItem('firstteam', opponent )
    }
    else if(whatfirst == 'Boll'){
      localStorage.setItem('secteam', opponent )
      localStorage.setItem('firstteam', myteam )
    };
   
  };



  const selectedoption = (event) =>{
    const myTeam = event.target.value
    localStorage.setItem('myTeam',myTeam )
    setmyteam(myTeam)

  } 
  
  const opponentTeam = (event) =>{
    const opponentTeam = event.target.value 
    setopponent(opponentTeam)
    localStorage.setItem('opponentTeam',opponentTeam )

  } 

  const mytoss = (event)=>{

    setToss(event.target.value);
    setbutton(true);
    setcoinbutton(false)
  }

  const batfirst = ()=>{
    localStorage.setItem('firstteam', myteam )
    localStorage.setItem('secteam', opponent )
  }

  const ballfirst = ()=>{
    localStorage.setItem('secteam', myteam )
    localStorage.setItem('firstteam', opponent )

  }

  

  useEffect(()=>{

  

    const wonToss = (
      <div>
        <p className='h6'> <div style={{margin:' 0px 113px'}}>The coin landed on <p style={{color:'rgb(158 90 209)', fontSize:'20px'}}>{side}</p></div></p>
        <p>You <span style={{color:'rgb(158 90 209)', fontSize:'20px'}}>WON</span> the Toss</p>
       <Link to ="/letsplay"> <button onClick={batfirst} className='btn btn-primary'>BAT</button></Link> or <Link to ="/letsplay"><button onClick={ballfirst} className='btn btn-primary'>Boll</button></Link>
      </div>
    );
    const lossToss = (
      <div>
       <p>{opponent} Won the Toss</p>
       <p>They elected to {first} first</p>
      <Link to='/letsplay'><button className='btn btn-primary'>Let's Play</button></Link>
      </div>
    )

  
    
   
    if(toss==side){
        sethello(wonToss)
     }
     else{
      sethello(lossToss)
     }

    
  })
  

  return (
    <div>
          <center>
        <div className="row play">
        <div style={{filter:blur}}>
          <div className="col-sm-12 ssss">
          <button className='btn btn-primary refresh' type='button'>Refesh</button>
            <p className='h2 score'>TOSS </p>
            {/* <label for="myteamselect">Choose your Team</label><br/> */}



            <select onChange={selectedoption} id='myteamselect'>
              <option>Choose your Team</option>
              { team.filter((team) => team !== opponent)
                .map((teams)=>(<option>{teams}</option>))}
              
            </select> <br/><br/>


            

            {/* <label for="opositeteamselect">Choose opponent Team </label><br/> */}

            <select onChange={opponentTeam}  id='oppositeteamselect'>
              <option>Choose opponent Team</option>
              { team.filter((team) => team !== myteam)
                .map((teams)=>(<option>{teams}</option>))}
            </select> <br/><br/>
            <p>{myteam} vs {opponent}</p>
           
           
           
          </div>
          <div className="col-sm-12 ssss">
            <p className='h6'>Choos</p>
          <button style={{marginLeft:'135px'}} onClick={mytoss} value={'HEAD'} disabled={button} className='btn btn-primary btn_btn' >HEAD</button>
          <button className='btn btn-primary btn_btn'  onClick={mytoss} value={'TAIL'} disabled={button}>TAIL</button>
          <p style={{margin:'28px 143px'}}>{toss} is Call</p>
        
             </div>
          <div className="col-sm-12 sss">
            <button onClick={flipCoin} disabled={coinbutton} className='btn btn-primary btn_btn' >Flip Coin</button>
          
          </div>
          </div>

          {/* ------- toss result -------- */}
         <div style={{display:mydisplay}} className='col-sm-12 aftertosspopup'>
        
        {hello}
          </div>
        </div>

      
         
       
       
      </center>
    </div>
  )
}

export default Toss