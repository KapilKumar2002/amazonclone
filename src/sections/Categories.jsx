import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { cards } from '../constants' 
const Categories = () => {
  return (
    <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
        {cards.map(e=> <CategoryCard title={e.title} imgURL={e.imgsrc} />)}
    </section>
  )
}

export default Categories