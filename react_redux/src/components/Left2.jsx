import React from 'react'
import Left3 from './Left3'

const Left2 = (props) => {
  return (
    <h1>Left2 : {props.number}</h1>
    <Left3 number={props.number} />
  )
}

export default Left2