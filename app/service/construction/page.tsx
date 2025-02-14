import DisplayTemplate from '@/components/ui/display-template'
import { constructionData } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={constructionData} heroImg='construction.jpg' />
  )
}

export default page