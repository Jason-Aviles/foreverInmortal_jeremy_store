export const SELECT = 'SELECT_TODO_TOGGLE'

export const ADDCART = 'ADD_CART'

export const DELETE = 'DELETE_TODO'

export const addcart = (cart) => {
    return {
        //the type
        type: ADDMORE,
        //the action
        payload: cart
    }
}



export const selectTodo = id => {
    return {
        type:SELECT,
        payload: id
    }
}



export const deleteTodo = id => {
    return {
        type:DELETE,
        payload: id
    }
}