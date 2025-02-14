import DisplayTemplate from '@/components/ui/display-template'
import { agricultureAgroAllied } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <DisplayTemplate data={agricultureAgroAllied} heroImg='agro-3.jpg' />
  )
}

export default page