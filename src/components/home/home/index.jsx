import { Component } from 'react'
import Header from '../header'
import Hero from '../main/hero'
import Posts from '../main/posts'
import Works from '../main/works'
import Footer from '../footer'

export default class index extends Component {
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
