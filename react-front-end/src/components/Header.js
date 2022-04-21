import axios from 'axios';
import React from 'react';
import '../styles/Header.scss';

export default function Header() {
  const googleSearch = () => {
    const options = {
      method: 'GET',
      url: 'https://google-search1.p.rapidapi.com/google-search',
      params: {hl: 'en', q: 'Cats', gl: 'ca'},
      headers: {
        'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '6d4e909f3fmsh77e9d4b7752328cp19fdc9jsnda324b19f180'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data.organic[0]);
    }).catch(function (error) {
      console.error(error);
    });
  }
    return (
    <section className="header">
    <button type="submit" id="new-item" onClick={googleSearch}>New</button>
    <h4 className="header_message">Decision Roulette</h4>
    </section>
    );
  };