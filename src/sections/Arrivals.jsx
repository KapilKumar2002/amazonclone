import React from 'react'
import { newArrivals } from '../constants'
import CategoryCard from '../components/CategoryCard'

const Arrivals = () => {
  return (
    <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
    {newArrivals.map(e=>(<CategoryCard title={e.title} imgURL={e.imgsrc}/>))}
    </section>
  )
}

export default Arrivals