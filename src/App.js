import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";

function App() {
	const [addTask, setAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	const onDelete = async id => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "DELETE",
		});
		setTasks(tasks.filter(task => task.id !== id));
	};

	const iterarRecord = async id => {
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					recordatorio: !task.recordatorio,
				};
			}
			return task;
		});

		const response = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedTasks.find(task => task.id === id)),
		});

		if (response.ok) {
			const data = await response.json();
			setTasks(
				updatedTasks.map(task => {
					if (task.id === id) {
						return {
							...task,
							recordatorio: data.recordatorio,
						};
					}
					return task;
				})
			);
		}
	};

	useEffect(() => {
		const getTasks = async () => {
			const response = await fetch("http://localhost:5000/tasks");
			const tasks = await response.json();
			setTasks(tasks);
		};
		getTasks();
	}, []);

	const onAdd = async task => {
		const resp = await fetch("http://localhost:5000/tasks", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(task),
		});
		const data = await resp.json();
		setTasks([...tasks, data]);
	};

	return (
		<div className="container">
			<Header
				showForm={() => {
					setAddTask(!addTask);
				}}
				valueAddTask={addTask}
			/>
			{addTask && <NewTask onAdd={onAdd} />}
			<Tasks
				tasks={tasks}
				iterarRecord={iterarRecord}
				onDelete={onDelete}
			/>
		</div>
	);
}

export default App;
