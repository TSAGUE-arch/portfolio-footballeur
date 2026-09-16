import React from 'react'
import Penalty from './categories/Penalty'
import Appelbut from './categories/Appelbut'
import Offensif from './categories/Offensif'
import Aerien from './categories/Aerien'
import Rapport from './categories/Rapport'

const Categories = () => {
  return (
    <div id='Categories' className='mt-4 bg-base-200 '>
       <h1 className='text-3xl sm:text-5xl font-bold text-center block pt-3 '>Categories d'Actions </h1>
       <Penalty />
       <Appelbut />
       <Offensif />
       <Aerien />
       <Rapport />
    </div>
  )
}

export default Categories
