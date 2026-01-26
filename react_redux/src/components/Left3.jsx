import React from 'react'
import { useSelector } from 'react-redux';


const Left3 = () => {
  const number = useSelector((state) => state.number);
  return (
    <h1>Left3 : {number}</h1>
  )
}

export default Left3