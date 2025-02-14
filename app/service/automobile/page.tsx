import DisplayTemplate from '@/components/ui/display-template'
import { automobileSpareParts } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={automobileSpareParts} heroImg='car-parts.jpg' />
  )
}

export default page