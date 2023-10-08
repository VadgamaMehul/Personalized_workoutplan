import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addWorkoutex, getPlan } from "../../../Redux/dataSlice.js";
import {
  Button,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {normal, afterClick } from "./style";
import { useSelector } from "react-redux";

function Exp() {
  const navigate = useNavigate();
  const { name, gender, age, height, weight, bodytype, workoutex } =
    useSelector((state) => {
      return state.workout;
    });
  const [exp, setExp] = useState(workoutex);
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();
  function onContinue(val) {
    setExp(val);
    dispatch(addWorkoutex(val));
  }

  function onGetPlan() {
    dispatch(
      getPlan({ name, gender, age, height, weight, bodytype, workoutex })
    );
    navigate("/Workoutplan");
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
            <Link to="/Bodytype">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </header>
          <main>
            <h2>Do you have any past Work-Out Exerience?</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // width: "80%",
                // position: "relative",
                // bottom: "20px",
              }}
            >
              <Button
                onClick={() => onContinue("beginner")}
                style={exp === "beginner" ? afterClick : normal}
              >
                No, I don’t have any
              </Button>

              <Button
                onClick={() => onContinue("intermediate")}
                style={exp === "intermediate" ? afterClick : normal}
              >
                Yes, less than a year ago
              </Button>
              <Button
                onClick={() => onContinue("advanced")}
                style={exp === "advanced" ? afterClick : normal}
              >
                Yes, more than 1 year ago
              </Button>
            </div>
          </main>
          <footer>
            <Button
              variant="contained"
              onClick={onGetPlan}
              disabled={exp === ""}
            >
              {/* <Link to="/Workoutplan" style={{ textDecoration: 'none', color: 'white' }}> */}
              Get Plan
              {/* </Link> */}
            </Button>
          </footer>
        </Paper>
      </Container>
    </div>
  );
}

export default Exp;
