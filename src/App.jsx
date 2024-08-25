import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Blog from './components/blog/blog';
import Work from './components/work/work';
import Contacts from './components/contacts/contacts';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/work' element={<Work />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Router>
    )
  }
}
