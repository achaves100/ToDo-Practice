// Adan - Import & Export: explicar uso en Home e Index
// Adan - Porque la informacion va en Home y no en Index

import React, { useState } from "react";

export function Home() {
	const [task, setTask] = useState(""); //Use state entrega 2 cosas: 1 variable y 1 funcion que modifica esa variable
	const [list, setList] = useState([]);

	return (
		<div className="text-center mt-5">
			<h1>TODO LIST</h1>
			<p>{JSON.stringify(task)}</p>
			<p>{JSON.stringify(list)}</p>
			<div>
				<form
					onSubmit={e => {
						e.preventDefault();
						setList(list.concat(task));
						setTask("");
					}}>
					<input
						type="text"
						value={task}
						placeholder="Ingrese sus tareas"
						onChange={e => {
							//if (e.key == "Enter") {
							//	setList(list.concat(task));
							setTask(e.target.value);
							//	console.log({ list });
							//}
						}}
					/>
				</form>
				{list.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</div>
		</div>
	);
}
