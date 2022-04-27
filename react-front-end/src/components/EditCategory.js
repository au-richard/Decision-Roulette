import React from "react";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function EditCategory() {
  return (
    <>
    <div className="other_pages">
      <h2><font color="Azure">Edit cate<font color="#B5FFD9">g</font>ory:</font></h2>
      <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Cocktails'></input>
        </form>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Dining Out'></input>
        </form>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='App Names'></input>
        </form>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Baby Names'></input>
        </form>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      </div>
    </>
  );
}