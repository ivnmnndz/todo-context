import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { Task } from "./Task.jsx";

export const TaskList = () => {
	const { tasks } = useContext(GlobalContext);

	return (
		<>
			<ul className="task-list">
				{tasks.map(task => (
					<Task key={task.id} task={task} />
				))}
			</ul>
			<span className="muted-text">
				{`${
					tasks.filter(task => task.completed === !true).length
				} items left`}
			</span>
		</>
	);
};
