import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBodytype } from "../../../Redux/dataSlice.js";
import { Button, Container, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { paper, normal, afterClick } from "./style";

function Bodytype() {
  const intBodytyp = useSelector((state) => {
    return state.workout.bodytype;
  });
  const [bodytyp, setBodytyp] = useState(intBodytyp);
  const dispatch = useDispatch();
  function oncontinue() {
    dispatch(addBodytype(bodytyp));
  }

  return (
    <div className="main">
      <Container style={{ width: "60%", height: "80%", padding: "0px" }}>
        <Paper style={{ background: "#f1f5f8", height: "100%" }} elevation={6}>
          <div>
            <Link to="/Weight">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </div>
          <div style={paper}>
            <h2>What's your body type?</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
                position: "relative",
                bottom: "20px",
              }}
            >
              <Button
                onClick={() => setBodytyp("slim")}
                style={bodytyp === "slim" ? afterClick : normal}
              >
                Slim
              </Button>

              <Button
                onClick={() => setBodytyp("ideal")}
                style={bodytyp === "ideal" ? afterClick : normal}
              >
                ideal
              </Button>
              <Button
                onClick={() => setBodytyp("heavy")}
                style={bodytyp === "heavy" ? afterClick : normal}
              >
                heavy
              </Button>
            </div>
            <Button
              className="continue"
              variant="contained"
              onClick={oncontinue}
              disabled={bodytyp === ""}
            >
              <Link to="/Exp" style={{textDecoration:'none',color:'white'}}>
                Continue
              </Link>
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Bodytype;
