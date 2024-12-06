import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/:category" element={<HomePage />}/>
       
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
