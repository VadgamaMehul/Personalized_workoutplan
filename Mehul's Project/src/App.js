import "./App.css";
import Age from "./Components/Form/Age/Age";
import Bodytype from "./Components/Form/Body_type/Bodytype";
import { HashRouter, Routes, Route } from "react-router-dom";
import Gender from "./Components/Form/Gender/Gender";
import Height from "./Components/Form/Height/Height";
import Home from "./Components/Form/Home/Home";
import Weight from "./Components/Form/Weight/Weight";
import Exp from "./Components/Form/Workout Exp/Exp";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Workoutplan from "./Components/WorkoutPlan/Workoutplan";
import Exersice from "./Components/Plan Components/Exersice";
import Plan from "./Components/WorkoutPlan/Day/Day";


function App() {
  return (
    // <>
    // <Exersice Exersicename={"PushUp"} sets={"4"} reps={3} rest_between_sets={90} />
    // </>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gender" element={<Gender />} />
          <Route path="/Age" element={<Age />} />
          <Route path="/Height" element={<Height />} />
          <Route path="/Weight" element={<Weight />} />
          <Route path="/Bodytype" element={<Bodytype />} />
          <Route path="/Exp" element={<Exp />} />
          <Route path="/Workoutplan" element={<Plan/>} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
