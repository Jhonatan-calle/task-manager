import React from "react";

const Button = ({ showForm, valueAddTask }) => {
	return (
		<button
			className="btn"
			style={{ backgroundColor: valueAddTask ? "red" : "green" }}
			onClick={() => showForm()}>
			{valueAddTask ? "Eliminar" : "Añadir"}
		</button>
	);
};

export default Button;
