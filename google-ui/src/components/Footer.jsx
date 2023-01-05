import React from 'react'
import carbon from '../assets/Carbon.png'

const Footer = () => {
  return (
    <footer className="grid w-full text-[14.5px] text-gray-500 bg-[#F2F2F2] divide-y-[1px] divide-gray-300">
      <div className="px-8 py-3">
        <p>Kenya</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 grid-flow-row-dense px-8 py-3">
          <div className="cursor-pointer flex space-x-1 items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            <img src={carbon} alt="" className="h-4" />
            <p className="link">Carbon neutral since 2007</p>
          </div>
          <div className="cursor-pointer flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
              <p className="link">About</p>
              <p className="link">Advertising</p>
              <p className="link">Business</p>
              <p className="link">How Search Works</p>
          </div>
          <div className="cursor-pointer flex justify-center space-x-8 md:ml-auto">
              <p className="link">Privacy</p>
              <p className="link">Terms</p>
              <p className="link">Settings</p>
          </div>
      </div>
        
    </footer>
  )
}

export default Footer