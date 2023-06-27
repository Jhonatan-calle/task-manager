import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, iterarRecord, onDelete }) => {
	return (
		<div>
			{tasks.map((task, index) => (
				<Task
					task={task}
					key={index}
					iterarRecord={iterarRecord}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
};

export default Tasks;
