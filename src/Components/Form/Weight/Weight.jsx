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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";

function Weight() {
  const intWeight = useSelector((state) => {
    return state.workout.weight;
  });
  const [weight, setWeight] = useState(intWeight);
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  function oncontinue() {
    dispatch(addWeight(weight));
  }
  return (
    <div className="main">
      <Container
        maxWidth="sm"
        style={{
          width: isPhoneScreen ? "100%" : "800px",
          height: isPhoneScreen ? "350px" : "400px",
        }}
      >
        <Paper
           elevation={10}
           style={{
             padding: "16px",
             height: "100%",
             display: "flex",
             flexDirection: "column",
             justifyContent: "space-between",
             background:"#f1f5f8",
           }}
        >
          <header>
            <Link to="/Height">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </header>
          <main>
            <h2>What is your weight?</h2>
            <TextField
            type="number"
              label="Weight"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Kg</InputAdornment>
                ),
              }}
              autoComplete="off"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </main>
          {/* <Link to="/Bodytype" className="continue">
              <Button variant="contained" onClick={oncontinue}>
                Continue
              </Button>
            </Link> */}
          <footer>
            <Button
              variant="contained"
              onClick={oncontinue}
              disabled={weight === ""}
            >
              <Link
                to="/Bodytype"
                style={{ textDecoration: "none", color: "white" }}
              >
                Continue
              </Link>
            </Button>
          </footer>
        </Paper>
      </Container>
    </div>
  );
}

export default Weight;
