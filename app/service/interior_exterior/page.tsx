import DisplayTemplate from '@/components/ui/display-template'
import { interiorExterior } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={interiorExterior} heroImg="exterior.jpg" />
  )
}

export default page