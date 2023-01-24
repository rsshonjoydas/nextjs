import { notFound } from 'next/navigation';
import { Todo } from '../../../typings';

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div className='p-10 m-2 text-gray-300 border-2 rounded-md shadow-lg bg-dark-400/50'>
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>

      <p className='mt-5 text-right border-t border-black/30'>
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;
