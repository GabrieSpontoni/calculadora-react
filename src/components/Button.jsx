import React from 'react'
import './Button.css'

export default (prop) => {
    return (
        <button className = 'button'>{prop.label}</button>
        
    )
}