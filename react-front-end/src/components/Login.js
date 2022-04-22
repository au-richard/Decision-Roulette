import React from "react";

export default function Login() {
  return (
    <div className="other_pages">
        <form className='category_form' method='get' action='/'>
          <input type="text" id="form" placeholder='Login Username'></input>
        </form>
        <form className='category_form' method='get' action='/'>
          <input type="text" id="form" placeholder='Login Password'></input>
        </form>
    </div>
  );
}