import React from 'react'
import './Cost.css'

export default function Cost({selectedImam, cost}) {
   
    return (
    <div className='w-[25%]'>
        <div>
            <h2 className='cost-heading'>Total Cost: {cost}</h2>
        </div>
       { selectedImam.map(imam => (<div key={imam.id} className='cost-container'>
            <h2>Name: {imam.name}</h2>
            <h3>Salary: {imam.salary}</h3>
        </div>))}
    </div>
  )
}
