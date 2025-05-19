import { ArrowBigLeftDash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BackLink = () => {
  return (
    <Link href="/"><ArrowBigLeftDash size={40} /></Link>
  )
}

export default BackLink