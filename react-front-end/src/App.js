import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Wheel from './components/Wheel';
import Navigation from './components/Navigation';
import About from './components/About';
import CreateCategory from './components/CreateCategory';
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
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
    return (
      // <Router>
      // {/* <Routes>
      //   <Route path="/"><App /></Route> 
      //     <Route path="/create" > <CreateCategory /></Route>
  
      //     {/* <Route path="edit" element={<Edit_Category />} />
      //     <Route path="login" element={<Login />} />
      //     <Route path="signup" element={<Sign Up />} />
      //     <Route path="Logout" element={<Logout />} />
  
  
      // </Routes> */}
      // {/* <Routes>
      //   <Route path="/create" element={<CreateCategory />} />
      //   <Route path="/about" element={<About />} />
      // </Routes> */}
      //   {/* <Navigation />

      // </Router>, */}
      <div className="App">
        <Router>
          <Navigation />
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<CreateCategory />} />
          </Routes>
        </Router>
          <h1>{ this.state.message }</h1>
       
      </div>
    );
  }
}

export default App;
