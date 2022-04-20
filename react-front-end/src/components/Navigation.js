import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/Navigation.scss';

class Navigation extends React.Component {
    showSettings (event) {
    event.preventDefault();
  }


  render () {
    return (
      <Menu>
        <h3>Logged in as User | <a href="">Logout</a></h3>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Login</a>
        <a id="contact" className="menu-item" href="/contact">Sign Up</a>
      </Menu>
    );
  }
}

export default Navigation;
// class Example extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
//     .
//     .
//     .
//   }

//   render () {
//     // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
//     return (
//       <Menu>
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">About</a>
//         <a id="contact" className="menu-item" href="/contact">Contact</a>
//         <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
//       </Menu>
//     );
//   }
// }

// function Navigation() {
//   return (
//     <nav>
//       <span className="nav--text">tweeter</span>

//       <div className="btn btn--scroll">
//         <a href="#" className="btn__text btn--borderless" title="Compose Tweet">
//           <span className="btn--bold">Write</span> a new tweet
//           <br />
//             <i className="btn__icon fas fa-angle-double-down"></i>
//         </a>  
//       </div>  
//     </nav>
//   );
// }

