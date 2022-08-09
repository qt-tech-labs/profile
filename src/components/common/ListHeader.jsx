import React from 'react'

const ListHeader = ({title, customClassName}) => {
  return (
    <div className={`flex flex-row bg-primary text-bg-primary font-medium justify-center uppercase ${customClassName}`}>
        <span>{title}</span>
    </div>
  )
}

export default ListHeader