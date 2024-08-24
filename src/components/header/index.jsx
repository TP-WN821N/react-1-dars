import { Component } from 'react'

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
    const { active } = this.state
    return (
      active ?
        <div className='flex items-start px-[7.5%] py-1 bg-blue-600'>
          <div class="flex gap-2 flex-col mx-auto">
            <a class="text-xl text-white hover:text-[#FF6464]" href='#'>Works</a>
            <a class="text-xl text-white hover:text-[#FF6464]" href='#'>Blog</a>
            <a class="text-xl text-white hover:text-[#FF6464]" href='#'>Contact</a>
          </div>
          <button onClick={this.toggleMenu} className='pt-3'>
            <i class="fa-solid text-white text-2xl fa-bars"></i>
          </button>
        </div> :
        <div class="w-[85%] flex justify-end  m-auto py-4 min-[400px]:justify-end">
          <div class="hidden min-[400px]:flex gap-8">
            <a class="text-xl hover:text-[#FF6464]" href='#'>Works</a>
            <a class="text-xl hover:text-[#FF6464]" href='#'>Blog</a>
            <a class="text-xl hover:text-[#FF6464]" href='#'>Contact</a>
          </div>
          <button onClick={this.toggleMenu} className='min-[400px]:hidden'>
            <i class="fa-solid text-2xl fa-bars"></i>
          </button>
        </div>
    )
  }
}
