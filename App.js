import React from 'react'
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Liveplay from './component/Liveplay';
import Secoundinning from './component/Secoundinning';
import Firstinningover from './component/Firstinningover';
import Resultofmatch from './component/Resultofmatch';
import Toss from './component/Toss';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Toss/>} />
               <Route path='/letsplay' element={<Liveplay/>} />
               <Route path='/secoud' element={<Firstinningover/>} />
               <Route path='/secoudinning' element={<Secoundinning/>} />
               <Route path='/result' element={<Resultofmatch/>} />
              




            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App