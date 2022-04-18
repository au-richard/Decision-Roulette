import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import classNames from "classnames";
import "../styles/Wheel.scss"

const data = [
  { option: 'option 1', style: {backgroundColor: 'blue', textColor: 'black'} },
  { option: 'option 2', style: {backgroundColor: 'purple', textColor: 'orange'} },
  { option: 'option 3' },
  { option: 'option 4' },
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <>
      <Wheel 
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        className="wheel_container"

        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick} className='spin_button'>SPIN</button>
    </>
  )
}

