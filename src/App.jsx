import TodoForm from './Components/TodoForm'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './Store/TodoSlice';

function App() {

  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch();

  return (
    <div className='h-screen bg-black text-white flex flex-col items-center p-4 gap-10'>
      <TodoForm />
      {todos.map((todo) => (
        <div className='text-white flex gap-4' key={todo.id}>
          <div className='bg-white text-black p-2 rounded opacity-80'>{todo.text}</div>
          <button className='bg-green-900 p-2 rounded'
           onClick={() => dispatch(removeTodo(todo.id))}>REMOVE</button>
        </div>
      ))}
    </div>
  )
}

export default App
