// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Tabs.css';
import Home from './Home';
import Cards from './Cards';
import Header from './Header';
import Find from './Find';
// import { useHistory } from 'react-router-dom';

const Tabss = () => {
    return (
        <>
            {/* <Header /> */}
            <Nav className='navtab' variant="tabs" defaultActiveKey="/home">
                {/* <ul className='navtab'> */}
                {/* <Nav.Link eventKey="1" href="/">
            Trang chủ
            </Nav.Link> */}
                <Nav.Link eventKey="1" href="/">
                    Trang chủ
                </Nav.Link>
                <Nav.Link eventKey="1" href="/danhsach">
                    Danh sách
                </Nav.Link>
                <Nav.Link eventKey="1" href="/lienhe">
                    Liên hệ và đánh giá
                </Nav.Link>
                <Nav.Link eventKey="1" href="/giohang">
                    Giỏ hàng
                </Nav.Link>
                {/* <a href='/danhsach'>Danh sách</a>
            <a href='/lienhe'>Liên hệ</a> */}
                {/* </ul> */}
            </Nav>
        </>

    )
}
export default Tabss;
{/* <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 Tabs"
            >
                <Tab eventKey="profile" title="Trang chủ" >
                </Tab>
                <Tab eventKey="home" title="Danh sách">
                </Tab>
                <Tab eventKey="contact" title="Liên hệ">
                </Tab>
                <Tab eventKey="kinhnghiem" title="Kinh nghiệm">
                </Tab>
                <Tab eventKey="giohang" title="Giỏ hàng">
                </Tab>
            </Tabs> */}