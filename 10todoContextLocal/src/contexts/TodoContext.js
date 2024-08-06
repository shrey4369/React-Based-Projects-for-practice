import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "This is a todo List",
            checked: false
        }
    ],
    addTodo: (todoName) => { },
    updatedTodo: (id, todoName) => { },
    deletedTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}