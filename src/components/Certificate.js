import React from 'react'

export const Certificate = (props) => {
  const certificate = props.element

  return (
    <>
      <div className='shadow w-2/6 p-8 bg-white mr-4 rounded'>
        <h4 className='font-bold text-center'>{certificate.title}</h4>
        <div className='text-center'>
          <span className='inline-block bg-blue-200 text-blue-700 p-2 mt-2 rounded'>
            Calificacion: {certificate.score}
          </span>
        </div>
      </div>
    </>
  )
}
