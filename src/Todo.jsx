import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettodo } from './redux/Action'

  
   

  
const Todo = () => {

    const {todo} = useSelector(state=>state.todo)
    const dispatch = useDispatch()


      useEffect(()=>{
      dispatch(gettodo())
      })
    
    return (
    <div>
      <table>
        <thead>
          <tr><td>
            id</td>
            <td>title</td>
            <td>body</td>
            </tr>
        
        </thead>
        <tbody>
      {todo.map((i)=>(
      <tr key={i.id}>
        <td>{i.id}</td>
        <td>{i.title}</td>
        <td>{i.body}</td>
      </tr>
      ))}
      </tbody>
      </table>
    </div>
  )
}

export default Todo
