import { createSlice } from "@reduxjs/toolkit";
import data from "../Utils/dummy.json"; // Assuming you have a valid JSON file at this path

const initialState = {
  name: "",
  gender: "",
  age: "",
  height: "",
  weight: "",
  bodytype: "",
  workoutex: "",
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addAge(state, { payload }) {
      state.age = payload;
    },
    addGender(state, { payload }) {
      state.gender = payload;
    },
    addName(state, { payload }) {
      state.name = payload;
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
    getPlan(state, action){
      const { age, gender, bodytype, weight } = action.payload;

      console.log(age,gender,bodytype,weight);
      // const res = data.filter((ele) => {
      //   return (
      //     ele.age === age &&
      //     ele.gender === gender &&
      //     ele.body_type === bodytype &&
      //     ele.weight === weight
      //   );
      // });
      // state.data = res;
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
