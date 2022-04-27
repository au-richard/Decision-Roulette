import React, { useState, Component, useContext, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import "../styles/Wheel.scss"
import { Howl } from "howler";
import axios from 'axios';
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
  
  const { categoryName } =
  (props.location && props.location.state) || {};

  console.log("HERE",ctx)
  
  useEffect (() => {
    // if (ctx.data) {
        console.log('search:', ctx.data)
        console.log("my input", ctx.myinput)
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

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API

        console.log(response.data.message) // Just the message
        this.setState({
          message: response.data.message
        });
      })
  }


  return (
    <>
    <p><font color="azure">Category:  </font><font color="limegreen">{ctx.myinput[6]}</font></p>
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