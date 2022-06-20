import Container from 'react-bootstrap/Container';
import {useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Admin = () => {

    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login');
    }

    const toRegister = () => {
        navigate('/register');
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    <Button className="me-1" variant="primary" type="button" onClick={toLogin}>로그인</Button>
                    <Button variant="primary" type="button" onClick={toRegister}>회원가입</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Admin;
