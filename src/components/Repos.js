import React, { useEffect, useState } from 'react'
import { Repo } from './Repo'
// import repos from '../data/repos'

export const Repos = () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState([]);

  // Ejecuta algo apenas termina de renderizar el componente
  useEffect(() => {
    let repos
    const data = sessionStorage.getItem('repos')

    if(data) {
      repos = JSON.parse(data)
      setReposCount(repos.length)
      return setRepos(repos)
    }

    const fetchRepos = async() => {
      const response =  await fetch('https://api.github.com/users/poncho29/repos')
      let repos =  await response.json()
      setReposCount(repos.length)

      sessionStorage.setItem('repos', JSON.stringify(repos))

      setRepos(repos)
    }

    fetchRepos()    
  }, [])

  return (
    <>
      <div className='mt-12 py-10'>
        <div className='max-w-4xl mx-auto'>
          <header className='text-center mb-6'>
            <h2 className='text-3xl font-bold'>Algunos de mis Trabajos</h2>
            <p>Proyectos y practicas personales</p>
          </header>
          <ul className='repos-list'>
            {
              repos.map((repo) => {
                return <Repo repo={repo} key={repo.id} />
              })
            }
          </ul>
          <div className='mt-8 text-center'>
            <a href='https://github.com/poncho29' className='btn' target="_blank" rel="noopenar noreferrer">
              Ver más en GitHub ({reposCount})
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
