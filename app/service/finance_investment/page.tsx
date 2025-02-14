import DisplayTemplate from '@/components/ui/display-template'
import { financeInvestment } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={financeInvestment} heroImg='investment.jpg' />
  )
}

export default page