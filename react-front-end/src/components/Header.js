import React from 'react';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  
    return (
    <>
    {/* <span style="color: orange">c</span> */}
    <h4 className="header_message">Decision Roulette</h4>
    <div className="category">
    <form className='category_form' method='get' action='/'>
      <input type="text" id="form" placeholder='Enter Category'></input>
    </form>
    <div className="icon">
    <FontAwesomeIcon icon={faArrowRight} />
    </div>
    </div>

 
 

 
 

 
 


{/* <!-- HTML !--> */}
{/* <button class="button-75" role="button"><span class="text">Button 75</span></button> */}
    </>
    );

  };