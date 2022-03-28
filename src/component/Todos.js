import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from 'react-icons/go';
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

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
			<input
				type="text"
				placeholder="Add Todo"
				onChange={(e) => handleChange(e)}
				className="todo-input"
        value={todo}
			/>
			<motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="add-btn" 
      onClick={() => add()}>
        <GoPlus />
      </motion.button>
      <br />
		</div>
	);
};

// use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
