import React from "react";


export default function SignUp() {
  return (
    <>
      <div className="other_pages">
        <h2>
          <font color="azure">Sign Up:</font>
        </h2>
        <form className="new_category" method="get" action="/">
          <input type="text" id="form" placeholder="Username"></input>
        </form>
        <form className="new_category" method="get" action="/">
          <input type="text" id="form" placeholder="Password"></input>
        </form>
        <button className="save_button">GO</button>
      </div>
    </>
  );
}