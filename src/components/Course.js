import React from 'react'

export const Course = (props) => {
  const course = props.element

  return (
    <>
      <div className='shadow w-2/6 p-8 bg-white mr-4 rounded'>
        <h4 className='font-bold text-center capitalize'>{course.title}</h4>
        <div className='text-center'>
          <span className='inline-block bg-blue-200 text-blue-700 p-2 mt-2 rounded'>
            Calificacion: {parseInt(course.progress)}%
          </span>
        </div>
      </div>
    </>
  )
}
