import { useSelector } from "react-redux";
import React from "react";
import "./style.css"

export function Day({ day }) {
  const { data} = useSelector((state) => {
		return state.workout;
	});
  const dataObj = data[0].workout_plan;
  const exercise1 = dataObj[`day_${day}`]?.exercise_1;
  const exercise2 = dataObj[`day_${day}`]?.exercise_2;
  const exercise3 = dataObj[`day_${day}`]?.exercise_3;
  
  return (
    <div className="day">
      <h1>Day {day} Workout Plan</h1>
      <div className="exercise">
        <WorkOutPlan ex={exercise1} />
        <WorkOutPlan ex={exercise2} />
        <WorkOutPlan ex={exercise3} />
      </div>
    </div>
  );
}

export function WorkOutPlan({ ex }) {
  return (
    <div>
      {ex && (
        <Exercise
          exname={ex.name}
          sets={ex.sets}
          reps={ex.reps}
          rest_between_sets={ex.rest_between_sets}
        />
      )}
    </div>
  );
}

function Exercise({ exname, sets, reps, rest_between_sets }) {
  return (
    <div>
      <h1>{exname}</h1>
      <p>Sets: {sets}</p>
      <p>Reps: {reps}</p>
      <p>Rest duration: {rest_between_sets}</p>
    </div>
  );
}
