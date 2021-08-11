import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import { useState } from 'react';

function TodoListItem({ todo, deleteTodo }) {

    const { user, setUser } = useContext(UserContext);
    const { changeColor, setChangeColor } = useState(false);

    const mine = todo.user === user.id;
    return(
        <li className={mine ? "my-todo" : ""} value="dark">
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