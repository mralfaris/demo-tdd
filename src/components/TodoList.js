import React from 'react';

const TodoList = ({todos}) => (
<div>
{
    todos.map((t, i) => (
        <TodoItem key={i}>{t.title}</TodoItem>
    ))
}
</div>);

export default TodoList;
