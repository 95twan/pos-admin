import {useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Admin = ({login, setLogin}) => {
    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login');
    }

    const logout = () => {
        setLogin(false);
    }

    const toRegister = () => {
        navigate('/register');
    }


    return (
        <Row className="mt-2">
            <Col>
                {!login ?
                    <Button className="me-1" variant="primary" type="button" onClick={toLogin}>로그인</Button> :
                    <Button className="me-1" variant="primary" type="button" onClick={logout}>로그아웃</Button>}
                <Button variant="primary" type="button" onClick={toRegister}>회원가입</Button>
            </Col>
        </Row>
    );
}

export default Admin;
