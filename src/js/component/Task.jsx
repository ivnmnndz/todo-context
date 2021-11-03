import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalState";

export const Task = ({ task }) => {
	const { deleteTask } = useContext(GlobalContext);
	return (
		<li className="task-item">
			<span>{task.text}</span>
			<button
				onClick={() => deleteTask(task.id)}
				type="button"
				className={"button btn btn-close"}></button>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.object
};
