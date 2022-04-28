import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function ContactInfo() {
  return (
    <>
      <div className="contact">
        <h1>Call 1-<font color="purple">800</font>-got-j<font color="#B5FFD9">u</font>nk?</h1>
      </div>
      <div className="brand_icons">
        <div className="facebook"><FontAwesomeIcon icon={faFacebook} /></div>
        <font color="crimson"><FontAwesomeIcon icon={faInstagram} /></font>
        <font color="limegreen"><FontAwesomeIcon icon={faTwitter} /></font>
      </div>
    </>
  );
}