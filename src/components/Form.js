import React from 'react'

export const Form = () => {
  return (
    <>
      <form className='mt-16 text-center'>
        <label htmlFor="contact-msg" 
               className='block text-gray-50 text-md font-bold mb-2'>
                Hablemos un poco más
        </label>
        <div className='flex shadow rounded bg-white border p-2'>
          <textarea 
            id='contact-msg'
            className='flex-1 py-2 px-3 text-gray-700 focus:shadow-none focus:shadow-outline'>
          </textarea>
          <button className='btn ml-4'>Enviar</button>
        </div>
      </form>
    </>
  )
}
