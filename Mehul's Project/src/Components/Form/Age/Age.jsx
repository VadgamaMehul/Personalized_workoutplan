import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Age.css";
import { Link } from "react-router-dom";
import { addAge } from "../../../Redux/dataSlice.js";
import { Button, TextField, Container, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";

const paper = {
  background: "#f1f5f8",
  height: "100%",
};

function Age() {
  const intAge = useSelector((state) => {
    return state.workout.age;
  });
  const [age, setAge] = useState(intAge);

  const dispatch = useDispatch();

  function oncontinue() {
    dispatch(addAge(age));
  }

  const paper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "93.5%",
  };

  return (
    <div className="main">
      <Container style={{ width: "60%", height: "80%", padding: "0px" }}>
        <Paper style={{ background: "#f1f5f8", height: "100%" }} elevation={6}>
          <div>
            <Link to="/Gender">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </div>
          <div style={paper}>
            <h2>How old are you?</h2>
            <TextField
              className="Age"
              type="number"
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Button
              className="continue"
              variant="contained"
              onClick={oncontinue}
              disabled={age === ""}
            >
              <Link
                to="/Height"
                style={{ textDecoration: "none", color: "white" }}
              >
                Continue
              </Link>
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Age;
