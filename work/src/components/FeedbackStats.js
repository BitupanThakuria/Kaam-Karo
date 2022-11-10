import React from 'react'

function FeedbackStats({data}) {

    let average = data.reduce((acc,cur)=>
    {return acc + cur.rating
    },0)/data.length
    average = average.toFixed(1) ;
  return (
    <div className='feedback-stats'>
        <h4>There are {data.length} works left</h4>
        <h4>Average to be done is {isNaN(average)? 0:average}</h4>
        </div>
  )
}

export default FeedbackStats