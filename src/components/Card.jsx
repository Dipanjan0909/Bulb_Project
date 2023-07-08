import React from 'react'
import OffBulb from '../assets/off.png';
import OnBulb from '../assets/on.png';
function Card(props) {
  return (
    <div>
      <img src={props.obj === false ? OffBulb : OnBulb}/>
    </div>
  );
}
export default Card;