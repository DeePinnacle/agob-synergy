import DisplayTemplate from '@/components/ui/display-template'
import { hospitalityFoodProduction } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={hospitalityFoodProduction} heroImg='food.jpg' />
  )
}

export default page