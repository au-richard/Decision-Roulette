import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Navigation from './components/Navigation';
import About from './components/About';
import CreateCategory from './components/CreateCategory';
import ContactInfo from './components/ContactInfo';
import Home from './components/Home';
import Header from './components/Header';
import SearchProvider from './providers/SearchProvider';
import EditCategory from './components/EditCategory';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import SavedCategory from './components/SavedCategory';
import CreateProvider from './providers/createProvider';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //message: 'Click the button to load data!'
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Header />
          <CreateProvider>
            <SearchProvider>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/create" element={<CreateCategory />} exact='true' />
                <Route path="/contactinfo" element={<ContactInfo />} />
                <Route path="/edit" element={<EditCategory />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/savedcategory" element={<SavedCategory />} />
              </Routes>
            </SearchProvider>
          </CreateProvider>
        </Router>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
