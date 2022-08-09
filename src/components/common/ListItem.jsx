import React from 'react'
import { FaAward } from 'react-icons/fa'

const ListItem = ({ title, titleCustom, icon = null, subTitle = "", iconProperties = null }) => {
  return (
    <div className='flex flex-row items-center my-3 mx-2'>
      {icon !== null
        ? React.createElement(icon, { size: iconProperties?.size ?? 25, className: iconProperties?.className ?? "text-primary mx-3" })
        : <FaAward className='text-primary mx-3' size={25} />
      }
      <div className='flex flex-col'>
        <span className={titleCustom ?? "font-medium uppercase"}>{title ?? "Sit id excepteur dolore dolore do nulla ipsum velit ex ea."}</span>
        {subTitle !== "" &&
          <span className='text-tx-secondary font-light'>{subTitle}</span>
        }
      </div>
    </div>
  )
}

export default ListItem