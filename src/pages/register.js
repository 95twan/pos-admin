import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import {InputGroup} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import GoBackButton from "../components/goBackButton";
import {useState} from "react";

const Register = ({error}) => {
    const [duplicate, setDuplicate] = useState(true);
    const [user, setUser] = useState({});
    const [repassword, setRepassword] = useState('');

    const onChangeUserId = (e) => {
        setDuplicate(true);
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const onChangeRepassword = (e) => {
        setRepassword(e.target.value)
    }

    const onChange = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const checkDuplicate = () => {
        if (!user.id) return alert('아이디를 입력해주세요.')
        setDuplicate(false);
    }

    const register = () => {
        if (!(user.id && user.email && user.password && repassword)) return alert('모든 정보를 입력해주세요.')
        if (duplicate) return alert('아이디 중복확인을 해주세요.');
        if (user.password !== repassword) return alert('비밀번호가 서로 다릅니다.');
    }

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
                            <InputGroup>
                                <Form.Control type="text" name="id" onChange={onChangeUserId}/>
                                <Button variant="primary" type="button" disabled={!duplicate}
                                        onClick={checkDuplicate}>중복확인</Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="user-email">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control type="email" name="email" onChange={onChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="user-password">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" name="password" onChange={onChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="user-repassword">
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password" onChange={onChangeRepassword}/>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={register}>
                            회원가입
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Register;
