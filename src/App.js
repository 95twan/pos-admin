import {Route, Routes} from "react-router-dom"
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/admin";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Admin/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
}

export default App;
