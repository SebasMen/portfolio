import React from 'react'
import { graphql, Link } from 'gatsby'

export default function Education(props) {
  const pageData = props.data.educationJson

  return (
    <>
      <header className='py-12 border-blue-500 border-solid border-t-8'>
        <div className='max-w-4xl mx-auto'>
          <Link to="/" className="btn mb-3 inline-block">Regresar</Link>
          <h2 className='capitalize text-6xl font-bold mb-5'>
            {pageData.title}
          </h2>
          <p className='text-xl'>{pageData.description}</p>
        </div>
      </header>

      <ul className='max-w-4xl mx-auto mb-12'>
        {
          pageData.items.map((item, index) => (
            <li className='bg-white shadow mt-4 flex' key={index}>
              <p className='vertical-text'>{pageData.slug}</p>
              <div className='flex items-center flex-1 p-8'>
                <div className='flex-1'>
                  <h3>{item.name}</h3>
                  {
                    item.degree && 
                    <span className='inline-block p-2 radius bg-blue-100 text-blue-700'>
                      {item.degree}
                    </span>
                  }
                  {
                    item.url && 
                    <a href={item.url} className="btn mt-4 inline-flex" target="_blank" rel='noopener noreferrer'>
                      Ver más
                    </a>
                  }
                </div>
                <div className='inline-block'>
                  <span className='inline-block p-2 text-2xl bg-green-100 text-green-700'>
                    {item.score}
                  </span>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    educationJson(slug: {eq:$slug}) {
      slug
      title
      description
      items {
        name
        degree
        score
        url
      }
    }
  }
`