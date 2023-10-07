import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const amount =  useSelector(state => state.amount)
useEffect(()=>{
  console.log(amount)
})
    
  return (
    <div style={{display:'flex', justifyContent:'space-between',backgroundColor:'blue', height:'60px', padding:'0 20px 0 20px', alignItems:'center'}}>
     <span>hello world</span> 
     <span>
{amount}
     </span>
    </div>
  )
}

export default Navbar
