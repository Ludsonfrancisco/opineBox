import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className='pp:bg-fundo-top bg-no-repeat bg-right-top p-4 bg-1-4'>
        <h1 className='mb-8 mt-16 text-center text-3xl font-bold'>OpineBox</h1>
        <div className='container mx-auto'>
          <Link href='/'>
            <img className='cursor-pointer mx-auto' src='/logo-ob.png' alt='Palpite Box' />
          </Link>
        </div>
        
      </div>
   </React.Fragment>
  )
}

export default Header