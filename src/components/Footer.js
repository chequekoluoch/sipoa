import React from 'react'
import '../App.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookSquare,FaInstagram,FaYoutube,FaTwitter } from 'react-icons/fa';
import { faEnvelope,faPhoneAlt,faClock,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ngo from '../assets/ngo.png'


const Footer = () => {
    return (
        <div class="card-group" style={{marginTop:'40px',color:'white'}}>
  <div class="card" style={{backgroundColor:'red',margin:'0px'}}> 
    <div class="card-body">
      <h4 class="card-title">APPROACHES</h4>
      <li>Innovative access to justice for all.</li>
      <li>Active citizen mobilization for safer communities.</li>
      <li>Ethical social entrepreneurship.</li>
      <li>Sustainable re-entry support.</li>
      
  
      <FaFacebookSquare />
      <FaInstagram />
      <FaYoutube />
      <FaTwitter /><br></br><br></br>
      <button class="btn btn-dark" type="submit">DONATE</button><br></br>
      

</div>

  </div>
  <div class="card" style={{backgroundColor:'red',margin:'0px'}}>
    <div class="card-body">
      <h4 class="card-title">OUR IMPACT</h4>
      <a href=""><li>The Need</li></a>
      <a href=""><li>Feedback</li></a>
      <a href=""><li>Our Gallery</li></a>
      <a href=""><li>Blog</li></a>
      <button style={{margin:'15px 4px',width:'95%'}}><img width='100%' src={ngo} alt=""/></button>
    </div>
  </div>
  <div class="card" style={{backgroundColor:'red',margin:'0px'}}>
  <div class="card-body">
      <h4 class="card-title">OUR IMPACT</h4>
      <a href=""><li>Get involved</li></a>
      <a href=""><li>Donate</li></a>
      <a href=""><li>Fund raise</li></a>
      <a href=""><li>Shop</li></a>
      <a href=""><li>Contact us</li></a>
    </div>
  </div>
  <div class="card" style={{backgroundColor:'red',margin:'0px'}}>
  <div class="card-body">
      <h4 class="card-title">ABOUT US</h4>
      <a href=""><li>Our Story</li></a>
      <a href=""><li>Feedback</li></a>
      <a href=""><li>Media Reports</li></a>
      <p>
CRIME SI POA.<br></br>
<FontAwesomeIcon icon={faMapMarkerAlt} /> Sarakasi Dome, Ngara Road, Nairobi Kenya.<br></br>

 
<FontAwesomeIcon icon={faPhoneAlt} /> 
<li>(+254) 741 506060<br></br></li>
<li>(+254) 777 506060<br></br></li>
<li>(+254) 762 506060<br></br></li>

 
<FontAwesomeIcon icon={faEnvelope} /> info@crimesipoa.org<br></br>

 
<FontAwesomeIcon icon={faClock} />
Mon – Fri  8:00am – 5:00pm<br></br>
Sat  9:00am – 01:00pm</p>
    </div>
  </div>
</div>
    )
}

export default Footer
