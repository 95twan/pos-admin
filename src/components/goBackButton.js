import Col from "react-bootstrap/Col";
import {CgArrowLeft} from "react-icons/cg";
import Row from "react-bootstrap/Row";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const GoBackButton = ({goBackUrl}) => {
    const [iconColor, setIconColor] = useState('gray')

    const navigate = useNavigate();

    const goBack = () => {
        navigate(goBackUrl);
    }

    const onMouseOver = () => {
        setIconColor('black');
    }

    const onMouseOut = () => {
        setIconColor('gray');
    }

    return (
        <Row className="mt-2">
            <Col xs={12}>
                <CgArrowLeft size="32" color={iconColor} cursor="pointer" onClick={goBack}
                             onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>
            </Col>
        </Row>
    )
}

export default GoBackButton;
