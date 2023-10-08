import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addAge } from "../../../Redux/dataSlice.js";
import {
  Button,
  TextField,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";

function Age() {
  const intAge = useSelector((state) => {
    return state.workout.age;
  });
  const [age, setAge] = useState(intAge);
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();

  function oncontinue() {
    dispatch(addAge(age));
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
            <Link to="/Gender">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </header>
          <main>
            <h2>How old are you?</h2>
            <TextField
              autoComplete="off"
              className="Age"
              type="number"
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </main>
          <footer>
            <Button
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
          </footer>
        </Paper>
      </Container>
    </div>
  );
}

export default Age;
