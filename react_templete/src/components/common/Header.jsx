import React, { useState } from 'react'
import {navItems, authLink} from '../../constants/data'
import {Link} from 'react-router-dom'
import './Header.css'
import ModeCtrl from './ModeCtrl'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const toggleMenu = () => {
        setMobileOpen(!mobileOpen)
    }
  return (
    <nav className='sticky top-0 z-50 border-b border-neutral-700/80 backdrop-blur-lg ' >
      <div className='container relative'>
        <div className='nav-inside-wrapper flex justify-center items-center'>
            <div className='logo-wrapper flex items-center gap-x-2'>
                <div className='logo w-10 h-10 rounded-full border border-neutral-700/10 flex items-center justify-center'>
                    <div className='round-dot w-8 h-8 rounded-full bg-indigo-800'></div>
                </div>
                <span className='logo-text text-lg dark:text-neutral-200 light: text-neutral-950'>AceDot.Dev</span>
            </div>

            <ul className='nav-wrapper hidden lg:flex gap-3'>
                {
                    navItems.map((item, index) => (
                        <li key={index}>
                            {/* 리엑트에서는 A태그를 사용하지 않고, Link 컴포넌트를 사용한다. 경로 
                            는 Href 대신 to를 사용한다 */}
                            <Link to={item.to}  className='dark:text-neutral-200 light:text-neutral-950'>{item.label}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className='info-wrapper hidden lg:flex items-center gap-2'>
                {
                    authLink.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.to} 
                            className={`py-2 px-2 rounded-md text-xs ${index === 1 ? "bg-gradient-to-r from-indigo-200 to-indigo-800 border-0 text-neutral-200 light:text-black" : "border border-neutral-700/80 dark:text-neutral-200 light:text-neutral-900"}`}   
                        >{item.label}{index}</Link>    
                    ))
                }
                <ModeCtrl />
            </div>
            <div className='lg:hidden flex justify-end'>
                <button onClick={toggleMenu}>
                    {
                        mobileOpen ? <X /> : <Menu />
                    }
                </button>
            </div>
        </div>
        {/* Mobile Menu Drop */}
        {
            mobileOpen && (
                <div className='absolute right-0 z-50 bg-white w-full pb-0 flex flex-col justify-center items-center lg:hidden top-full dark:bg-neutral-900 border border-neutral-700 mt-1'>
                    <ul className='w-full'>
                        {
                            navItems.map((item, index) => (
                                <li key={index} className='py-4 border-b border-neutral-700 w-full text-center'>
                                    <Link to={item.to} className='block w-full h-full'>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='flex py-4 gap-2'>
                        {
                            authLink.map((item, index) => (
                                <Link to={item.to}
                                    className={`py-2 px-2 rounded-md text-xs ${index === 1 ? "bg-gradient-to-r from-indigo-200 to-indigo-800 border-0 text-neutral-200 light:text-black" : "border border-neutral-700/80 dark:text-neutral-200 light:text-neutral-900"}`}
                                >{item.label}</Link>
                            ))
                        }
                    </div>
                    
                
                </div>

            )
        }
      </div>
    </nav>
  )
}

export default Header