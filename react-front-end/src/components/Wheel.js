import React, { useState, Component, useContext, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import classNames from "classnames";
import "../styles/Wheel.scss"
import { searchContext } from '../providers/SearchProvider';


//import search from "./Search";
// import { Howl } from 'howler';

// loop through fetchResult to obtain data for "option" key in data array below

import { Howl } from "howler";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const data = [
  { option: '', style: { backgroundColor: '#170055', textColor: 'azure', } },
  { option: '', style: { backgroundColor: '#3E00FF', textColor: 'orange' } },
  { option: '', style: { backgroundColor: '#DC143C', textColor: '#7FFF00' } },
  { option: '', style: { backgroundColor: '#B5FFD9', textColor: '#808080' } },
  { option: '', style: { backgroundColor: 'purple', textColor: 'orange' } },
  { option: '', style: { backgroundColor: '#7FFF00', textColor: '#3E00FF' } }
]




export default () => {
  const [spinnerData, setSpinnerData] = useState(data)
  const ctx = useContext(searchContext)
  
  
  useEffect (() => {
    if (ctx.data) {
      console.log('search:', ctx.data)
      const data = [
        { option: (ctx.data[0].name), style: {backgroundColor: '#170055', textColor: 'azure', } },
        { option: (ctx.data[1].name), style: {backgroundColor: '#3E00FF', textColor: 'orange'} },
        { option: (ctx.data[2].name), style: {backgroundColor: '#DC143C', textColor: '#7FFF00'} },
        { option: (ctx.data[3].name), style: {backgroundColor: '#B5FFD9', textColor: '#808080'} },
        { option: (ctx.data[4].name), style: {backgroundColor: 'purple', textColor: 'orange'} },
        { option: (ctx.data[5].name), style: {backgroundColor: '#7FFF00', textColor: '#3E00FF'} }
      ]
      setSpinnerData(data);
      console.log('DATA', data);
    }
    
  }, [ctx.data])
  const checkData = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].option === undefined) {
        return data[i].option = "";
      } else {
        return data[i].option = ctx.data.organic[i].title
      }
    }
  } 


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
      {/* <div className="category">
        <form className='category_form' method='get' action='/'>
          <input type="text" id="form" placeholder='Enter Category'></input>
        </form> */}
        {/* <div className="icon">
          <button className="icon_button" onClick={fetchData}>
            <FontAwesomeIcon icon={faForward} />
          </button>
        </div>
      </div> */}
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