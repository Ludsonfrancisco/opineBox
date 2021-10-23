import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-500 p-6 absolute bottom-0 w-full hidden'>
      <div className='container mx-auto text-center font-bold  text-white'>
        <div className='mt-4'>
          Projeto desenvolvido por: {' '}
          <a className='hover:underline' href='mailto:ludsonfrancisco@hotmail.com' target='_blank'>Ludson Francisco</a>
          <a href='https://www.github.com/ludsonfrancisco' target='_blank'><img className='inline mx-auto p-1' src='./icon-github-white.png' alt='Github' /></a>
          <a href='https://www.linkedin.com/in/ludsonfrancisco/' target='_blank'><img className='inline mx-auto p-1' src='./icon-linkedin-white.png' alt='Linkedin' /></a>
        </div>
      </div>
    </div>
  ) 
}

export default Footer
