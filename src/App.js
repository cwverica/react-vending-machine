import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import CandyBar from "./CandyBar";
import BubbleGum from "./BubbleGum";
import PotatoChips from "./PotatoChips";
import VendingMachine from './VendingMachine';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="Nav-Bar">
          <NavLink exact to='/'>Vending Machine</NavLink>
          <NavLink exact to='/chips'>Potato Chips</NavLink>
          <NavLink exact to='/candy'>Candy Bar</NavLink>
          <NavLink exact to='/gum'>Bubble Gum</NavLink>
        </nav>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/candy'>
          <CandyBar />
        </Route>
        <Route exact path='/gum'>
          <BubbleGum />
        </Route>
        <Route exact path='/chips'>
          <PotatoChips />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
