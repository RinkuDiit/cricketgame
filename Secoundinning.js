import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Secoundinning() {
  const mytarget = localStorage.getItem('target')
  const secteam = localStorage.getItem('secteam')

  const [allruns, setAllruns] = useState([]);
  const[array, setarray] = useState([])
  const [total, setTotal] = useState(0) 
  const[ wicket, setWicket] = useState(0)
  const[secoud ,setSeconds] = useState('')
  const[remainingrun ,setremainingrun] = useState(mytarget)
  const[remainingballs ,setremainingballs] = useState('12')
  const[Button,setButton] = useState('Play')


 




  const Ball = allruns.length
  const over = Math.floor(Ball / 6);
  const ball = Ball % 6;
  const overTotel = over +'.'+ball; 
 

useEffect(()=>{


  if(allruns.length >= 12 || total > mytarget){
    const inning = '/result'
    const btnName = 'Result'
    setSeconds(inning);
    setButton(btnName);
    
    const mytarget = total;
    localStorage.setItem('2ndinningscore', mytarget)
    localStorage.setItem('2ndinningwicket',wicket )
    localStorage.setItem('2ndinninover',overTotel )


  
}
if(total > mytarget){
  setremainingrun(0);
}
})

  


  const playCricket = () => {
    const run = Math.random() * 7 - 1;
    const runs = Math.floor(run);
    console.log(runs)

  


    if(runs == -1){
      
      const runs = 'W'
      setAllruns(prevRuns => [...prevRuns, runs]);
      setarray(prevRuns => [...prevRuns, runs]);

    }
    else if(runs == 5){
      
      const runs = 6
      setAllruns(prevRuns => [...prevRuns, runs]);
      setarray(prevRuns => [...prevRuns, runs]);

    }
    else{
      setAllruns(prevRuns => [...prevRuns, runs]);   
      setarray(prevRuns => [...prevRuns, runs]);

    }

    debugger

    if(runs == -1){
      const wickets = 1
      setWicket(wicket + wickets);
    }
    else  if(runs == 5){
      const runs = 6
      setTotal(total + runs)
      const needrun = remainingrun - runs;
      setremainingrun(needrun);

    }
    else{
      setTotal(total + runs)
      const needrun = remainingrun - runs;
      setremainingrun(needrun);
    }
   
   

    const inball = remainingballs - 1;
    setremainingballs(inball)
   
  };

   if(array.length>=7){
    debugger
    const newarray  = array.slice(6)
    setarray(newarray);
    
  };

 
 

  return (
    <div>
      <center>
        <div className="row play">
          <div className="col-sm-12 ssss">
            <p className='h2 score'>Score Board</p>
            <p>{secteam} {total}/{wicket}</p>
            <p>Over: {overTotel}</p>
            <p>Target: {mytarget}</p>
            <p>NEED {remainingrun} TO WIN FROM {remainingballs} BALLS </p>
          </div>
          <div className="col-sm-12 sss">
            {array.map((myrun) => (
              <div style={{ backgroundColor: myrun === 'W' ? 'red':myrun === 4 ? 'purple' : 'blue' }}   className='col-sm-1 run'>{myrun}</div>
            ))}
          </div>
          <div className="col-sm-12 sss">
          <Link to={secoud}><button className='btn btn-primary btn_btn' onClick={playCricket}  >{Button}</button></Link>

          </div>
        </div>
      </center>
    </div>
  );


}


export default Secoundinning