import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom";
import GoBackButton from "../components/goBackButton";

const Login = ({error, setLogin}) => {
    const navigate = useNavigate();

    const login = () => {
        setLogin(true);
        navigate('/');
    }

    return (
        <>
            <GoBackButton goBackUrl={'/'}/>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <h1>로그인</h1>
                </Col>
            </Row>
            {error && <Row className="mt-5">
                <Col xs={12} className="text-center">
                    error
                </Col>
            </Row>}
            <Row>
                <Col xs={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="user-id">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="user-password">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={login}>
                            로그인
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Login;
