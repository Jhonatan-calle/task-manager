import React from "react";
import Button from "./Button";

const Header = ({ showForm, valueAddTask }) => {
	return (
		<div className="header">
			<h1>Tareas</h1>
			<Button
				showForm={showForm}
				valueAddTask={valueAddTask}
			/>
		</div>
	);
};

export default Header;
