 import React, { useEffect, useState } from 'react'
import { Cog6ToothIcon, BellIcon,MoonIcon,SunIcon } from '@heroicons/react/24/outline'


const Navbar = () => {

    const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'})

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return ( 
     <div className='w-full h-16 bg-white dark:bg-black text-black dark:text-white flex items-center justify-between px-6 fixed top-0 z-50 shadow'> 

      <h3 className='text-4xl font-semibold'>🌾 Fertilizer </h3>
 
      <div className="flex items-center space-x-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:text-green-300">

          {darkMode ? (<SunIcon className="h-9 w-9" />) : (<MoonIcon className="h-9 w-9" />)}
        </button>
 
        <button className="relative">
          <BellIcon className="h-9 w-9" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
        </button>
 
        <button>
          <Cog6ToothIcon className="h-9 w-9" />
        </button>

        <img
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          alt="Profile"
          className="h-9 w-9 rounded-full border-2 border-white dark:border-gray-800"/>
      </div>
    </div>
  )
}

export default Navbar
