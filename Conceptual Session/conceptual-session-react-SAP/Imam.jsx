import React from 'react'
import './Imam.css'

export default function Imam({imam, handleImamHire}) {
   const {id, name, role, image, salary} = imam;
  return (
    <div className='border border-solid border-green-400 rounded-lg p-4 w-72 h-96'>
    <div className='container'>
      <img className='img-size' src={image} alt="" />
      <h2 className='text'>Name: {name}</h2>
      <h3 className='text'>Position: {role}</h3>
      <h4 className='text'>Salary: {salary}</h4>
      <button onClick={()=> handleImamHire(imam)} className='btn'>Request to Join</button>
    </div>
  </div>
  )
}
