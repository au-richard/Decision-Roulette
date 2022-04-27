import React, { useContext, Component, useState, useEffect } from "react";
import Wheel from "./Wheel";
import useLookUpResult from "./Search";
import axios from 'axios';
import App from '../App';
import { searchContext, SearchProvider, contextValu, fetchSearchResult } from "../providers/SearchProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import Spinner from 'react-bootstrap/Spinner'

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
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleIsLoadedToggle = () => {
      setLoading(currentIsLoaded => !currentIsLoaded)
    };

    useEffect(() => {
      if (loading) {
        setTimeout(() => {
        setLoading(false);
      }, 5000);
      }
    }, [loading]);

  return (
    // React Fragment to group child elements
    <>
    <div className="guide">
    <p><font color="azure"></font><font color="purple">Can't make a decision? Enter a category and let fate decide for you...</font></p>
    </div>
      <div className="category">
        <form className='category_form' method='get' action='/' onSubmit={event => event.preventDefault()}>
        <input 
          type="text" 
          id="form" 
          placeholder='Enter Category'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          />
        </form>
      <div className="icon">
        {/* ctx.fetchResults() */}
      {!show && <button className="icon_button" onClick={() => {ctx.fetchResults(query); handleIsLoadedToggle()}}>
        <FontAwesomeIcon icon={faForward} />
      </button>}

      {/* {loading ? <Spinner animation="border" variant="light" /> : {contextValue}} */}
      {/* {loading ? {SearchProvider} : <Spinner animation="border" variant="light" />} */}
      {loading && <Spinner animation="border" variant="light" />}
      </div>
    </div>
        {/* <Spinner animation="border" variant="light" /> */}
      <Wheel />
    </> 
  );
  }


export default Home;
  