import {useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = ({login, setLogin}) => {
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

    const toMenuList = () => {
        navigate('/menu-list')
    }

    return (
        <>
            <Row className="mt-5">
                <Col xs={12} className="text-center">
                    <h1>관리자 페이지</h1>
                </Col>
            </Row>
            <Row className="mt-5">
                {!login ?
                    <>
                        <Col xs={6}>
                            <Button className="me-1 col-12" variant="primary" type="button"
                                    onClick={toLogin}>로그인</Button>
                        </Col>
                        <Col xs={6}>
                            <Button className="col-12" variant="primary" type="button"
                                    onClick={toRegister}>회원가입</Button>
                        </Col>
                    </>
                    :
                    <Col xs={12}>
                        <Button xs={12} className="me-1 col-12" variant="primary" type="button"
                                onClick={logout}>로그아웃</Button>
                    </Col>}
            </Row>
            <Row className="mt-1">
                <Col xs={12}>
                    <button className="btn btn-primary col-12" onClick={toMenuList}>메뉴 보기</button>
                </Col>
            </Row>
        </>
    );
}

export default Home;
