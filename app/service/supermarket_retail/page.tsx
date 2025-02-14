import DisplayTemplate from '@/components/ui/display-template'
import { supermarketRetail } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={supermarketRetail} heroImg='supermarket-1.jpg' />
  )
}

export default page