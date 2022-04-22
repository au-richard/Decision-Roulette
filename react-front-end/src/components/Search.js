import React, { useContext } from "react";
import { searchContext } from "../providers/SearchProvider";
//import axios from "axios";



export default function useLookUpResult () {

  const { searchResult } = useContext(searchContext);

  return (
    <div>
      searchContext.organic
    </div>
  );
  // constructor(props) {
  //   super(props);
  //   this.state = { userCollection: [] };
  // }
    // const options = {
    //   method: 'GET',
    //   url: 'https://google-search1.p.rapidapi.com/google-search',
    //   params: {hl: 'en', q: 'Cats', gl: 'ca'},
    //   headers: {
    //     'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
    //     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
    //   }
    // };
    // axios.request(options).then(function (response) {
    //   //console.log(response.data);
    //   return response.data;
    // }).catch(function (error) {
    //   console.error(error);
    // });
}