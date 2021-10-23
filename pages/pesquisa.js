import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'


const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0,
    Mensagem: ''
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {
    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <PageTitle  title='Pesquisea '/>
      <h1 className='text-center font-bold mb-4 text-2xl'>Críticas e sugestões</h1>
      <p className='text-center mb-6 text-sm px-2'>O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      {!sucess && <div className=' w-4/5 lg:w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input className='focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-full p-4 block shadow bg-blue-100 my-2 rounded' type='text' placeholder='Digite seu Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>Seu E-mail:</label>
        <input className='focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-full p-4 block shadow bg-blue-100 my-2 rounded' type='text' placeholder='Digite seu E-mail' onChange={onChange} name='Email' value={form.Email} required />
        <label className='font-bold sm:text-center'>Seu Whatsapp:</label>
        <input className='focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-full p-4 block shadow bg-blue-100 my-2 rounded' type='text' placeholder='Digite seu Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className='font-bold'>Nota:</label>
        
        <div className='flex pt-4 pb-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent '> 
          {notas.map(nota => {
            return (<label className='block w-1/6 text-left '>
                    {nota} <br />
                    <input type='radio' src='' name='Nota' value={nota} onChange={onChange} />
                  </label>)

          })}
        </div>
        <label className='font-bold'>Sua opinião:</label>
        <textarea className='focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-full p-4 block shadow bg-blue-100 my-2 rounded' rows='4' cols='25' type='text' placeholder='Mensagem' onChange={onChange} name='Mensagem' value={form.Mensagem} />

        <button className='text-white w-full mb-6 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-12 py-5 mt-6 rounded-lg font-bold shadow-xl hover:shadow ' onClick={save}>Salvar</button>
      </div>}
      {sucess && <div className=' w-4/5 lg:w-1/5 mx-auto'>
        <p className=' mt-6 text-center  border-blue-500 text-blue-700 bg-withe px-4 py-3'> Obrigado por contribuir com sua sujestão ou crítica</p>
        {
          retorno.showCoupon && <div className='text-center border p-4  mb-4'>
            Seu Cupom: <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb-2'>{retorno.Promo}</span>
            <br />
            <span className='italic'>Tire um print ou foto desta tela e apresente ao balcão.</span>
          </div>
        } 
      </div>}
    </div>
  )
}

export default Pesquisa