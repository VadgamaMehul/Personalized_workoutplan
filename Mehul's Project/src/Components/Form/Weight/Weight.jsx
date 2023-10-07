import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addWeight } from "../../../Redux/dataSlice.js";
import {
  Container,
  TextField,
  Paper,
  Button,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from 'react-redux';

const paper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "93.5%",
};

function Weight() {
  const intWeight = useSelector((state) => {
    return state.workout.weight;
  });
  const [weight, setWeight] = useState(intWeight);

  const dispatch = useDispatch();

  function oncontinue() {
    dispatch(addWeight(weight));
  }
  return (
    <div className="main">
      <Container style={{ width: "60%", height: "80%", padding: "0px" }}>
        <Paper style={{ background: "#f1f5f8", height: "100%" }} elevation={6}>
          <div>
            <Link to="/Height">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </div>
          <div style={paper}>
            <h2>What is your weight?</h2>
            <TextField
              label="Weight"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            {/* <Link to="/Bodytype" className="continue">
              <Button variant="contained" onClick={oncontinue}>
                Continue
              </Button>
            </Link> */}
            <Button
              className="continue"
              variant="contained"
              onClick={oncontinue}
              disabled={weight === ""}
            >
              <Link to="/Bodytype" style={{textDecoration:'none',color:'white'}}>
                Continue
              </Link>
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Weight;
