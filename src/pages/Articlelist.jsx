import React from 'react'
import articleContent from './article-contetn'
import Articles from '../component/Articles'

export default function Articlelist() {
  return (
    <div>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
            Article List
        </h1>  
        <div className='container py-4 mx-auto '>
          <div className='flex flex-wrap -m-4'>
            <Articles articles={articleContent}/>
          </div>
        </div>     
    </div>
  )
}
