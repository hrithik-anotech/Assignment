import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<HomePage />} />  {/* Home Route */}
        
        <Route path="/login" element={<Login />} /> {/* Login Route */}

        <Route path="/signup" element={<Signup />} /> {/* Signup Route */}

        <Route path="*" element={<div>Page not found</div>} />         {/* Error Route */}
      </Routes>
    </div>
  );
}

export default App;
