import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer.js";

// define initial state
const initialState = {
	tasks: [
		{ id: 1, text: "test" },
		{ id: 2, text: "global" },
		{ id: 3, text: "state" }
	]
};

//create context
export const GlobalContext = createContext(initialState);
//export a provider component to wrap children components
export const GlobalProvider = ({ children }) => {
	//create useReducer state
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// define actions
	function addTask(task) {
		dispatch({
			type: "ADD_TASK",
			payload: task
		});
	}
	function deleteTask(id) {
		dispatch({
			type: "DELETE_TASK",
			payload: id
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				tasks: state.tasks,
				addTask,
				deleteTask
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
// validate properties
GlobalProvider.propTypes = {
	children: PropTypes.array
};
