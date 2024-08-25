import { Component } from 'react'
import WorksImg from '../../../../assets/works.svg'

export default class index extends Component {
  render() {
    return (
      <div className='px-[5%] md:px-[7.5%]'>
        <div>
          <h3 className='text-[#21243D] text-lg text-center py-2 sm:text-[22px] sm:text-start'>Featured works</h3>
        </div>
        <div className='flex flex-col gap-6 pt-3'>
          <div className='flex flex-col gap-4  border-b pb-4 border-[#E0E0E0] md:flex-row'>
            <img className='w-full h-full object-cover overflow-hidden rounded-md md:w-[40%] sm:h-auto min-[900px]:w-[30%]' src={WorksImg} alt="" />
            <div className='flex flex-col md:w-[60%] min-[900px]:w-[70%]'>
              <div>
                <h3 className='text-2xl font-bold sm:text-3xl'>Designing Dashboards</h3>
                <div className='flex gap-5 pt-4 pb-6'>
                  <button className='text-base font-black text-white bg-[#142850] rounded-2xl px-3'>2020</button>
                  <a className='text-base text-[#8695A4] sm:text-lg' href="#">Dashboard</a>
                </div>
              </div>
              <div>
                <p className='text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4  border-b pb-4 border-[#E0E0E0] md:flex-row'>
            <img className='w-full h-full object-cover overflow-hidden rounded-md md:w-[40%] sm:h-auto min-[900px]:w-[30%]' src={WorksImg} alt="" />
            <div className='flex flex-col md:w-[60%] min-[900px]:w-[70%]'>
              <div>
                <h3 className='text-2xl font-bold sm:text-3xl'>Designing Dashboards</h3>
                <div className='flex gap-5 pt-4 pb-6'>
                  <button className='text-base font-black text-white bg-[#142850] rounded-2xl px-3'>2020</button>
                  <a className='text-base text-[#8695A4] sm:text-lg' href="#">Dashboard</a>
                </div>
              </div>
              <div>
                <p className='text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4  border-b pb-4 border-[#E0E0E0] md:flex-row'>
            <img className='w-full h-full object-cover overflow-hidden rounded-md md:w-[40%] sm:h-auto min-[900px]:w-[30%]' src={WorksImg} alt="" />
            <div className='flex flex-col md:w-[60%] min-[900px]:w-[70%]'>
              <div>
                <h3 className='text-2xl font-bold sm:text-3xl'>Designing Dashboards</h3>
                <div className='flex gap-5 pt-4 pb-6'>
                  <button className='text-base font-black text-white bg-[#142850] rounded-2xl px-3'>2020</button>
                  <a className='text-base text-[#8695A4] sm:text-lg' href="#">Dashboard</a>
                </div>
              </div>
              <div>
                <p className='text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4  border-b pb-4 border-[#E0E0E0] md:flex-row'>
            <img className='w-full h-full object-cover overflow-hidden rounded-md md:w-[40%] sm:h-auto min-[900px]:w-[30%]' src={WorksImg} alt="" />
            <div className='flex flex-col md:w-[60%] min-[900px]:w-[70%]'>
              <div>
                <h3 className='text-2xl font-bold sm:text-3xl'>Designing Dashboards</h3>
                <div className='flex gap-5 pt-4 pb-6'>
                  <button className='text-base font-black text-white bg-[#142850] rounded-2xl px-3'>2020</button>
                  <a className='text-base text-[#8695A4] sm:text-lg' href="#">Dashboard</a>
                </div>
              </div>
              <div>
                <p className='text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
