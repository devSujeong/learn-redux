import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration : todo.done ? 'line-through' : 'none'
      }}
      onClick={() => onToggle(todo.id)}
    >
     {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle}) {
  return(
    <ul>
    {
      todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))
    }
    </ul>
  );
});

function Todos({ todos, onToggle, onCreate }) {
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" value={text} onChange={onChange}
          placeholder="할 일을 입력해 주세요." 
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  )
}

export default React.memo(Todos);