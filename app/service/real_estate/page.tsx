import DisplayTemplate from '@/components/ui/display-template'
import React from 'react'
import { realEstateData } from '@/data/data'

const page = () => {
  return (
    <DisplayTemplate data={realEstateData} heroImg="estate.jpg" />
  )
}

export default page