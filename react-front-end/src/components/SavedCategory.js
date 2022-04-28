import React, { useState, Component, useContext, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import "../styles/Wheel.scss"
import { Howl } from "howler";
import { categoryContext } from '../providers/createProvider';

const data = [
  { option: '', style: { backgroundColor: '#170055', textColor: 'azure', } },
  { option: '', style: { backgroundColor: '#3E00FF', textColor: 'orange' } },
  { option: '', style: { backgroundColor: '#DC143C', textColor: '#7FFF00' } },
  { option: '', style: { backgroundColor: '#B5FFD9', textColor: '#808080' } },
  { option: '', style: { backgroundColor: 'purple', textColor: 'orange' } },
  { option: '', style: { backgroundColor: '#7FFF00', textColor: '#3E00FF' } }
]

const SavedCategory = props => {

  const [spinnerData, setSpinnerData] = useState("")
  const ctx = useContext(categoryContext)
  
  useEffect (() => {
      {
        const data = [
          { option: (ctx.myinput[0]), style: {backgroundColor: '#170055', textColor: 'azure', } },
          { option: (ctx.myinput[1]), style: {backgroundColor: '#3E00FF', textColor: 'orange'} },
          { option: (ctx.myinput[2]), style: {backgroundColor: '#DC143C', textColor: '#7FFF00'} },
          { option: (ctx.myinput[3]), style: {backgroundColor: '#B5FFD9', textColor: '#808080'} },
          { option: (ctx.myinput[4]), style: {backgroundColor: 'purple', textColor: 'orange'} },
          { option: (ctx.myinput[5]), style: {backgroundColor: '#7FFF00', textColor: '#3E00FF'} }
        ]
        console.log('DATA', data);
      setSpinnerData(data);
    }
  }, [])

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
    soundPlay()
  }

  const soundPlay = () => {
    const sound = new Howl({
      src: "http://soundbible.com/grab.php?id=673&type=mp3",
      html5: true
    })
    sound.play();
  }

  return (
    <>
    <div className="saved_category">
    <p><font color="azure">Category:  </font><font color="#7fff00">{ctx.myinput[6]}</font></p>
    </div>
      <button onClick={handleSpinClick} className='spin_button'>SPIN</button>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={spinnerData}
        outerBorderColor='azure'
        radiusLineColor='azure'
        className="wheel_container"



        onStopSpinning={() => {
          setMustSpin(false);
          // display search result links (e.g. )
        }}
      />
    </>
  )
      }

export default SavedCategory;