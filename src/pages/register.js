import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import GoBackButton from "../components/goBackButton";

const Register = ({error}) => {
    return (
        <>
            <GoBackButton goBackUrl={'/'}/>
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
                            <Button variant="primary" type="button">
                                중복확인
                            </Button>
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
        </>
    );
};

export default Register;
