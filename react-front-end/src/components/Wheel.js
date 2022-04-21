import React, { useState, Component } from 'react';
import { Wheel } from 'react-custom-roulette';
import classNames from "classnames";
import "../styles/Wheel.scss"
import { Howl } from "howler";

const data = [
  { option: 'option 1', style: {backgroundColor: '#170055', textColor: 'azure', } },
  { option: 'option 2', style: {backgroundColor: '#3E00FF', textColor: 'orange'} },
  { option: 'option 3', style: {backgroundColor: '#DC143C', textColor: '#7FFF00'} },
  { option: 'option 4', style: {backgroundColor: '#B5FFD9', textColor: '#808080'} },
  { option: 'option 5', style: {backgroundColor: 'purple', textColor: 'orange'} },
  { option: 'option 6', style: {backgroundColor: '#7FFF00', textColor: '#3E00FF'} }
]


export default () => {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    
    const handleSpinClick = () => {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
      soundPlay()
    }

    const soundPlay = () => {
      const sound = new Howl ({
        src: "http://soundbible.com/grab.php?id=673&type=mp3",
        html5: true
      })
      sound.play();
    }

    return (
    <>
        <button onClick={ handleSpinClick } className='spin_button'>SPIN</button>
      <Wheel 
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor='azure'
        radiusLineColor='azure'
        className="wheel_container"

        
        
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        />
    </>
  )
}