import React from "react";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


// const element = <FontAwesomeIcon icon={faFacebook} />

export default function About() {
  return (
    <div className="other_pages">
    <h1>About us</h1>
    <p>
      Three junior web developers, passsionate about helping others with their exestensial crisis', i.e; "WHAT AM I DOING TONIGHT??!!", or "WHAT AM I DOING WITH MY LIFE?!?!?". We want to help.
    </p>
    <div className="brand_icons">
    <FontAwesomeIcon icon={faFacebook} />
    <font color="crimson"><FontAwesomeIcon icon={faInstagram} /></font>
    <font color="limegreen"><FontAwesomeIcon icon={faTwitter} /></font>
    </div>
    </div>
  );
}

// ReactDOM.render(element, document.body)