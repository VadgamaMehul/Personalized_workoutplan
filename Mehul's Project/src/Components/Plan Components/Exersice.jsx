import React from "react";




function day(){
    return(
        <>

        </>
    );
}


function Exersice({ Exersicename, sets, reps, rest_between_sets }) {
  return (
    <div>
      <h2>{Exersicename}</h2>
      <p>Sets: {sets} </p>
      <p>Repetitions per set: {reps} </p>
      <p>Rest duration: {rest_between_sets} </p>
    </div>
  );
}

export default Exersice;
