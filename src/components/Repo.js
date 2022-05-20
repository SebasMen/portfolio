import React from 'react'

export const Repo = (props) => {
  const {name, description, url} = props.repo

  return (
    <>
      <li className='flex items-center mb-3'>
        <div className='w-9/12 overflow-x-hidden'>
          <h4 className='text-600 font-bold truncate capitalize'>{name}</h4>
          <p className='text-sm text-gray-800 overflow-y-hidden' style={{height:"2.5em"}}>{description}</p>
        </div>
        <div className='btn-2 flex-1 text-center'>
          <a href={url} target="_blank" rel='noopener noreferrer'>Ver</a>
        </div>
      </li>
    </>
  )
}
