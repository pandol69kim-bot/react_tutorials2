import { Link  } from 'react-router-dom'
import React from 'react'
import { heroLinks } from '../../constants/data'
import { videos } from '../../constants/data'
import SubTitle from '../common/SubTitle'

const HeroSection = () => {
  return (
    <div className='hero-wrapper flex flex-col items-center mt-6 text-center'>
        <h1 className='slogan lg:text-7xl sm:text-6xl text-4xl text-center tracking-wide dark:text-neutral-300 text-neutral-700'>AceDot Build Tools
            <span className='bg-gradient-to-r from-indigo-300 to-indigo-600 text-transparent bg-clip-text'>&nbsp; for developers</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem pariatur obcaecati id alias neque enim dolorum et dicta dolorem voluptates quia eaque quae, quod minus vel rem modi, optio doloremque.
        </p>

        <div className='sub-links mt-10 flex gap-3'>
          {
             heroLinks.map((link, index) => (
              <Link key={index} to={link.to} 
                className='py-3 px-3 border text-neutral-400 border-neutral-500'
                >{link.text}</Link>
            ))
          }
        </div>
        
        {/* Video Clip */}
        <div className='video-wrapper flex flex-col gap-2 pl-[10%] pr-[10%] md:flex-row mt-10 justify-center'>
            {
              videos.map((video, index) => (
                <video key={index} autoPlay loop muted controls className='rounded-lg w-full md:w-1/2 border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2 sm:w-full sm:pl-3 sm:pr-3'>
                  <source src={video.video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              ))
            }
        </div>
    </div>
  )
}

export default HeroSection