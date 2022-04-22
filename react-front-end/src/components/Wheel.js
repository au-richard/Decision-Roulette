import React, { useState, Component, useContext } from 'react';
import { Wheel } from 'react-custom-roulette';
import classNames from "classnames";
import "../styles/Wheel.scss"
import { searchContext } from '../providers/SearchProvider';
//import search from "./Search";
// import { Howl } from 'howler';

// loop through fetchResult to obtain data for "option" key in data array below
let data = [
  { option: "option 1", style: {backgroundColor: '#170055', textColor: 'azure', } }
  // { option: (ctx.data.organic[1].title || "option 1"), style: {backgroundColor: '#3E00FF', textColor: 'orange'} },
  // { option: (ctx.data.organic[2].title || "option 1"), style: {backgroundColor: '#DC143C', textColor: '#7FFF00'} },
  // { option: (ctx.data.organic[3].title || "option 1"), style: {backgroundColor: '#B5FFD9', textColor: '#808080'} },
  // { option: (ctx.data.organic[4].title || "option 1"), style: {backgroundColor: 'purple', textColor: 'orange'} },
  // { option: (ctx.data.organic[5].title || "option 1"), style: {backgroundColor: '#7FFF00', textColor: '#3E00FF'} }
]


export default () => {
  const ctx = useContext(searchContext)
  console.log(ctx.data);
  data = [
    { option: (ctx.data.organic[0].title || "option 1"), style: {backgroundColor: '#170055', textColor: 'azure', } },
    { option: (ctx.data.organic[1].title || "option 1"), style: {backgroundColor: '#3E00FF', textColor: 'orange'} },
    { option: (ctx.data.organic[2].title || "option 1"), style: {backgroundColor: '#DC143C', textColor: '#7FFF00'} },
    { option: (ctx.data.organic[3].title || "option 1"), style: {backgroundColor: '#B5FFD9', textColor: '#808080'} },
    { option: (ctx.data.organic[4].title || "option 1"), style: {backgroundColor: 'purple', textColor: 'orange'} },
    { option: (ctx.data.organic[5].title || "option 1"), style: {backgroundColor: '#7FFF00', textColor: '#3E00FF'} }
  ]

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  
  return (
    <>
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

//attempting to create seperate styling files for data
        // data={[
          //     {option: ""},
        //   {option: 2}
        // ]}