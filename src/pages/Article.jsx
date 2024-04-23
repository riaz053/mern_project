import React from 'react'
import {useParams} from 'react-router-dom';
import articlecontent from './article-contetn';

export default function Article() {
  const {name} = useParams();
  const article = articlecontent.find((article) => article.name === name);
  if(!article) return <div>Article does not Exists</div>
  return (
    <div> 
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
            {article.title}
        </h1>
        {article.content.map((paragraph, index)=> (
          <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
            {paragraph}
          </p>
        ))}
    </div>
  )
}
