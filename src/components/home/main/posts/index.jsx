import { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div className='bg-[#EDF7FA] px-[5%] flex justify-center sm:px-[7.5%] pt-3 pb-8'>
        <div className=''>
          <div className='flex justify-between mb-3'>
            <p className='text-lg text-[#21243D]'>Recent posts</p>
            <a className='text-base text-[#00A8CC]' href="#">View all</a>
          </div>
          <div className='flex flex-col gap-4 min-[700px]:flex-row'>
            <div className='bg-white p-5 rounded'>
              <h2 className='text-[22px] text-[#21243D] pb-3 font-bold'>Creating pixel perfect icons in Figma</h2>
              <h3 className='text-base text-[#21243D] pr-[5%] pb-3 flex gap-5 items-center'>
                <span>12 Feb 2020</span>
                <span className='border-[0.25px] h-5 border-black'></span>
                <span>Design, Pattern</span>
              </h3>
              <p className='text-base text-[#21243D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='bg-white p-5 rounded'>
              <h2 className='text-[22px] text-[#21243D] pb-3 font-bold'>Making a design system from scratch</h2>
              <h3 className='text-base text-[#21243D] pr-[5%] pb-3 flex gap-5 items-center'>
                <span>12 Feb 2020</span>
                <span className='border-[0.25px] h-5 border-black'></span>
                <span>Design, Pattern</span>
              </h3>
              <p className='text-base text-[#21243D]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
