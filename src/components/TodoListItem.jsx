import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

function TodoListItem({ todo, deleteTodo }) {

    const { changeColor } = useContext(UserContext);

    // const mine = todo.user === user.id;
    const mine = changeColor === "light" ? "my-todo" : "list-background";

    return(
        <li className={changeColor ? "my-todo" : "list-background"} value="dark">
            {todo.done ? "✓ " : "○ "}
            {todo.text}
            {mine &&
                <button onClick={() => deleteTodo(todo)}>
                    delete
                </button>
            }
        </li>
    );
}

export default TodoListItem;