
const ADD = "ADD";
const DELETE = "DELETE";
const IMPORTANT = "IMPORTANT";
const FINISHED = "FINISHED";
const EDIT = "EDIT";
const initialState = {
    todos:[{
        title:'',
        isDelete:false,
        isImportant:false,
        isDone:false,
        id:Math.floor(Math.random()*1000/8)
    }],
    count:0
   

};


const  tasks =(state = initialState, action) => {

    switch (action.type) {
        case  ADD :{
            return{
                ...state,
                todos:[...state.todos,{
                    title:action.title,
                    isDelete:false,
        isImportant:false,
        isDone:false,
        id:Math.floor(Math.random()*1000/8)

                }],
                count:state.count+1
            }
        }

        case DELETE:{
            return {
                ...state,
                todos:state.todos.filter((item)=>item.id !== action.id),
                count: state.count-1
            }
        }

        case IMPORTANT:{
            return{
                ...state,
                todos:state.todos.map((item) =>{
                    if(item.id === action.id){
return {
    ...item, isImportant:!item.isImportant
}

                    }
                    return item
                })
            }
        }


case FINISHED:{
    return {
        ...state,
        todos:state.todos.map((item)=>{
            if(item.id === action.id){
                return{
                    ...item,isDone:!item.isDone
                }
            }
            return item
        })
}  }

case EDIT: {
    return {
      ...state,
      todos: state.todos.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            title: action.title,
          };
        }
        return item;
      }),
    };
  }



        default: return state;
}
}
export const addTask = (title)=>{
return (dispatch)=>{
    return dispatch({type:ADD, title})
}
}

export const deleteTask =(id)=>{
    return (dispatch)=>{
        return dispatch({
            type : DELETE,
            id
        })
    }
}
export const doImportant = (id)=>{
    return (dispatch)=>{
return dispatch({
    type:IMPORTANT,
    id

})
    }
}

export const doFinished=(id)=>{
    return (dispatch)=>{
return dispatch({
    type:FINISHED,
    id
})
    }
}


export const doEdit = (id,title)=>{
    return (dispatch)=>{
return dispatch({
    type:EDIT,
    id,
    title
})
    } 
}
export default tasks