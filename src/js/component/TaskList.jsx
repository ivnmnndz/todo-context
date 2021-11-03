import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { Task } from "./Task.jsx";

export const TaskList = () => {
	const { tasks } = useContext(GlobalContext);

	return (
		<>
			<ul className="task-list">
				{tasks.map(task => (
					<Task key={task[0]} task={task} />
				))}
			</ul>
			<span>{tasks.length} items left</span>
		</>
	);
};
