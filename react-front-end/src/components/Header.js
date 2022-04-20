import React, { Component } from 'react';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import App from '../App';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
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

  render() {
// export default function Header() {

    return (
    <>
    {/* changing font letter colors */}
    {/* <font color="orange"></font> */}
    <h4 className="header_message">De<font color="lightblue">c</font>ision Roulette</h4>
    <div className="category">
    <form className='category_form' method='get' action='/'>
      <input type="text" id="form" placeholder='Enter Category'></input>
    </form>
    <div className="icon">
    <button className="icon_button" onClick={this.fetchData}> 
    <FontAwesomeIcon icon={faForward} />
    </button>
    </div>
    </div>

 
 

 
 

 
 


{/* <!-- HTML !--> */}
{/* <button class="button-75" role="button"><span class="text">Button 75</span></button> */}
    </>
    );
    }
  }

  export default Header;