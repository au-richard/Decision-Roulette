import React from "react";

export default function Login() {
  return (
    <>
      <div className="other_pages">
        <h2><font color="azure">Log<font color="#B5FFD9">i</font>n:</font></h2>
        <form className='sign_up' method='get' action='/'>
          <input type="text" id="form" placeholder='Username'></input>
        </form>
        <form className='sign_up' method='get' action='/'>
          <input type="text" id="form" placeholder='Password'></input>
        </form>
        <button className="save_button">LOGIN</button>
      </div>
    </>
  );
}
