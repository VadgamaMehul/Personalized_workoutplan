import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addName } from "../../../Redux/dataSlice.js";
import {
  Button,
  TextField,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";

function Home() {
  const intName = useSelector((state) => {
    return state.workout.name;
  });
  const [name, setName] = useState(intName);
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();
  function onNext() {
    dispatch(addName(name));
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
            <h2 className="text-center">
              Your Fitness, Your Way: Customized Workout Plans at Your
              Fingertips
            </h2>
          </header>
          <main>
            <TextField
              autoComplete="off"
              className="username"
              id="outlined-basic"
              label="Enter Name"
              variant="outlined"
              value={name}
              // style={{ width: "100%", marginBottom: "16px" }}
              onChange={(e) => setName(e.target.value)}
            />
          </main>
          <footer>
            <Button
              className="continue"
              variant="contained"
              onClick={onNext}
              disabled={name === ""}
            >
              <Link
                to="/Gender"
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

export default Home;
