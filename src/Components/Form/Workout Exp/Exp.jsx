import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addWorkoutex, getPlan } from '../../../Redux/dataSlice.js';
import { Button, Container, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { paper, normal, afterClick } from './style';
import { useSelector } from 'react-redux';

function Exp() {
	const navigate = useNavigate();
	const { name, gender, age, height, weight, bodytype, workoutex,} = useSelector((state) => {
		return state.workout;
	});
	const [exp, setExp] = useState(workoutex);

	const dispatch = useDispatch();
	function onContinue(val) {
		setExp(val);
		dispatch(addWorkoutex(val));
	}

	function onGetPlan() {
		dispatch(getPlan({ name, gender, age, height, weight, bodytype, workoutex }));
		navigate('/Workoutplan');
	}

	return (
		<div className="main">
			<Container style={{ width: '60%', height: '80%', padding: '0px' }}>
				<Paper style={{ background: '#f1f5f8', height: '100%' }} elevation={6}>
					<div>
						<Link to="/Bodytype">
							<Button className="headerbtn" variant="contained" color="primary" startIcon={<ArrowBackIcon />}></Button>
						</Link>
					</div>
					<div style={paper}>
						<h2>What's your body type?</h2>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '80%',
								position: 'relative',
								bottom: '20px',
							}}
						>
							<Button onClick={() => onContinue('beginner')} style={exp === 'beginner' ? afterClick : normal}>
								No, I don’t have any
							</Button>

							<Button onClick={() => onContinue('intermediate')} style={exp === 'intermediate' ? afterClick : normal}>
								Yes, less than a year ago
							</Button>
							<Button onClick={() => onContinue('advanced')} style={exp === 'advanced' ? afterClick : normal}>
								Yes, more than 1 year ago
							</Button>
						</div>
						<Button className="continue" variant="contained" onClick={onGetPlan} disabled={exp === ''}>
							{/* <Link to="/Workoutplan" style={{ textDecoration: 'none', color: 'white' }}> */}
							Get Plan
							{/* </Link> */}
						</Button>
					</div>
				</Paper>
			</Container>
		</div>
	);
}

export default Exp;
