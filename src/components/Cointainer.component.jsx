import React, { children } from 'react'

const CointainerComponent = ({children}) => {
  return (
    <div className=' w-[800px] h-screen mx-auto'>
        {children}
    </div>
  )
}

export default CointainerComponent