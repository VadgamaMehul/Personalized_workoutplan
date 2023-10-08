import React from "react";
import { Day } from "./Exersice/Exersice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addAge, addBodytype, addGender, addHeight, addName, addWeight, addWorkoutex } from "../../../Redux/dataSlice";

function Plan() {
  const { name } = useSelector((state) => {
    return state.workout;
  });

  const dispatch = useDispatch();
  function newPlan() {
    dispatch(addName(""));
    dispatch(addGender(""));
    dispatch(addAge(""));
    dispatch(addHeight(""));
    dispatch(addWeight(""));
    dispatch(addBodytype(""));
    dispatch(addWorkoutex(""));
  }

  return (
    <>
      <div >
        <h1 style={{ textAlign: "center" }}>
          Hii, {name} Your Work-Out Plan Is Here.
        </h1>
        <Day day={1} />
        <Day day={2} />
        <Day day={4} />
        <Day day={5} />
        <Day day={6} />
        <Day day={7} />
        {/* <Day day={8}/> */}
      </div>
      <div style={{display:"flex",justifyContent:"center",marginBottom:"20px"}}>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            onClick={newPlan}
          >
            Make A New Plan
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Plan;
