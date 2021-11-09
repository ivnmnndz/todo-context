export default (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,
				tasks: [...state.tasks, action.payload]
			};

		case "DELETE_TASK":
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.payload)
			};

		case "COMPLETE_TASK":
			return {
				...state,
				tasks: state.tasks.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							completed: true
						};
					} else {
						return item;
					}
				})
			};

		default:
			return state;
	}
};
