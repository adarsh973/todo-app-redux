import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../Store/TodoSlice";

export default function TodoForm(){

    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const todoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }

    return(
        <form className="flex" onSubmit={todoHandler}>

            <input type="text" placeholder="Enter text.." className="w-96 text-black"
            value={input} onChange={(e) => setInput(e.target.value)}></input>

            <button className="bg-blue-900 p-2 hover:ring-2">ADD</button>

        </form>
    )
}