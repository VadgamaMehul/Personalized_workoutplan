import React from "react";
import { Day } from "./Exersice/Exersice";
// const dummy = require("../../../Utils/dummy.json");
// const dataObj = dummy;

// console.log(dataObj[0].workout_plan);
// const ex1 = dataObj.workout_plan.day_1.exercise_1;
function Plan() {
  return (
    <div>
      <Day day={1}/>
      <Day day={2}/>
      <Day day={4}/>
      <Day day={5}/>
      <Day day={6}/>
      <Day day={7}/>
      {/* <Day day={8}/> */}
    </div>
  );
}

export default Plan;
