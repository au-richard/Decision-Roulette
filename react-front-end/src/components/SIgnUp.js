import React from "react";

export default function SignUp() {
  return (
    <>
    <div className="other_pages">
    <h2><font color="azure">Sign U<font color="#B5FFD9">p</font>:</font></h2>
        {/* <div className="new_category"> */}
        <form className='sign_up' method='get' action='/'>
          <input type="text" id="form" placeholder='Username'></input>
        </form> 
        {/* </div>  */}
        {/* <div className="category_plus"> */} 
        <form className='sign_up' method='get' action='/'>
          <input type="text" id="form" placeholder='Password'></input>
        </form> 
        {/* </div>  */}
        <button className="save_button">GO</button>
    </div>
    </>
  );
}