import DisplayTemplate from '@/components/ui/display-template'
import { carHireLogistics } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={carHireLogistics} heroImg='car-rent.jpg' />
  )
}

export default page