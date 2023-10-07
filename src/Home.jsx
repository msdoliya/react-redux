import React from 'react'
import { useDispatch } from 'react-redux'
import { depositMoney, withdrawMoney } from './redux/Action'





const Home = () => {
    const dispatch = useDispatch()
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
     
      <button onClick={()=>dispatch(depositMoney())}>+</button>
      
       <span>amount</span>

      <button onClick={()=>dispatch(withdrawMoney())} >-</button>
    </div>
  )
}

export default Home
