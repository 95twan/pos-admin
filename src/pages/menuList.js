import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom";
import GoBackButton from "../components/goBackButton";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_HOST} from "../lib/env";
import {deleteMenu} from "../lib/menuHandler";

const MenuList = () => {
    const navigate = useNavigate();

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        axios.get(`${API_HOST}/menus`)
            .then(res => {
                setMenus(res.data)
            })
            .catch(() => {

            })
    }, [])

    const toMenuDetail = (menuId) => {
        navigate(`/menu-detail/${menuId}`);
    }

    const toMenuAdd = () => {
        navigate('/menu-add')
    }

    const onClickDeleteMenu = (e, menu) => {
        e.stopPropagation();
        deleteMenu(menu.id, menu.imageUrl, () => {
            window.location.replace('/menu-list')
        })
    }

    const actions = (menu) => {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-primary me-2"
                    onClick={(e) => e.stopPropagation()}>
                    품절처리
                </button>
                <button
                    type="button"
                    className="btn btn-success me-2"
                    onClick={(e) => e.stopPropagation()}>
                    숨기기
                </button>
                <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={(e) => onClickDeleteMenu(e, menu)}>
                    삭제
                </button>
            </>
        )
    }

    return (
        <>
            <GoBackButton goBackUrl={'/'}/>
            <Row className="mt-4">
                <Col xs={12}>
                    <Table hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>메뉴</th>
                            <th>가격</th>
                            <th>재고</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {menus.map(menu => (
                            <tr key={menu.id} role="button" onClick={() => toMenuDetail(menu.id)}>
                                <th>{menu.id}</th>
                                <td>{menu.name}</td>
                                <td>{menu.price.toLocaleString('ko-KR')}원</td>
                                <td>{menu.stock.toLocaleString('ko-KR')}개</td>
                                <td>
                                    {actions(menu)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Button variant="primary" type="button" onClick={toMenuAdd}>메뉴 추가</Button>
                </Col>
            </Row>
        </>
    );
};

export default MenuList;
