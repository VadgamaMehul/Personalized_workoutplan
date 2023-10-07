import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addGender } from "../../../Redux/dataSlice.js";
import "./Gender.css";
import Male from "./male.png";
import Female from "./female.png";
import { Button, Container, Paper, ButtonGroup } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";

function Gender() {
  const intGender = useSelector((state) => {
    return state.workout.gender;
  });
  const [gender, setGender] = useState(intGender);

  const dispatch = useDispatch();
  function oncontinue() {
    dispatch(addGender(gender));
  }

  console.log(gender);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container style={{ width: "60%", height: "80%", padding: "0px" }}>
        <Paper
          elevation={6}
          style={{
            background: "#f1f5f8",
            height: "100%",
          }}
        >
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowBackIcon />}
              style={{
                // borderRadius: "50%",
                position: "relative",
                top: "40px",
                left: "40px",
              }}
            ></Button>
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>Gender</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ButtonGroup fullWidth variant="">
                <Button
                  color={gender === "male" ? "primary" : "default"}
                  startIcon={
                    <img src={Male} alt="Male" width="200px" height="200px" />
                  }
                  onClick={() => setGender("male")}
                  style={
                    gender === "male"
                      ? { borderRadius: "100px", backgroundColor: "#90EE90" }
                      : { borderRadius: "100px" }
                  }
                ></Button>
                <Button
                  color={gender === "female" ? "primary" : "default"}
                  startIcon={
                    <img
                      src={Female}
                      alt="Female"
                      width="200px"
                      height="200px"
                    />
                  }
                  onClick={() => setGender("female")}
                  style={
                    gender === "female"
                      ? { borderRadius: "100px", backgroundColor: "#90EE90" }
                      : { borderRadius: "100px" }
                  }
                ></Button>
              </ButtonGroup>
            </div>
            <div style={{ padding: "0", position: "relative", top: "128px" }}>
                <Button
                  className="continue"
                  variant="contained"
                  onClick={oncontinue}
                  disabled={gender === ""}
                >
                  <Link to="/Age" style={{ textDecoration: "none", color: "white" }}>Continue</Link>
                </Button>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Gender;
