import {React, useContext} from 'react'
import './Home.css'
// import 'react-datepicker/dist/react-datepicker.css'
// import DatePicker from "react-datepicker";
import NavUserTab from '../../Components/NavUserTab/NavUserTab'
import HomeNavSearch from '../../Components/HomeNavSearch/HomeNavSearch'
import {ReactComponent as LogoWhite} from '../../Assets/Logo_White.svg'
import { useHistory, NavLink } from "react-router-dom"
// import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'
import {ReactComponent as GiftCard} from '../../Assets/Gift_Card.svg'
import {ReactComponent as ThingsToDoAtHome} from '../../Assets/Things_To_Do_At_Home.svg'
import {ReactComponent as ThingsToDoOnYourTrip} from '../../Assets/Things_To_Do_On_Your_Trip.svg'

import LogInContext from '../../Context/LogInContext'

// cards
import {ReactComponent as Card1} from '../../Assets/Cards/Card1.svg'
import {ReactComponent as Card2} from '../../Assets/Cards/Card2.svg'
import {ReactComponent as Card3} from '../../Assets/Cards/Card3.svg'
import {ReactComponent as Card4} from '../../Assets/Cards/Card4.svg'



const Home = () => {
   
    const history = useHistory();
    
  return (
    <div className='home'>

       <div className="nav">

            <div className="logo" onClick={(e) => {
                e.preventDefault()
                // Redirect to Home Page
                history.push("/");
            }}>
                <LogoWhite/>
            </div>

            <div className="navLinks">
                <span>Places to Stay</span>
                <span>Experiences</span>
                <span>Online Experiences</span>
            </div>

            <div className="NavUserProfile">
                <NavUserTab/>
            </div>

       </div>

       <div className="locationFilter">
            <div>
                <HomeNavSearch/>
            </div>
       </div>

       <div className="banner">

         <img src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/02/Airbnb-Stay-Joshua-Tree-1920x1152.jpg" 
         alt="" />
         
         <div className="bannerText">
            <div className="bannerTextContent">
            <h1>Not Sure Where to Go? Perfect</h1>
            <button>i'm flexible</button>
            </div>
         </div>

       </div>
       
       <div className="extraContent">

           <div className="inspiration">
            <h2>Inspiration for your next trip</h2>
            <div className="inspirationCards">
                
                <div className='card1'><Card1/></div>
                <div className='card2'><Card2/></div>
                <div className='card3'><Card3/></div>
                <div className='card4'><Card4/></div>
             

                 {/* <Card/>
                 <Card/>
                 <Card/>
                 <Card/> */}

                 {/* <div className='card'>
                    <img src="" alt="" />
                    <div className="details">
                        <h5>hello</h5>
                    </div>
                 </div> */}

            </div>
           </div>

           <div className="discover">
             <h1>Discover Airbnb Experiences</h1>

             <div className="banners">

                <div className="photo1">
                    {/* <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-3133339-media_library/original/9b251ae4-3e47-48d3-b78d-080c5d9388fc.jpeg?im_w=720" 
                    alt="" />
                    <div className="photo1Text">
                        <h1>Things to do on your trip</h1>
                        <button>Experiences</button>
                    </div> */}
                     <ThingsToDoOnYourTrip/>
                </div>

                <div className="photo2">
                    {/* <img src="https://i.insider.com/5ddd23e0695b58490a314289?width=750&format=jpeg&auto=webp" 
                    alt="" />
                    <div className="photo2Text">
                        <h1>Things to do at home</h1>
                        <button>Online Experience</button>
                    </div> */}
                    
                    <ThingsToDoAtHome/>
                </div>

             </div>
           </div>

           <div className="shop">

            <div className="shopText">
               <div className="shopTextContent">
               <h1>Shop Airbnb
                gift cards</h1>
               <button>Learn More</button>
               </div>
            </div>

            <div className="shopImage">
               <div>
               <GiftCard/>
               </div>
            </div>

            
           </div>

           <div className="questionsBanner">
            <img src="https://media.cntraveler.com/photos/5d112d50c4d7bd806dbc00a4/16:9/w_1280,c_limit/airbnb%20luxe.jpg" 
            alt="" />

            <div className="questionsText">
                <h1>Questions about hosting?</h1>
                <button>Ask a Question</button>
            </div>
           </div>
           
           <div className="inspirationForFuture">

                <h2>Inspiration for future getaways</h2>

                <div className="links">
                    
                    <section className='section1'>Destinations for outdoor adventure</section>
                    <section className='section3'>Mountain cabins</section>
                    <section className='section4'>Popular destinations</section>
                    <section className='section5'>Unique Stays</section>
                    <section className='section6'>Mountain cabins</section>
                    
                    

                   
                    
                   
                </div>

                <div className="suggestions">

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                </div>

                <div className="suggestions">
                    
                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                </div>

                <div className="suggestions">
                    
                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <h2>France</h2>
                        <span>italy</span>
                    </div>

                    <div className="sugestedlocations">
                        <a href="">Show More</a>
                    </div>

                </div>

           </div>

           
             <Footer/>
       </div>

    </div>
  )
}

export default Home