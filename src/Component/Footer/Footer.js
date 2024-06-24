import React from 'react'
const date=new Date();

const Footer = () => {
  return (
    <div className='border-t'>
<div>
  {date.getFullYear()} @ EasyBus
</div>

    </div>
  )
}

export default Footer