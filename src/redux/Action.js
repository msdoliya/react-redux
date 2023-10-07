

export const depositMoney = ()=>{
return  (dispatch) =>{

   dispatch({
    type:'deposit',
   }) 
}
}



export const withdrawMoney =(amount)=>{
    return (dispatch) =>{
       dispatch({
        type:'withdraw'
   
       }) 
    }
    }


export const gettodo =()=>{
   return async (dispatch) =>{
      
     let res =   await fetch('https://jsonplaceholder.typicode.com/posts');
     
     let data = await res.json()
     console.log(data)
      dispatch({
         type: 'gettodo',
         payload: data
      })
   }
}