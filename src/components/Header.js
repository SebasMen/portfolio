import React from 'react'
import { Form } from './Form'
// import ImgHeader from '../img/img-header.svg'
import ImgHeader from '../img/Foto-perfil.jpg'

export const Header = () => {
  return (
    <header className="bg-neutral-800">
      <div className="container mx-auto p-12 max-w-4xl">
        <div className='flex justify-center items-center'>
          <div className='flex-1'>
            <h1 className='text-4xl font-bold mb-2 text-white'>Hola! Soy <br/> Sebastian Meneses</h1>
            <p className='text-xl font-light text-white'>Soy Programador Web Fronted</p>
          </div>
          <img src={ImgHeader} alt="Dev productivo" style={{height:"300px", borderRadius:"20px"}}/>
        </div>
      
        <div>
          <Form></Form>
        </div>
      </div>
    </header>
  )
}
