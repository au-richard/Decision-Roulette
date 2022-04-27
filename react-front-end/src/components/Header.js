import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
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
    {/* <FontAwesomeIcon icon={faWandMagicSparkles} /> */}
    <h4 className="header_message">Ki<font color="#B5FFD9">s</font>met<FontAwesomeIcon className="wand" icon={faWandMagicSparkles} /></h4>
    

    </>
    );
  }
}
