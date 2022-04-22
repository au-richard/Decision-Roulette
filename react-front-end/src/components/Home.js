import React, { useContext, Component } from "react";
import Wheel from "./Wheel";
import useLookUpResult from "./Search";
import axios from 'axios';
import App from '../App';
import SearchProvider, { searchContext, fetchSearchResult } from "../providers/SearchProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'

// export default function Home() {
  // class Home extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       //message: 'Click the button to load data!'
  //     }
  //   }
  // const fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }
  function Home() {
    //To do store input query, onClick needs to be an arrow
    const ctx = useContext(searchContext);
  return (
    // React Fragment to group child elements
    <>
      <div className="category">
        <form className='category_form' method='get' action='/'>
        <input type="text" id="form" placeholder='Enter Category'></input>
        </form>
      <div className="icon">
        {/* ctx.fetchResults() */}
      <button className="icon_button" onClick={() => {}}> 
        <FontAwesomeIcon icon={faForward} />
      </button>
      </div>
    </div>
      <Wheel />
    </> 
  );
  }


export default Home;
  