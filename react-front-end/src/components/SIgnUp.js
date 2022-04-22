import React from "react";

export default function SignUp() {
  return (
    <div className="other_pages">
      <h2>Sign Up</h2>
        <form className='category_form' method='get' action='/'>
          <input type="text" id="form" placeholder='Create Username'></input>
        </form>
        <form className='category_form' method='get' action='/'>
          <input type="text" id="form" placeholder='Create Password'></input>
        </form>
    </div>
  );
}