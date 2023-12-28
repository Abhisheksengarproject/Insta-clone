import React from 'react'

const HeaderIcon = ({ Icon}) => {
  return (
    <div className='hover:bg-slate-600 transition rounded-2xl cursor-pointer p-2'>
      <Icon
        className='text-black hover:text-white'
        size={25}
      />
    </div>
  )
}

export default HeaderIcon
