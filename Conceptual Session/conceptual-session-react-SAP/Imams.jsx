import React from 'react'
import Imam from './Imam'
import './Imam.css'

export default function Imams({imams, handleImamHire}) {
  return (
    <div className='parent-container'>
        {
            imams.map(imam=> <Imam imam={imam} 
                handleImamHire={handleImamHire}
                key={imam.id}></Imam>)
        }
        
    </div>
  )
}
