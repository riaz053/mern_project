import React from 'react'
import articleContent from './article-contetn'

export default function Articlelist() {
  return (
    <div>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
            Article List
        </h1> 
        <div className='container py-4 mx-auto '>
          <div className='flex flex-wrap -m-4'>
            {articleContent.map((article, index) => (
              <div key={index} className='p-4 md:w-1/2'>

              </div>
            ))}
          </div>
        </div>     
    </div>
  )
}
