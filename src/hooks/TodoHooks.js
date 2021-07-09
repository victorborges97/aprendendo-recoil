import { useRecoilState } from "recoil"

import { todosListState } from "../Atom/todos"

export const useTodo = () => {
    const [todoList, setTodolist] = useRecoilState(todosListState)

    function addTodo(todoInput) {
        setTodolist(old => [ ...old, {key: Math.random(), todo: todoInput} ])
    }

    function deleteTodo(keyTodo) {
        setTodolist((old) => old.filter((item) => item.key !== keyTodo) )
    }

    return { todoList, addTodo, deleteTodo }
}