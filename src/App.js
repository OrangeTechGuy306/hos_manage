import Home from "./pages/home/home";
import {Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/register/register";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<RegisterPage/>}/>
      </Routes>
  );
}

export default App;
