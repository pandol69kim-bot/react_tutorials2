import { Moon, Sun, SunDim } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ModeCtrl = () => {
    const [darkMode, setDarkMode] = useState(true)
    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.style.setProperty('color-scheme', 'dark')
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.setProperty('color-scheme', 'light')
        }
    }, [darkMode])

    return (
        <button onClick={toggleTheme} className='px-1 py-1 rounded-md border-e-neutral-950 text-neutral-300 nobile:ml-2 sm:ml-0 dark:text-neutral-950 dark:bg-neutral-300'>
            {darkMode ? <Sun /> : <Moon />}
        </button>
    )
}

export default ModeCtrl