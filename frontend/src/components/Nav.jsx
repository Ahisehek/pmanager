import React from 'react'

function Nav() {
  return (
   <>
   <div className='bg-black flex justify-between h-10 pt-2'>
    <div className='ml-5'>
        <span className=  'font-bold text-purple-400'>Pass</span>
        <span className='font-bold text-white'>OP</span>
    </div>
    <div className='text-white mr-20'>
        {["Home","About","Contects"].map((item,index)=>{
            return <span className='text-white mx-4'><a href="#">{item}</a></span>
        })}
    </div>

   </div>
   
   </>
  )
}

export default Nav
