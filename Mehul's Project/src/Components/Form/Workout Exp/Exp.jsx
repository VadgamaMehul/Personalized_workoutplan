import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addWorkoutex, getPlan } from "../../../Redux/dataSlice.js";
import { Button, Container, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { paper, normal, afterClick } from "./style";
import { useSelector } from "react-redux";

function Exp() {
  const intExp = useSelector((state) => {
    return state.workout.workoutex;
  });
  const [exp, setExp] = useState(intExp);

  const dispatch = useDispatch();
  function oncontinue() {
    dispatch(addWorkoutex(exp));
  }

  // const data = useSelector((state) => {
  //   return state.workout;
  // });
  // console.log(data);

  function onNext() {
    // dispatch(getPlan(data.age, data.gender, data.body_type, data.weight));
  }

  return (
    <div className="main">
      <Container style={{ width: "60%", height: "80%", padding: "0px" }}>
        <Paper style={{ background: "#f1f5f8", height: "100%" }} elevation={6}>
          <div>
            <Link to="/Bodytype">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </div>
          <div style={paper}>
            <h2>What's your body type?</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
                position: "relative",
                bottom: "20px",
              }}
            >
              <Button
                value={exp}
                onClick={() => setExp("beginner")}
                onChange={oncontinue}
                style={exp === "beginner" ? afterClick : normal}
              >
                No, I don’t have any
              </Button>

              <Button
                value={exp}
                onClick={() => setExp("intermediate")}
                onChange={oncontinue}
                style={exp === "intermediate" ? afterClick : normal}
              >
                Yes, less than a year ago
              </Button>
              <Button
                value={exp}
                onClick={() => setExp("advanced")}
                onChange={oncontinue}
                style={exp === "advanced" ? afterClick : normal}
              >
                Yes, more than 1 year ago
              </Button>
            </div>
            <Button
              className="continue"
              variant="contained"
              onClick={oncontinue}
              disabled={exp === ""}
            >
              <Link to="/Workoutplan" style={{textDecoration:'none',color:'white'}}>
                Continue
              </Link>
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Exp;
