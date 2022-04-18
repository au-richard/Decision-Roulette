import React from 'react';
import '../styles/Header.scss';

export default function Header() {
  
    return (
    <section className="header">
    <button type="submit" id="new-item">New</button>
    <h4 className="header_message">Decision Roulette</h4>
    </section>
    );
  };