import React from 'react'

const Footer = () => {
  return (
    <div className='absolute w-full bottom'>
    <div className='bg-purple-100 p-2 '>
      <div className='container mx-auto text-xs  text-center font-bold inline text-black'>
        <div className='mt-2'>
          Projeto desenvolvido por: {' '}
          <a className='hover:underline' href='mailto:ludsonfrancisco@hotmail.com' target='_blank'>Ludson Francisco</a>
          <a href='https://www.github.com/ludsonfrancisco' target='_blank'><img className='inline mx-auto p-1' src='./icon-github.png' alt='Github' /></a>
          <a href='https://www.linkedin.com/in/ludsonfrancisco/' target='_blank'><img className='inline mx-auto p-1' src='./icon-linkedin.png' alt='Linkedin' /></a>
        </div>
      </div>
    </div>
    </div>
  ) 
}

export default Footer
