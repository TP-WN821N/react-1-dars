import React, { Component } from 'react'
import Header from './components/header'
import Hero from './components/main/hero'
import Posts from './components/main/posts'
import Works from './components/main/works'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Posts />
        <Works />
        <Footer />
      </div>
    )
  }
}
