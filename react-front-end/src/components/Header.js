import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import App from '../App';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
// export default function Header() {

  // const googleSearch = () => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://google-search1.p.rapidapi.com/google-search',
  //     params: {hl: 'en', q: 'Cats', gl: 'ca'},
  //     headers: {
  //       'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
  //       'X-RapidAPI-Key': '6d4e909f3fmsh77e9d4b7752328cp19fdc9jsnda324b19f180'
  //     }
  //   };
  //   axios.request(options).then(function (response) {
  //     console.log(response.data.organic[0]);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }
  //   return (
  //   <section className="header">
  //   <button type="submit" id="new-item" onClick={googleSearch}>New</button>
  //   <h4 className="header_message">Decision Roulette</h4>
  //   </section>
  //   );
    return (
    <>
    {/* changing font letter colors */}
    {/* <font color="orange"></font> */}
    <h4 className="header_message">De<font color="lightblue">c</font>ision Roulette</h4>
    <div className="category">
    <form className='category_form' method='get' action='/'>
      <input type="text" id="form" placeholder='Enter Category'></input>
    </form>
    <div className="icon">
    <button className="icon_button" onClick={this.fetchData}> 
    <FontAwesomeIcon icon={faForward} />
    </button>
    </div>
    </div>
    </>
    );
  }
}

export default Header;