import React from 'react'
import {Col, Row, Container,Card} from 'react-bootstrap'
import immg2 from '../assets/corr2.jpg'
import board1 from '../assets/board1.png'
import board2 from '../assets/board2.jpg'
import board3 from '../assets/board3.jpg'
import board4 from '../assets/board4.jpg'

const OurTeam = () => {
    const styles={marginTop:'150px', marginLeft:'15px',boxSizing:'border-box',borderTopRightRadius:'50%',background:'rgba(255,255,255,0.7)',height:'80px'}
    return (
        <div style={{backgroundColor:'rgba(200,200,200,0.7)',padding:'20px'}}>
        <div style={{textAlign:'center'}}>
            <h3>OUR TEAM</h3>
            <h4> THE BOARD</h4>
            <span>THE BOARD
WE ARE A VALUES ORIENTED AND DRIVEN ORGANIZATION THAT ENABLE US TO LIVE OUT OUR
 PURPOSE OF IMPACTING THE WORLD AND EMPOWERING THE INDIVIDUALS WE WORK WITH AND COMMUNITIES 
 THAT WE WORK IN. WITH BACKGROUNDS IN LAW, ACCOUNTS, SOCIAL ENTREPRENEURSHIP TO MENTION A FEW, 
 OUR BOARD OF DEDICATED PROFESSIONALS BRING TO BEAR SECTOR-SPECIFIC AS WELL AS OVERALL MANAGEMENT EXPERTISE,
  AND LEVERAGE A WEALTH OF BOTH LOCAL AND INTERNATIONAL
 EXPERIENCE TO CREATE AND DELIVER HIGH QUALITY PROGRAMMES TO ACHIEVE  THE ORGANIZATION’S GOALS AND OBJECTIVES</span>
        </div>
        <div class="card-deck">
  <div class="card">
    <img src={board1} class="card-img-top" imagerounded alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Wilfred Ngunjiri Nderitu</h6>
      <p>Chair of the Board</p>
    </div>
  </div>
  <div class="card">
    <img src={board2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Marion OP Het Veld</h6>
      <p>Secretary of the Board</p>
    </div>
  </div>
  <div class="card">
    <img src={board3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">Peter Ouko</h6>
      <p>Founder & C.E.O</p>
    </div>
  </div>
  <div class="card" style={{paddingBottom:'0'}}>
    <img src={board4} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h6 class="card-title">Andrew Jackson</h6>
    <p>Treasurer of the Board</p>
    </div>
  </div>
</div>
      </div>
    )
}

export default OurTeam
