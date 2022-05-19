import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Show from './components/Show/Show';
import World from './components/World/World';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/"  exact element={<Home />} />
        <Route path="/auth"  exact element={<Auth />} />
        <Route path="/world"  exact element={<World />} />
        <Route path="/show"  exact element={<Show />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
