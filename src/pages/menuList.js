import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom";
import GoBackButton from "../components/goBackButton";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_HOST} from "../lib/env";

const MenuList = () => {
    const navigate = useNavigate();

    const [menus, setMenus] = useState([
        {
            id: 1,
            name: "싸이버거",
            price: 5900,
            stock: 999
        },
        {
            id: 2,
            name: "불고기버거",
            price: 4900,
            stock: 764
        }
    ])

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

    const actions = (
        <>
            <button type="button" className="btn btn-primary me-2">품절처리</button>
            <button type="button" className="btn btn-success me-2">숨기기</button>
            <button type="button" className="btn btn-danger me-2">삭제</button>
        </>
    )

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
                                    {actions}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Button variant="primary" type="button">메뉴 추가</Button>
                </Col>
            </Row>
        </>
    );
};

export default MenuList;
