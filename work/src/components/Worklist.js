import React from 'react'
import WorkListItem from './WorkListItem'

function Worklist({work, deletework}) {
    if(!work || work.length ===0){
        return(<p>No Work yet</p>)
    }
  else return (
   
    <div className='feedback-list'>
        {work.map((item)=>(
            <WorkListItem key={item.id} item={item} handledelete={deletework}/>//worklistitem is simply a style component that in i used to style each work card
        )

    )}</div>
  )
}

export default Worklist