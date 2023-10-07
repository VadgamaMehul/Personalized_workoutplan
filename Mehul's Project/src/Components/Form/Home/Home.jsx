import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addName } from "../../../Redux/dataSlice.js";
import { Button, TextField, Container, Paper, } from "@mui/material";
import "./Home.css";
import { useSelector } from "react-redux";

function Home() {
  const intName = useSelector((state) => {
    return state.workout.name;
  });
  const [name, setName] = useState(intName);

  const dispatch = useDispatch();
  //   console.log(name);
  function onNext() {
      dispatch(addName(name));
  }
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
        <Paper elevation={6} style={{ background: "#f1f5f8", height: "100%" }}>
          <div className="paper">
            <h1 className="text-center">
              Your Fitness, Your Way: Customized Workout Plans at Your
              Fingertips
            </h1>
            <TextField
              className="username"
              id="outlined-basic"
              label="Enter Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* <Link
              className="continue"
              to={(name.trim() === "") ? "/" : "/Gender"} // Change '/nextPage' to your desired link
              component={Button}
              disabled={name === ""}
              underline="none"
            >
              Continue
            </Link> */}
            <Button
              className="continue"
              variant="contained"
              onClick={onNext}
              disabled={name === ""}
            >
              <Link to="/Gender" style={{textDecoration:'none',color:'white'}}>
                Continue
              </Link>
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Home;
