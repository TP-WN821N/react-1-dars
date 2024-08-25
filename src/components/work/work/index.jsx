import { Component } from 'react'
import Header from '../../home/header'
import Home from '../../home/main/works'
import Footer from '../../home/footer'

export default class index extends Component {
  render() {
    return (
      <div>
        <Header page="work" />
        <Home />
        <Footer />
      </div>
    )
  }
}
