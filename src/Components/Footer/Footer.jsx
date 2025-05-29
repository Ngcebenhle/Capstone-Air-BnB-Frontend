import React from 'react'
import './Footer.css'


//
import {ReactComponent as Facebook} from '../../Assets/Facebook_Logo.svg'
import {ReactComponent as Twitter} from '../../Assets/Twitter_Logo.svg'
import {ReactComponent as Instagram} from '../../Assets/Instagram_Logo.svg'
import {ReactComponent as Language} from '../../Assets/Language_footer_Icon.svg'
import {ReactComponent as Currency} from '../../Assets/Currency.svg'
const Footer = () => {
  return (
    <div className='footerContainer'>

        <div className="footerLinks">

            <div className="support">
                <h3>Support</h3>

                <div className="supportLinks">
                    <a href="">Help Center</a>
                    <a href="">Safety Information</a>
                    <a href="">Cancellation Options</a>
                    <a href="">Our COVID-19 Response</a>
                    <a href="">Disability Support</a>
                    <a href="">Report Neighborhood Concern</a>
                </div>

            </div>

            <div className="community">
            <h3>Community</h3>

            <div className="communityLinks">
                    <a href="">Airbnb.org Disaster Relief Housing</a>
                    <a href="">Support: Afghan Refugees</a>
                    <a href="">Celebrating Diversity & Belonging</a>
                    <a href="">Combating Discrimination</a>
                </div>

            </div>

            <div className="hosting">
            <h3>Hosting</h3>

            <div className="hostingLinks">
                    <a href="">Try Hosting</a>
                    <a href="">Aircover: Protection for Hosts</a>
                    <a href="">Exlpore Hosting Resources</a>
                    <a href="">Visit Our Community Forum</a>
                    <a href="">How to Host Responsibly</a>
                </div>
            </div>

            <div className="about">
            <h3>About</h3>

            <div className="aboutLinks">
                    <a href="">Newsroom</a>
                    <a href="">Learn About New Features</a>
                    <a href="">Letter From Our Founders</a>
                    <a href="">Careere</a>
                    <a href="">Investors</a>
                    <a href="">Airbnb Luxe</a>
                </div>
            </div>
            
        </div>

        <div className="copyright">
          
            <div className="copywritelinks">
                  <span>&copy; 2020 Airbnb, inc .</span>
                  <span>Privacy .</span>
                  <span>Terms .</span>
                  <span>Sitemap .</span>
            </div>

            <div className="lastOfFooter">
                
                <div className="assist">
                   
                  <div className="language">
                     <div> <Language/></div>

                        <select>
                        <option value="UK English">UK English</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Dutch">Dutch</option>
                            <option value="Greek">Greek</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Swedish">Swedish</option>
                            <option value="Turkish">Turkish</option>
                            <option value="Russian">Russian</option>
                            <option value="Slovenian">Slovenian</option>
                            <option value="Czech">Czech</option>
                            <option value="Hungarian">Hungarian</option>
                            <option value="Polish">Polish</option>
                            <option value="Ukrainian">Ukrainian</option>
                            <option value="Turkish">Turkish</option>
                            <option value="Ibo (Nigeria)">Ibo (Nigeria)</option>
                            <option value="Zulu">Zulu</option>
                            <option value="Swahili">Swahili</option>
                        </select>
                  </div>
                  

                    <div className="currency">
                          
                    
                         <div><Currency/></div>
                   
                        <select>
                            <option value="USD">USD</option>
                            <option value="BRL">BRL</option>
                            <option value="FJD">FJD</option>
                            <option value="BGN">BGN</option>
                            <option value="NZD">NZD</option>
                            <option value="AUD">AUD</option>
                            <option value="BND">BND</option>
                            <option value="SGD">SGD</option>
                            <option value="CAD">CAD</option>
                            <option value="BMD">BMD</option>
                            <option value="PAB">PAB</option>
                            <option value="BSD">BSD</option>
                            <option value="CHF">CHF</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="KYD">KYD</option>
                            <option value="JOD">JOD</option>
                            <option value="OMR">OMR</option>
                        </select>
                    </div>

                   

                </div>

                 <div className="socials">


                    <div><Facebook/></div>
                    <div><Twitter/></div>
                    <div><Instagram/></div>
             
                
                 </div>
            </div>

        </div>
    </div>
  )
}

export default Footer