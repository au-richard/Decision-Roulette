import React from "react";

export default function CreateCategory() {
  return (
    <div className="other_pages">
        <form className='category_form' method='get' action='/'>
          <input type="text" id="form" placeholder='Enter Category'></input>
        </form>
    </div>
  );
}
