import {Route, Routes} from "react-router-dom"
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/admin";
import Container from "react-bootstrap/Container";
import {useState} from "react";

const App = () => {
    const [login, setLogin] = useState(false)

    return (
        <Container>
            <Routes>
                <Route path="/" element={<Admin login={login} setLogin={setLogin}/>}/>
                <Route path="/login" element={<Login setLogin={setLogin}/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Container>
    );
}

export default App;
