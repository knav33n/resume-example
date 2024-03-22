import React, { memo } from 'react'
import './input.css'

const Input = memo(({ label, name, type = "text" }) => {
    return (
        <div className='form-group'>
            <label>{label}</label>
            <input type={type} name={name} />
        </div>
    )
})

export default Input