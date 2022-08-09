import React from 'react'

const Button = ({title, action, isPrimary, className}) => {
  return (
    <button onClick={() => action} className={`px-2 py-2 rounded-md ${isPrimary ? "bg-primary text-bg-primary" : "text-primary bg-bg-primary-variant border border-primary"} ${className}`}>
        {title}
    </button>
  )
}

export default Button