import { Component } from 'react'
import Header from '../../home/header'
import Hero from '../hero'
import Footer from '../../home/footer'

export default class index extends Component {
  render() {
    return (
      <div>
        <Header page="blog" />
        <Hero />
        <Footer />
      </div>
    )
  }
}
