import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react"
import GoBackButton from "../components/goBackButton";
import axios from "axios";
import {API_HOST} from "../lib/env";
import usePromise from "../lib/usePromise";

const MenuDetail = () => {
    const {menuId} = useParams()
    const [readOnly, setReadOnly] = useState(true);
    const [menu, setMenu] = useState({});
    const [categories, setCategories] = useState([]);
    const [loading, response, error] = usePromise(() => {
        return axios.get(`${API_HOST}/menus/${menuId}`);
    }, [menuId])


    useEffect(() => {
        axios.get(`${API_HOST}/categories`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(() => {

            })
    }, [])

    const onChange = (e) => {
        const {value, name} = e.target;
        setMenu({
            ...menu,
            [name]: value
        });
    }

    const navigate = useNavigate();

    const updateMenu = () => {
        setReadOnly(false);
    }

    const completeUpdate = () => {
        setReadOnly(true);
    }

    const deleteMenu = () => {
        navigate('/menu-list');
    }

    useEffect(() => {
        if (response) {
            console.log(response.data)
            setMenu(response.data)
        }
    }, [response])

    const setHidden = () => {
        setMenu({
            ...menu,
            hidden: !menu.hidden
        });
    }

    return (loading || !response || error ? null :
            <>
                <GoBackButton goBackUrl={'/menu-list'}/>
                <Row className="mt-4">
                    <Col xs={12}>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>이미지</Form.Label>
                            <img src={menu.imageUrl || ''} alt={menu.name}/>
                            <Form.Control type="file" disabled={readOnly}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>카테고리</Form.Label>
                            <Form.Select name="categoryId" value={menu.categoryId || ''} onChange={onChange}
                                         disabled={readOnly}>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>메뉴</Form.Label>
                            <Form.Control type="text" name="name" value={menu.name || ''} onChange={onChange}
                                          readOnly={readOnly}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>가격</Form.Label>
                            <Form.Control type="text" name="price" value={menu.price || ''} onChange={onChange}
                                          readOnly={readOnly}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="additional-price">
                            <Form.Label>추가 가격</Form.Label>
                            <Form.Control type="text" name="additionalPrice" value={menu.additionalPrice || 0}
                                          onChange={onChange} readOnly={readOnly}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="stock">
                            <Form.Label>재고</Form.Label>
                            <Form.Control type="text" name="stock" value={menu.stock || ''} onChange={onChange}
                                          readOnly={readOnly}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="hidden">
                            <Form.Label>메뉴 숨기기</Form.Label>
                            <Form.Switch>
                                <Form.Check.Input name="hidden" disabled={readOnly} checked={menu.hidden || false}
                                                  onChange={setHidden}/>
                            </Form.Switch>
                        </Form.Group>
                        <div>
                            {readOnly ?
                                <Button className="me-2" variant="primary" type="button" onClick={updateMenu}>메뉴
                                    수정</Button>
                                : <Button className="me-2" variant="primary" type="button"
                                          onClick={completeUpdate}>완료</Button>}
                            <Button variant="danger" type="button" onClick={deleteMenu}>메뉴 삭제</Button>
                        </div>
                    </Col>
                </Row>
            </>
    );
};

export default MenuDetail;
