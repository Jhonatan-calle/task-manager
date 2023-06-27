import { FaTimes } from "react-icons/fa";

const Task = ({ task, iterarRecord, onDelete }) => {
	return (
		<div
			className={`task ${task.recordatorio && "reminder"}`}
			onDoubleClick={() => iterarRecord(task.id)}>
			<h3>
				{task.titulo}{" "}
				<FaTimes
					style={{ color: "red" }}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{task.fecha}</p>
		</div>
	);
};

export default Task;
