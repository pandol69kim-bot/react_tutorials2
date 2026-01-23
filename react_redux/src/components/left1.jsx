import React from 'react'
import Left2 from './Left2'

const Left1 = (props) => {
  return (
    <>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}/>
    </>
  )
}

export default Left1