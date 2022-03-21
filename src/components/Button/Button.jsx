import React from 'react'
import './Button.css'


export const Button = ({text, action}) => ( // Make the button to take text and action/func as props Add button functions here?
    <button onClick={action}>{text}</button>
  )

