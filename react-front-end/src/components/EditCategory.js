import React from "react";

export default function EditCategory() {
  return (
    <div className="other_pages">
        <form className='category_form' method='get' action='/'>
          <input type="text" id="form" placeholder='Edit Category'></input>
        </form>
    </div>
  );
}