import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { IoPersonSharp } from "react-icons/io5";
import '../css/Find.css';
import Button from 'react-bootstrap/Button';

const Find = () => {
    return (
        <div className='control'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuOhX_kvwl5ao-TL3dZ_-uRmqIxXS8ukh4x4FvJ39ZZj4HRJufkQDQIVf86J-PwiXZ88&usqp=CAU" style={{ width: '100px', height: '100px' }}></img>
            <div className="huhu">
                <Form.Control
                    placeholder="Nhập tìm kiếm của bạn"
                    aria-label="Nhập tìm kiếm của bạn"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary">Tìm</Button>
            </div>
            <div className='dangnhap'>
                <Button variant="outline-dark">
                    <IoPersonSharp />Đăng nhập
                </Button>
            </div>
        </div>
    )
}
export default Find;