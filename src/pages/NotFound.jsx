import React from 'react'

export default function NotFound({name}) {
  return (
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
      404 : {name} Not Found
    </h1>
  )
}
