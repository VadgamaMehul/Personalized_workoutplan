import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addHeight } from "../../../Redux/dataSlice.js";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Container,
  Paper,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";

const paper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "93.5%",
};

function Height() {
  const intHeight = useSelector((state) => {
    return state.workout.height;
  });
  const [height, setHeight] = useState(intHeight);
  const [errorText, setErrorText] = useState("");
  const dispatch = useDispatch();

  function oncontinue() {
    if (height.trim() === "") {
      setErrorText("Please enter a value.");
    } else if (parseInt(height) < 50 || parseInt(height) > 270) {
      setErrorText("Height must be between 50 and 270.");
    } else dispatch(addHeight(height));
  }
  return (
    <div className="main">
      <Container style={{ width: "60%", height: "80%", padding: "0px" }}>
        <Paper style={{ background: "#f1f5f8", height: "100%" }} elevation={6}>
          <div>
            <Link to="/Age">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </div>
          <div style={paper}>
            <h2>How Tall Are You?</h2>
            <TextField
              className="Height"
              type="number"
              id="outlined-basic"
              label="Height"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Cm</InputAdornment>
                ),
              }}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              error={!!errorText}
              helperText={errorText}
            />
            {/* <Link to="/Weight" className="continue">
              <Button variant="contained" onClick={oncontinue}>
                Continue
              </Button>
            </Link> */}
            <Button
              className="continue"
              variant="contained"
              // onClick={oncontinue}
              disabled={height === ""}
              onClick={oncontinue}
            >
              <Link
                to={
                  parseInt(height) < 50 || parseInt(height) > 270
                    ? "#"
                    : "/Weight"
                }
                style={{ textDecoration: "none", color: "white" }}
                // disabled={height.trim() === '' || !!errorText}
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

export default Height;
