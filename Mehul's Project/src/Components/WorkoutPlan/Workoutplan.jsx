import React from "react";
import { useSelector } from "react-redux";

function Workoutplan() {
  const data = useSelector((state) => {
    return state.workout;
  });
  console.log(data.data);
  return  (
    <div>
      {data.age}
    </div>
  )
}

export default Workoutplan;
