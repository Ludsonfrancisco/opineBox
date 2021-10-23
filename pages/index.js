import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())


const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
       {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='m-12 mb-20 text-center '>
          {data.message}
        </p>
      }
      <PageTitle title='Seja bem-vindo' />
      {/* <p className='mt-12 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p> */}
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-12 py-4 rounded-lg font-bold shadow-lg hover:shadow'>Dar opinião ou sujestão</a>
        </Link>
      </div>     
    </div>
  )
}

export default Index