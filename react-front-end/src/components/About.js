import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function About() {
  return (
    <div className="other_pages">
    <h1>About <font color="#B5FFD9">u</font>s</h1>
    <p>
      Three junior web developers, passsionate about helping others with their exestensial crisis', i.e; "WHAT AM I DOING TONIGHT??!!", or "WHAT AM I DOING WITH MY LIFE?!?!?". We want to help.
    </p>
    <div className="brand_icons">
    <div className="facebook"><FontAwesomeIcon icon={faFacebook} /></div>
    <font color="crimson"><FontAwesomeIcon icon={faInstagram} /></font>
    <font color="limegreen"><FontAwesomeIcon icon={faTwitter} /></font>
    </div>
    </div>
  );
}