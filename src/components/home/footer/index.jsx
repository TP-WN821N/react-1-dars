import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div className='sm:mt-20 flex flex-col items-center py-10'>
        <div className='flex gap-9'>
          <a href="#">
            <i className="fa-brands text-3xl text-[#21243D] fa-square-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands text-3xl text-[#21243D] fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands text-3xl text-[#21243D] fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands text-3xl text-[#21243D] fa-linkedin"></i>
          </a>
        </div>
        <p className='text-base text-center pt-4'>Copyright ©2020 All rights reserved </p>
      </div>
    )
  }
}
