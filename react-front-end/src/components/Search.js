import React, { Component } from "react";
import axios from "axios";


export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { userCollection: [] };
  }


  googleSearch() {
    const options = {
      method: 'GET',
      url: 'https://google-search1.p.rapidapi.com/google-search',
      params: {hl: 'en', q: 'Shoes', gl: 'ca'},
      headers: {
        'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '6d4e909f3fmsh77e9d4b7752328cp19fdc9jsnda324b19f180'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
}