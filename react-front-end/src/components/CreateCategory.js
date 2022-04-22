import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";


export default function CreateCategory() {
  return (
    <>
      <h2><font color="azure">Create Category:</font></h2>
    <div className="other_pages">
        <div className="create_category">
          <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option One'></input>
        </form> 
        <div className="plus"><FontAwesomeIcon icon={faPlus} /></div>
        </div> 
        <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option Two'></input>
        </form> 
        <div className="plus"><FontAwesomeIcon icon={faPlus} /></div>
        </div> 
        <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option Three'></input>
        </form> 
        <div className="plus"><FontAwesomeIcon icon={faPlus} /></div>
        </div> 
        <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option Four'></input>
        </form> 
        <div className="plus"><FontAwesomeIcon icon={faPlus} /></div>
        </div> 
        <div className="category_plus">
        <form className='new_category' method='get' action='/'>
          <input type="text" id="form" placeholder='Option Five'></input>
        </form> 
        <div className="plus"><FontAwesomeIcon icon={faPlus} /></div>
        </div> 
        <button className="save_button">SAVE</button>
    </div>
    </div>
    </>
  );
}
