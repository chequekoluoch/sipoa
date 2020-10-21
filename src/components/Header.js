import React from 'react'
import logo from '../assets/crimesipoalogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,  } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookSquare,FaInstagram,FaYoutube,FaTwitter,FaSearch } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';
import NavBar from './NavBar'

const Header = () => {
    return (
        <>
        <div style={{height:'50px',background:'rgb(230,17,17)',width:'100%',color:'white'}}>
            <span style={{marginLeft:'50%'}}>CRIME SI POA|IT'S ABOUT YOU!| INFORM.REFORM.TRANSFORM</span>
        <span style={{float:'right',padding:'10px'}}>
        <FaFacebookSquare />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
        </span>
       </div>
       
        <div className="container" style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>

         <img src={logo} alt="crime si poa"/>
         <div style={{display:"flex",justifyContent:'space-between'}}>
         <span style={{
            borderLeft: '1px solid gray',
            height: '100%'
        }}></span>
        
        <span style={{margin:'0 10px'}}>EMAIL SUPPORT<br></br>
             info@crimesipoa.org</span>
             <span style={{
            borderLeft: '1px solid gray ',
            height: '100%'
        }}></span>

             <span style={{margin:'0 10px'}}>CALL SUPPORT<br></br>
             (+254) 762506060</span>
             <span style={{
            borderLeft: '1px solid gray',
            height: '100%'
        }}></span>

             <span style={{margin:'0 10px'}}>WORKING HOURS<br></br>
             Mon – Fri 8:00am – 5:00pm
             Sat 9:00am – 1:00pm</span>
             <span style={{
            borderLeft: '1px solid gray',
            height: '100%'
        }}></span>

         </div>
        <div>
        <button style={{marginTop:'15px'}} class="btn btn-dark" type="submit">DONATE</button>
        </div>
        </div>
        <div>
       <NavBar />
       </div>
       </>
    )
}

export default Header
