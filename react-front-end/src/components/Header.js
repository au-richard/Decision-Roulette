import React from 'react';
import '../styles/Header.scss';

export default function Header() {
  
    return (
    <>
    {/* <span style="color: orange">c</span> */}
    <h4 className="header_message">Decision Roulette</h4>
    <form class='category_form' method='get' action='/'>
      <input type="text" id="form" placeholder='Enter Category'></input>
    </form>

{/* <!-- HTML !--> */}
{/* <button class="button-75" role="button"><span class="text">Button 75</span></button> */}
    </>
    );

  };