import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBodytype } from "../../../Redux/dataSlice.js";
import {
  Button,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { normal, afterClick } from "./style";

function Bodytype() {
  const intBodytyp = useSelector((state) => {
    return state.workout.bodytype;
  });
  const [bodytyp, setBodytyp] = useState(intBodytyp);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down("sm"));
  function oncontinue() {
    dispatch(addBodytype(bodytyp));
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
            <Link to="/Weight">
              <Button
                className="headerbtn"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </header>

          <main>
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
          </main>
          <footer>
            <Button
              variant="contained"
              onClick={oncontinue}
              disabled={bodytyp === ""}
            >
              <Link
                to="/Exp"
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

export default Bodytype;
