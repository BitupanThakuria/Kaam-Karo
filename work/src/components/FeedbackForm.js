import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'

function FeedbackForm() {

    const[text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
  return (
    <Card>FeedbackForm
        <div className='input-group'>
            <input type='text'
            onChange={handleTextChange} 
            placeholder = 'What kind of work do you want to do?'
            value = {text}/>
            <button type= 'submit'>Lets do it</button>
        </div>
    </Card>
  )
}

export default FeedbackForm