import Link from 'next/link';
import { Todo } from '../../../typings';

const fetchTodo = async () => {
  try {
    // ? timeout for random number of seconds between 1 and 5
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));

    const res = await fetch('https://jsonplaceholder.typicode.com/Todos');
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const todos: Todo[] = await res.json();
    return todos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const TodoList = async () => {
  const todos = await fetchTodo();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodoList;
