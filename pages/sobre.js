import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <h1>Sobre</h1>
      <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </div>

    </div>
  )
}

export default Sobre