import React from 'react'
import SubTitle from '../common/SubTitle'
import { testimonials } from '../../constants/data'

const Testimonial = () => {
  return (
    <div className='mt-20'>
      <SubTitle frontTitle="What People Are Saying" />
      <div>
        {
          testimonials.map((testimonial, index) => (
            <div key={index}>
              <p>{testimonial.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonial