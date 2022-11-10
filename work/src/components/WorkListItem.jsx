import React from 'react'
import {useState} from 'react'

function WorkListItem() {

    const[rating, setRating] = useState(8)
    const[work, setWork] = useState('ohh boy need to make chai for mum')
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-dispay'>{work}</div>  
    </div>
  )
}

export default WorkListItem