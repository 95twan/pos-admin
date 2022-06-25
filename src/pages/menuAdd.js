import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react"
import GoBackButton from "../components/goBackButton";
import axios from "axios";
import {API_HOST} from "../lib/env";
import {uploadImage} from "../lib/imageHandler";

const MenuAdd = () => {
    const [menu, setMenu] = useState({hidden: false});
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const [imageName, setImageName] = useState('')
    const [file, setFile] = useState('')

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

    const onChangeFile = (e) => {
        const file = e.target.files[0];
        setFile(file);
        setImageName(file.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImage(reader.result);
                resolve();
            }
        });
    }

    const setHidden = () => {
        setMenu({
            ...menu,
            hidden: !menu.hidden
        });
    }

    const addMenu = () => {
        uploadImage(file, imageName, (url) => {
            setMenu({
                ...menu,
                imageUrl: url
            })
        });

        if (!menu.imageUrl) return;

        if (!(menu.name && menu.categoryId && menu.price && menu.additionalPrice && menu.stock && (menu.hidden === true || menu.hidden === false))) {
            return alert("모든 데이터를 입력해주세요!");
        }

        axios.post(`${API_HOST}/menus`, menu, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                navigate(`/menu-detail/${res.data.id}`);
            }).catch(() => {

        })
    }

    return (
        <>
            <GoBackButton goBackUrl={'/menu-list'}/>
            <Row className="mt-4">
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>메뉴 이미지</Form.Label>
                        <div className="mb-2">
                            {image && <img src={image} alt={menu.name || ''}
                                           style={{width: "128px", height: "128px", objectFit: "contain"}}/>}
                        </div>
                        <Form.Control type="file" name="imageUrl" accept="image/*" onChange={onChangeFile}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>메뉴 카테고리</Form.Label>
                        <Form.Select name="categoryId" onChange={onChange}>
                            <option>메뉴 카테고리를 선택해 주세요</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>메뉴 이름</Form.Label>
                        <Form.Control type="text" name="name" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>메뉴 가격</Form.Label>
                        <Form.Control type="text" name="price" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="additional-price">
                        <Form.Label>세트 구성 시 추가금</Form.Label>
                        <Form.Control type="text" name="additionalPrice" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="stock">
                        <Form.Label>재고</Form.Label>
                        <Form.Control type="text" name="stock" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="hidden">
                        <Form.Label>메뉴 숨기기</Form.Label>
                        <Form.Switch>
                            <Form.Check.Input name="hidden" onChange={setHidden}/>
                        </Form.Switch>
                    </Form.Group>
                    <div>
                        <Button variant="primary" type="button" onClick={addMenu}>메뉴 추가</Button>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default MenuAdd;
