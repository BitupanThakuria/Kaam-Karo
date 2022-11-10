import React from 'react'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'


function WorkListItem({item,handledelete}) {

    
  return (
    <Card reverse = {true}>
      <div className='num-display'>{item.priority}</div>
      <button className='close' onClick={()=>handledelete(item.id)}><FaTimes color='purple'/></button>
      <div className='text-dispay'>{item.text}</div> 

      </Card>
  )
}

export default WorkListItem