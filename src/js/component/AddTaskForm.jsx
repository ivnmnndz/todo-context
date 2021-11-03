import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

export const AddTaskForm = () => {
	const [content, setContent] = useState("");
	const { addTask } = useContext(GlobalContext);

	const generateRandomID = () => Math.floor(Math.random() * 10000000);
	const newID = generateRandomID();

	const onSubmitHandler = event => {
		event.preventDefault();
		const newTask = {
			id: newID,
			text: content.trim()
		};
		addTask(newTask);
		setContent("");
	};
	return (
		<div
			style={{
				display: "flex"
			}}>
			<input
				placeholder="Add Task"
				value={content}
				onChange={event => setContent(event.target.value)}
			/>
			<button onClick={onSubmitHandler} type="button">
				+
			</button>
		</div>
	);
};
