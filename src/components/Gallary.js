import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../App.css";

import board1 from '../assets/board1.png'
import board2 from '../assets/board2.jpg'
import board3 from '../assets/board3.jpg'
import board4 from '../assets/board4.jpg'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Gallary=()=>{
  return (
    <div style={{marginTop:'50px'}}>
      <h1 style={{ textAlign: "center",fontFamily:'san sarif',color:'red' }}>THE PHOTO GALLARY</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={board1} heigth="100%" width="100%" alt=""/></Item>
          <Item><img src={board2} heigth="100%" width="100%" alt=""/></Item>
          <Item><img src={board3} heigth="100%" width="100%" alt=""/></Item>
          <Item><img src={board4} heigth="100%" width="100%" alt=""/></Item>
          <Item><img src={board1} heigth="100%" width="100%" alt=""/></Item>
          <Item><img src={board2} heigth="100%" width="100%" alt=""/></Item>
          <Item><img src={board3} heigth="100%" width="100%" alt=""/></Item>
          <Item><img src={board4} heigth="100%" width="100%" alt=""/></Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Gallary
