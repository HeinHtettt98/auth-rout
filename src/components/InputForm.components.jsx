import React from 'react'

const InputFormComponents = ({typee ,forr ,chil ,lable ,...rest}) => {
  return (
    <div className=' flex flex-col m-2'>
        <label className=' text-xl mb-2' htmlFor={forr}>{lable}</label>
        <input {...rest} type={typee} id={forr} placeholder={chil} className=' border-2 py-1 px-3 rounded'/>
    </div>
  )
}

export default InputFormComponents