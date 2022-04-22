import React from "react";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function EditCategory() {
  return (
    <>
      <h2><font color="Azure">Edit category:</font></h2>
      <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option One'></input>
        </form>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option One'></input>
        </form>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option One'></input>
        </form>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option One'></input>
        </form>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>

    </>
  );
}