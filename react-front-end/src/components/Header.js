import React, { Component } from 'react';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'


export default class Header extends Component {

  render() {

    return (
      <>
        <h4 className="header_message">Ki<font color="#B5FFD9">s</font>met
          <FontAwesomeIcon className="wand" icon={faWandMagicSparkles} /></h4>
      </>
    );
  }
}
