import { Component } from 'react'
import WorkDetail from '../../../assets/work-detail.svg'

export default class index extends Component {
  render() {
    return (
      <div className='px-[5%] sm:px-[10%] md:px-[18%] sm:pt-6'>
        <div>
          <div>
            <h1 className='text-3xl font-bold pb-4'>Designing Dashboards with usability in mind</h1>
            <div className='flex gap-3'>
              <button className='font-black px-3 rounded-2xl  bg-[#FF7C7C] text-white h-fit text-lg'>2020</button>
              <p className='text-lg'>Dashboard, User Experience Design</p>
            </div>
            <p className='text-base pt-4 text-black pb-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <img className='w-full' src={WorkDetail} alt="" />
        </div>
        <div>
          <div className='pt-5 pb-6'>
            <h1 className='text-3xl'>Heading 1</h1>
            <h2 className='text-2xl py-3'>Heading 2</h2>
            <p className='text-base text-black'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div>
            <img className='w-full pb-6' src={WorkDetail} alt="" />
            <img className='w-full ' src={WorkDetail} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
