import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import List from "./components/list";
import Dashboard from "./components/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
// import { decrement, increment } from "./redux/counterSlice";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <Router>
      <NavbarComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        {/* <Route path="/signup" element={<Signup onAuth={true} />} />
        <Route path="/login" element={<Login onAuth={false} />} /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<List searchQuery={searchQuery} />} />
      </Routes>
    </Router>
  );
}

export default App;
