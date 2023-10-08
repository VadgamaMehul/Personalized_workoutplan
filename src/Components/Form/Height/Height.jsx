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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";

function Height() {
  const intHeight = useSelector((state) => {
    return state.workout.height;
  });
  const [height, setHeight] = useState(intHeight);
  const [errorText, setErrorText] = useState("");
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
            <Link to="/Age">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </header>

          <main>
            <h2>How Tall Are You?</h2>
            <TextField
              autoComplete="off"
              className="Height"
              type="number"
              id="outlined-basic"
              label="Height"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Cm</InputAdornment>
                ),
              }}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              error={!!errorText}
              helperText={errorText}
            />
          </main>
          <footer>
            <Button
              variant="contained"
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
          </footer>
        </Paper>
      </Container>
    </div>
  );
}

export default Height;
