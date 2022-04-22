import React, { useState, Component, useContext } from 'react';
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
  { option: 'option 1', style: { backgroundColor: '#170055', textColor: 'azure', } },
  { option: 'option 2', style: { backgroundColor: '#3E00FF', textColor: 'orange' } },
  { option: 'option 3', style: { backgroundColor: '#DC143C', textColor: '#7FFF00' } },
  { option: 'option 4', style: { backgroundColor: '#B5FFD9', textColor: '#808080' } },
  { option: 'option 5', style: { backgroundColor: 'purple', textColor: 'orange' } },
  { option: 'option 6', style: { backgroundColor: '#7FFF00', textColor: '#3E00FF' } }
]


export default () => {
  const ctx = useContext(searchContext)
  console.log(ctx);
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
      <div className="category">
        <form className='category_form' method='get' action='/'>
          <input type="text" id="form" placeholder='Enter Category'></input>
        </form>
        <div className="icon">
          <button className="icon_button" onClick={fetchData}>
            <FontAwesomeIcon icon={faForward} />
          </button>
        </div>
      </div>
      <button onClick={handleSpinClick} className='spin_button'>SPIN</button>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
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