import React from 'react'

export const Posts = (props) => {
  return (
    <>
      <h2 className='text-3xl font-bold text-center mt-12'>{props.title}</h2>
      <div className='flex mt-8'>
        {
          props.data.map((el, index) => (
            <props.card element={el} key={index} />
          ))
        }        
      </div>
    </>
  )
}
