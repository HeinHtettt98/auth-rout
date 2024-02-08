import React, { children } from 'react'
const ButtomComponents = ({children, ...rest}) => {
  return (
    <div className='flex justify-center mt-4 mb-2'>
      <button {...rest} className='py-2 mx-auto w-2/4 px-4 border rounded bg-slate-200 text-xl'>{children}</button>
    </div>
  )
}

export default ButtomComponents