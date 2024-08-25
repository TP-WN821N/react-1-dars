import { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
  state = {
    active: false
  }
  toggleMenu = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    const { page } = this.props
    console.log(page);
    const { active } = this.state
    return (
      active ?
        <div className='flex items-start px-[7.5%] py-1 bg-blue-600'>
          <div className="flex gap-2 flex-col mx-auto">
            <NavLink to="/" className="cursor-pointer text-xl text-white hover:text-[#FF6464]">Home</NavLink>
            <NavLink to="/blog" className="cursor-pointer text-xl text-white hover:text-[#FF6464]">Blog</NavLink>
            <NavLink to="/work" className="cursor-pointer text-xl text-white hover:text-[#FF6464]">Works</NavLink>
            <NavLink to="/contacts" className="cursor-pointer text-xl text-white hover:text-[#FF6464]">Contact</NavLink>
          </div>
          <button onClick={this.toggleMenu} className='pt-3'>
            <i className="fa-solid text-white text-2xl fa-bars"></i>
          </button>
        </div> :
        <div className="w-[85%] flex justify-end  m-auto py-4 min-[400px]:justify-end">
          <div className="hidden min-[400px]:flex gap-8">
            <NavLink to="/" className={`cursor-pointer ${page === "home" ? 'text-[#FF6464]' : 'text-[#21243D]'} text-xl hover:text-[#FF6464]`}>Home</NavLink>
            <NavLink to="/blog" className={`cursor-pointer ${page === "blog" ? 'text-[#FF6464]' : 'text-[#21243D]'} text-xl hover:text-[#FF6464]`}>Blog</NavLink>
            <NavLink to="/work" className={`cursor-pointer ${page === "work" ? 'text-[#FF6464]' : 'text-[#21243D]'} text-xl hover:text-[#FF6464]`}>Works</NavLink>
            <NavLink to="/contacts" className={`cursor-pointer ${page === "contacts" ? 'text-[#FF6464]' : 'text-[#21243D]'} text-xl hover:text-[#FF6464]`}>Contact</NavLink>
          </div>
          <button onClick={this.toggleMenu} className='min-[400px]:hidden'>
            <i className="fa-solid text-2xl fa-bars"></i>
          </button>
        </div>
    )
  }
}
