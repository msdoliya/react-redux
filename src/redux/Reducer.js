

   export const reducers = ( state=0, action)=>{
if (action.type === 'deposit'){
     return  state+100
}
else if(action.type === 'withdraw'){
       return state -100
}

else{
    return state;
}
}


export const todoreducer =( state ={todo:[]}, action)=>{
    if (action.type === 'gettodo'){
        return {todo : action.payload}
    }
    else{
        return state;
}}

