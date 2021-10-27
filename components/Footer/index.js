import React from 'react'

const Footer = () => {
  return (
    <div className='absolute w-full bottom'>
    <div className='bg-purple-100 p-2 '>
      <div className='container mx-auto text-sm  text-center font-bold inline text-black'>
        <div className='mt-2'>
          {/* Projeto desenvolvido por: {' '} */}
          <a className='hover:underline' href=''>/nomeDoEstabelecimento </a>
          {/* <a href='https://www.github.com/ludsonfrancisco' target='_blank'><img className='inline mx-auto p-1' src='./icon-github.png' alt='Github' /></a>
          <a href='https://www.linkedin.com/in/ludsonfrancisco/' target='_blank'><img className='inline mx-auto p-1' src='./icon-linkedin.png' alt='Linkedin' /></a>*/}
          <a href='https://www.instagram.com' target='_blank'><img className='inline mx-auto p-1' src='./instagram-white.png' alt='Instagram' /></a> 
         
        </div>
      </div>
    </div>
    </div>
  ) 
}

export default Footer
