import {Route, Routes} from "react-router-dom"
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import MenuList from "./pages/menuList";
import MenuDetail from "./pages/menuDetail";

const App = () => {
    const [login, setLogin] = useState(false)

    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home login={login} setLogin={setLogin}/>}/>
                <Route path="/login" element={<Login setLogin={setLogin}/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/menu-list" element={<MenuList/>}/>
                <Route path="/menu-detail/:menuId" element={<MenuDetail/>}/>
            </Routes>
        </Container>
    );
}

export default App;
