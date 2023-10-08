import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addGender } from "../../../Redux/dataSlice.js";
import { normal, afterClick } from "./style";
import Male from "./male.png";
import Female from "./female.png";
import {
  Button,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";

function Gender() {
  const intGender = useSelector((state) => {
    return state.workout.gender;
  });
  const [gender, setGender] = useState(intGender);
  const theme = useTheme();
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();
  function oncontinue() {
    dispatch(addGender(gender));
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
            <Link to="/">
              <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Link>
          </header>
          <main>
            <h2>Gender</h2>
            <div style={{display:"flex",alignItems:"center"}}>
              <Button
                startIcon={
                  <img
                    src={Male}
                    alt="male"
                    style={{
                      width: isPhoneScreen ? "80px" : "150px",
                      height: isPhoneScreen ? "80px" : "150px",
                      display: "inline",
                      margin: "0 auto",
                    }}
                  />
                }
                onClick={() => setGender("male")}
                style={gender === "male" ? afterClick : normal}
              ></Button>
              <Button
                startIcon={
                  <img
                    src={Female}
                    alt="Female"
                    style={{
                      width: isPhoneScreen ? "80px" : "150px",
                      height: isPhoneScreen ? "80px" : "150px",
                      display: "inline",
                      margin: "0 auto",
                    }}
                  />
                }
                onClick={() => setGender("female")}
                style={gender === "female" ? afterClick : normal}
              ></Button>
            </div>
          </main>
          <footer>
            <Button
              variant="contained"
              onClick={oncontinue}
              disabled={gender === ""}
            >
              <Link
                to="/Age"
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

export default Gender;
