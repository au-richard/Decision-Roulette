import axios from "axios";
import { useState, createContext, useEffect } from "react";
 


// Create a Context
export const searchContext = createContext();

// Create a Component wrapper from Context.Provider
export default function SearchProvider(props) {

  // Here is our Shared State Object
  const [search, setSearch] = useState("");



  // Function displays google search result from category
  const fetchSearchResult = function(query) {
    const options = {
      method: 'GET',
      url: 'https://google-search1.p.rapidapi.com/google-search',
      params: {hl: 'en', q: query, gl: 'ca'},
      headers: {
        'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };
    console.log("fetching");
    axios.request(options).then(function (response) {
      //console.log(response.data);
      setSearch(response.data);
    }).catch(function (error) {
      setSearch({organics: []})
      console.error(error);
    });
  };
  useEffect(() => {
    fetchSearchResult();
  }, [])
  // This list can get long with a lot of functions.  Reducer may be a better choice
  
  const contextValue = {
    data:search, 
    fetchResults: () => {
      fetchSearchResult();
    }}
  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <searchContext.Provider value={contextValue}>
      {props.children}
    </searchContext.Provider>
  );
};


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