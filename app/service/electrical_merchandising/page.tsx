import DisplayTemplate from '@/components/ui/display-template'
import { electricalMerchandising } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={electricalMerchandising} heroImg='electro.jpg' />
  )
}

export default page