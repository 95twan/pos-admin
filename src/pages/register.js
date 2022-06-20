import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom";
import {CgArrowLeft} from "react-icons/cg"
import {useState} from "react";

const Register = ({error}) => {

    const [iconColor, setIconColor] = useState('gray')

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const onMouseOver = () => {
        setIconColor('black');
    }

    const onMouseOut = () => {
        setIconColor('gray');
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col xs={12}>
                    <CgArrowLeft size="32" color={iconColor} cursor="pointer" onClick={goBack}
                                 onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <h1>회원가입</h1>
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
                        <Form.Group className="mb-3" controlId="user-eamil">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="user-password">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="user-repassword">
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Button variant="primary" type="button">
                            회원가입
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;