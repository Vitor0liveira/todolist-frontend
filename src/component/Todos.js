import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';

const mapStateToProps = (state) => {
	return {
		todos: state,
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo:(id) => dispatch(removeTodos(id)),
    updateTodo:(obj) => dispatch(updateTodos(obj)),
    completeTodo:(id) => dispatch(completeTodos(id)),
  };
};


const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      props.updateTodo({id, item: value});
      inputRef.current.disabled = true;
    } 
  };


	const handleChange = (e) => {
		setTodo(e.target.value);
	};

  const add = () => {
    if (todo === "") {
      alert("Please enter a todo");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 100),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

	// console.log('Todo text: ', props);
	return (
		<div className="addTodos">
			<h1>Todos</h1>
			<input
				type="text"
				placeholder="Add Todo"
				onChange={(e) => handleChange(e)}
				className="todo-input"
        value={todo}
			/>
			<button className="add-btn" onClick={() => add()}>Add</button>
      <ul>
        {
          props.todos.map((item) => {
            return (
              <li key={item.id}> 
              <textarea 
                ref={inputRef} 
                disabled={inputRef} 
                defaultValue={item.item} 
                onKeyPress={(e) => update(item.id, inputRef.current.value, e)} 
                />

              <button onClick={() => changeFocus()}>Edit</button>
              <button onClick={() => props.completeTodo(item.id)}>Complete</button>
              <button onClick={() => props.removeTodo(item.id)}>Delete</button> 
              </li>
            );
          })
        }
      </ul>
		</div>
	);
};
// use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
