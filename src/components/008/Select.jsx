import { useState } from 'react';

function Select() {
	const selectData = [
		{ val: 5, name: 'Klevas' },
		{ val: 9, name: 'Uosis' },
		{ val: 10, name: 'Agrastas' },
		{ val: 40, name: 'Obelis' },
	];
	const [select, setSelect] = useState('3');
	const [selects, setSelects] = useState('2');

	return (
		<>
			<div className="form-container">
				<select value={select} onChange={(e) => setSelect(e.target.value)}>
					<option value="1">Drakosa</option>
					<option value="2">Defliunas</option>
					<option value="3">Sliekas</option>
					<option value="15">Batuotas katinas</option>
				</select>

				<button onClick={() => setSelect(2)}>Defliunas</button>
			</div>
			<div className="form-container">
				<h2>{selectData.find((s) => s.val === parseInt(selects))?.name}</h2>
				<select value={selects} onChange={(e) => setSelects(e.target.value)}>
					{selectData.map((s) => (
						<option key={s.val} value={s.val}>
							{s.name}
						</option>
					))}
				</select>
			</div>
		</>
	);
}

export default Select;
