import axios from "axios";
import { useState, createContext, useEffect } from "react";

// Create a Context
export const searchContext = createContext();

// Create a Component wrapper from Context.Provider
export default function SearchProvider(props) {
  // Here is our Shared State Object
  const [search, setSearch] = useState("");

  // Function displays google search result from category
  const fetchSearchResult = function (query) {
    console.log("query:", query);
    const options = {
      method: "GET",
      url: "https://cocktails3.p.rapidapi.com/random",
      // url: 'https://google-search1.p.rapidapi.com/google-search',
      params: { hl: "en", q: query, gl: "ca" },
      headers: {
        "X-RapidAPI-Host": "cocktails3.p.rapidapi.com",
        // 'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    };
    console.log("fetching");
    console.log("option:", options);
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   setSearch(response.data);
    // }).catch(function (error) {
    //   setSearch({organics: []})
    //   console.error(error);
    // });

    const reqOne = axios.request(options);
    const reqTwo = axios.request(options);
    const reqThree = axios.request(options);
    const reqFour = axios.request(options);
    const reqFive = axios.request(options);
    const reqSix = axios.request(options);

    axios
      .all([reqOne, reqTwo, reqThree, reqFour, reqFive, reqSix])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data.body[0];
          const responseTwo = responses[1].data.body[0];
          const responseThree = responses[2].data.body[0];
          const responseFour = responses[3].data.body[0];
          const responseFive = responses[4].data.body[0];
          const responseSix = responses[5].data.body[0];
          console.log("responses", responseOne, responseTwo);
          setSearch([
            responseOne,
            responseTwo,
            responseThree,
            responseFour,
            responseFive,
            responseSix,
          ]);
        })
      )
      .catch(function (error) {
        // react on errors.
        console.error(error);
      });
    // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
    // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
    // data:
    //  body: Array(1)
    //    0: {name: 'old fashioned cocktail', ingredients: Array(8)}
    //    length: 1
    // [[Prototype]]: Array(0)
    // success: true
    // [[Prototype]]: Object

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   setSearch(response.data);
    // }).catch(function (error) {
    //   setSearch({organics: []})
    //   console.error(error);
    // });
  };
  // useEffect(() => {
  //   fetchSearchResult();
  // }, [])
  // This list can get long with a lot of functions.  Reducer may be a better choice

  const contextValue = {
    data: search,
    fetchResults: (value) => {
      fetchSearchResult(value);
    },
  };
  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <searchContext.Provider value={contextValue}>
      {props.children}
    </searchContext.Provider>
  );
}

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
