import { useState } from "react";

const NewTask = ({ onAdd }) => {
	const [titulo, settitulo] = useState("");
	const [fecha, setFecha] = useState("");
	const [recordatorio, setRecordatorio] = useState(false);

	const sendInf = e => {
		e.preventDefault();

		if (!titulo) {
			alert("Por favor ingrese un titulo");
			return;
		}

		onAdd({ titulo, fecha, recordatorio });

		settitulo("");
		setFecha("");
		setRecordatorio(false);
	};

	return (
		<form
			className="add-form"
			onSubmit={sendInf}>
			<div className="form-control">
				<label>Titulo</label>
				<input
					type="text"
					value={titulo}
					onChange={e => settitulo(e.target.value)}></input>
			</div>
			<div className="form-control">
				<label>Horario</label>
				<input
					type="text"
					value={fecha}
					onChange={e => setFecha(e.target.value)}></input>
			</div>
			<div className="form-control form-control-check">
				<label>Recordatorio</label>
				<input
					type="checkbox"
					value={recordatorio}
					onClick={e => setRecordatorio(e.currentTarget.checked)}></input>
			</div>
			<input
				type="submit"
				className="btn btn-bock"
			/>
		</form>
	);
};

export default NewTask;
