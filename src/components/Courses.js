import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Course } from './Course'
import { Posts } from './Posts'
import { Certificate } from './Certificate'

export const Courses = () => {
  const data = useStaticQuery(graphql`{
    codigofacilitoJson {
      data {
        certificates {
          title
          score
          code
        }
        courses {
          title
          progress
          url
        }
      }
    }
  }`)

  return (
    <>
      <section>
        <div className='my-14'>
          <div className='max-w-4xl mx-auto'>
            <Posts 
              card={Certificate}
              title="Mis Certificados"
              data={data.codigofacilitoJson.data.certificates} 
            />

            <Posts 
              card={Course}
              title="Mis Cursos"
              data={data.codigofacilitoJson.data.courses} 
            />
          </div>
        </div>
      </section>
    </>
  )
}
