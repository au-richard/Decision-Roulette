import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import App from '../App';


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //message: 'Click the button to load data!'
    }
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
