import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";

export default function Logout() {
  return (
    <div className="other_pages">
      <h1>You are now logged out, hope to see you soon </h1>
      <div className="brand_icons">
        <font color="purple">
          <FontAwesomeIcon icon={faHeartCrack} />
        </font>
      </div>
    </div>
  );
}
