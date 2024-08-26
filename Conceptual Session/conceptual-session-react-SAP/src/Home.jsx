import React, { useEffect, useState } from 'react'
import './Home.css'
import Imams from '../Imams'
import Cost from '../Cost'

export default function Home() {
    const [imams, setImams] = useState([]);
    const [selectedImam, setSelectedImam] = useState([])
    const [cost, setCost] = useState(0)


    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setImams(data))
    },[])


    const handleImamHire = (imam) => {
        const isAdded = selectedImam.find(item => item.id === imam.id);
        let totalCost = imam.salary;
        if(isAdded){
            alert('You cannot hire same person twice');
        }else{

            selectedImam.forEach(item => {
                totalCost = totalCost + item.salary;
            })
            if(totalCost >20000){
                alert('Budgeted exceeds')
            }else{
                setSelectedImam([...selectedImam, imam])
       setCost(prevCost => prevCost + imam.salary);
            }
       
        }
    }

  return (
    <div className='flex justify-between mt-10'>
        <Imams imams={imams}
        handleImamHire={handleImamHire}
        ></Imams>
        <Cost
        selectedImam={selectedImam}
        cost={cost}
        ></Cost>
        
    </div>
  )
}
