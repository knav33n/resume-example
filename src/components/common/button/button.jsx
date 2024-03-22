import React, { memo } from 'react'
import "./button.css"

const Button = memo(({ type = "default", children }) => {
    switch (type) {
        case "icon":
            return <button className='button icon'>{children}</button>
        case "link":
            return <button className='button link'>{children}</button>
        default:
            return <button className='button default'>{children}</button>
    }

})

export default Button