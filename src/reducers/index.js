
import { ADDCART } from "../action";


const initialState = {
  error: "",
  category: [{ title: "Mens", id: 1 },{ title: "Womens", id: 2 },{ title: "Kids", id: 3 }],
  cart: [],
  Mens: {
    title: "Mens",
    id: 1,
    tshirt: [
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 1,
        catigoryId: 1,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 2,
        catigoryId: 1,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 3,
        catigoryId: 1,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 4,
        catigoryId: 1,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 4,
        catigoryId: 1,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 5,
        catigoryId: 1,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 6,
        catigoryId: 1,
      },
    ],
  },
  Womens: {
    title: "Womens",
    id: 2,
    tshirt: [
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 1,
        catigoryId: 2,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 2,
        catigoryId: 2,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 3,
        catigoryId: 2,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 3,
        catigoryId: 2,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 5,
        catigoryId: 2,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 5,
        catigoryId: 2,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 6,
        catigoryId: 6,
      },
    ],
  },
  kids: {
    title: "kids",
    id: 3,
    tshirt: [
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        inCArt: false,
        id: 1,
        catigoryId: 3,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        id: 2,
        catigoryId: 3,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        id: 3,
        catigoryId: 3,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        id: 4,
        catigoryId: 3,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        id: 5,
        catigoryId: 3,
      },
      {
        size: [s, m, L, xl],
        name: "Last life goku",
        price: "$35",
        description: "100 cotton",
        id: 6,
        catigoryId: 3,
      },
    ],
  },
};




 
export default (state = initialState, action) => {
  switch (action.type) {
    case ADDCART:
      //new todo item were making
      const newTodo = {
        id: state.todos[state.todos.length-1].id+1,
        task: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case SELECT:
      return {
        ...state,
        todos: state.todos.map(todoItem =>
          todoItem.id === action.payload
            ? { ...todoItem, completed: !todoItem.completed }
            : todoItem
        )
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter(todoItem => todoItem.id !== action.payload)
      };
    default:
      return state;
  }
};
