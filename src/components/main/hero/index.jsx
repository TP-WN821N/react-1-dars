import { Component } from 'react'
import Avatar from '../../../assets/hero-avatar.svg'

export default class index extends Component {
  render() {
    return (
      <div className='px-[7.5%] pb-10 sm: mt-20'>
        <div className='flex flex-col mt-8 items-center gap-y-8 max-w-[1000px] sm:flex-row sm:justify-between sm:items-start '>
          <div className='flex flex-col items-center order-2 sm:order-2 sm:w-2/3 sm:items-start max-w-[500px]'>
            <h1 className='text-3xl text-center font-bold text-[#21243D] sm:text-start sm:text-4xl'>Hi, I am John, Creative Technologist</h1>
            <p className='text-base text-center text-[#21243D] pt-5 pb-6 sm:text-start'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className='text-white text-xl font-medium px-5 py-2 bg-[#FF6464] rounded-sm'>Download Resume</button>
          </div>
          <div className='order-1 sm:order-2 sm:pb-5'>
            <img className='md:w-[300px]' src={Avatar} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
