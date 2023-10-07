import React from 'react';
import { Day } from './Exersice/Exersice';
import { useSelector } from 'react-redux';

function Plan() {
	const { name } = useSelector((state) => {
		return state.workout;
	});

	return (
		<div>
			<h1 style={{textAlign:"center",}}>Hii, {name} Your Work-Out Plan Is Here.</h1>
			<Day day={1} />
			<Day day={2} />
			<Day day={4} />
			<Day day={5} />
			<Day day={6} />
			<Day day={7} />
			{/* <Day day={8}/> */}
		</div>
	) 
}

export default Plan;
