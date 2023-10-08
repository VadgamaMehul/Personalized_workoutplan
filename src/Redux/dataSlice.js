import { createSlice } from "@reduxjs/toolkit";
import data from "../Utils/dummy.json"; // Assuming you have a valid JSON file at this path

const initialState = {
  name: "",
  gender: "",
  age: "",
  height: "",
  weight: "",
  body_type: "",
  workoutex: "",
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addAge(state, { payload }) {
      state.age = payload;
      console.log(payload);
    },
    addGender(state, { payload }) {
      state.gender = payload;
      console.log(payload);
    },
    addName(state, { payload }) {
      state.name = payload;
      console.log(payload);
    },
    addHeight(state, { payload }) {
      state.height = payload;
    },
    addWeight(state, { payload }) {
      state.weight = payload;
    },
    addBodytype(state, { payload }) {
      state.bodytype = payload;
    },
    addWorkoutex(state, { payload }) {
      state.workoutex = payload;
    },
    getPlan(state, action) {
      const { gender, age, height, weight, bodytype, workoutex } =
        action.payload;

      const res = data.filter((ele) => {
        return (
          // ele.age === parseInt(age) &&
          // ele.gender === gender &&
          // ele.body_type === bodytype &&
          // ele.weight === parseInt(weight) &&
          // ele.height === height &&
          // ele.previous_workout_experience === workoutex
          ele.gender.includes(gender) &&
          ele.body_type.includes(bodytype) &&
          ele.previous_workout_experience.includes(workoutex)
        );
      });

      state.data = res;
    },
  },
});

export const {
  addAge,
  addName,
  addGender,
  addHeight,
  addWeight,
  addBodytype,
  addWorkoutex,
  getPlan,
} = dataSlice.actions;

export default dataSlice.reducer;
