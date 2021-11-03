import React from "react";
import { GlobalProvider } from "../context/GlobalState.js";
import { AddTaskForm } from "./AddTaskForm.jsx";
import { Header } from "./Header.jsx";
import { TaskList } from "./TaskList.jsx";

export const App = () => {
	return (
		<GlobalProvider>
			<Header />
			<AddTaskForm />
			<TaskList />
		</GlobalProvider>
	);
};
