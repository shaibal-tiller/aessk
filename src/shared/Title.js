import React from 'react'

const Title = ({title}) => {
  return (
    <div className='text-center w-[60%] rounded-2xl text-5xl tracking-widest
     mt-4 font-bold p-4 bg-slate-400 bg-opacity-20 text-slate-600'>{title.toUpperCase()}</div>
  )
}

export default Title