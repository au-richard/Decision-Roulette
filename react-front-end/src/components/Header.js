import React, { Component } from 'react';
import '../styles/Header.scss';
import axios from 'axios';


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

    </>
    );
    }
  }

  export default Header;