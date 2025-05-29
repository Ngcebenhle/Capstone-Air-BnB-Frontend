import React from 'react'
import './LogInPage.css'
import {ReactComponent as LogoRed} from '../../Assets/LogoRed.svg'
import LogIn from '../../Components/LogIn/LogIn'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const LogInPage = () => {
 const history = useHistory();
  return (
    <div className='LogInPage'>

       <div className="logInNav">
           <div className="logInLogo" onClick={(e) => {
            e.preventDefault()
            history.push('/')
           }}>
              <LogoRed/>
           </div>
       </div>

       <div className="logInForm">
         <LogIn/>
       </div>
       
    </div>
  )
}

export default LogInPage