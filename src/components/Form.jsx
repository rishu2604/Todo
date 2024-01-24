import React from 'react'
import {useState} from 'react';
import "./form.css"

export default function Form() {
    const [click, setClick] = useState(false);
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [todo, setTodo] = useState([]);

    function handleClick(){
        setClick(true);
        
    }
    function pressDelete(index){
        setClick(false);
        const updatedTodos = [...todo];
        updatedTodos.splice(index, 1);
        setTodo(updatedTodos);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(click)
        {
            setTodo([...todo, { text, date }]);
            setText(e.target.text.value);
            setDate(e.target.date.value);
        }
        else{
            setText('');
            setDate('');
        }
    }


    return (
        <div className='container'>
            <h1 className='header'>Todo React App</h1>
            <div className='box'>
                <form onSubmit={handleSubmit}>
                    <input 
                        className='b1' 
                        type='text' 
                        name='text'
                        placeholder='Enter Todo Here' 
                        value={text}
                        onChange={(e)=> setText(e.target.value)} 
                    />
                    <input 
                        className='b2' 
                        name='date'
                        type="date" 
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                    />
                    <button className='add' onClick={handleClick}>Add</button>
                </form>
            </div>

            <div>
                {todo.map((todolist, index) => (
                    <div key={index}>
                        <span className='s1'>{todolist.text}</span>
                        <span className='s2'> {todolist.date}</span>
                        <button className='del' onClick={()=>pressDelete(index)}>Delete</button>
                    </div>))
                }
            </div>
        </div>
    )
}