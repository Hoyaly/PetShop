import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdOutlinePets } from "react-icons/md";
import '../css/Contact.css'
import Header from "./Header";
import Find from "./Find";
import Tabss from "./Tabss";
import { Row } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <>
            <Header />
            <Find />
            <Tabss />
            <h1 className="contactd">LIÊN HỆ VÀ ĐÁNH GIÁ CỦA KHÁCH HÀNG</h1>
            <h1 className="contactd">-----<MdOutlinePets />-----</h1>
            <div className='row-contact'>
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='img-contact' src="https://afamilycdn.com/fRhOWcbaG01Vd2ydvKbOwEYcba/Image/2016/06/loat-anh-trai-dep-the-gioi-chup-voi-meo-ban-gai-co-the-khong-co-nhung-meo-nhat-dinh-phai-nuoi-1-con_20160618113638497.jpg" />
                    <Card.Body>
                        <Card.Title>Đánh giá của Trâm Phạm</Card.Title>
                        <Card.Text>
                            Đội ngũ tư vấn chăm sóc khách hàng của PetShop làm mình thật sự hài lòng. Mình nhận bé Golden về được 1 tuần vì háu ăn nên em ấy nhặt nhạnh linh tinh ăn và dẫn đến tiêu chảy, khi ấy mình rất rối và gọi điện nhắn tin cho shop. Thật may mình gặp được 1 bạn nhân viên có kĩ năng chăm sóc cún tốt, bạn ấy chỉ thuốc và liều lượng dùng cho bé rất tận tình, chỉ 2 ngày mà cún đã khỏi hẳn rồi. Cảm ơn shop cảm ơn Nhung nhiều lắm nhé
                        </Card.Text>
                    </Card.Body>
                </Card> */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='img-contact' src="https://kynguyenlamdep.com/wp-content/uploads/2022/08/anh-trai-dep-va-meo.jpg" />
                    <Card.Body>
                        <Card.Title>Đánh giá của Phan Anh</Card.Title>
                        <Card.Text>
                            Sau khi lựa chọn khá nhiều trại mèo, đến cuối cùng thì cũng quyết định đón em ở PetShop. Vì uy tín cũng như chất lượng dịch vụ, và quả là không làm mình thất vọng. Mình cảm thấy rất hài lòng từ nhân viên tư vấn cũng như các bạn chăm sóc khách hàng, thực sự rất ưng ý . Với chất lượng này thì hoàn toàn xứng đáng 5* ++ luôn nha. Hi vọng trong tương lai mình sẽ đón thêm nhiều thành viên mới nữa
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='img-contact' src="https://kenh14cdn.com/2017/screen-shot-2017-12-03-at-104523-am-1512272821796.png" />
                    <Card.Body>
                        <Card.Title>Đánh giá của Thái Vũ</Card.Title>
                        <Card.Text>
                            Bạn cún đầu tiên mình chọn trong thời gian theo dõi sức khoẻ trước khi đưa đến tay khách hàng bị ốm, shop đã chủ động thông báo và khuyên mình nên chọn bạn cún khác. Mình rất ấn tượng và thiện cảm với hành động thể hiện trách nhiệm và uy tín này của shop. Bạn cún mình đón về rất kháu khỉnh, nói chung mình thấy hài lòng với chất lượng dịch vụ của shop. Đợi bạn cún mình lớn thêm mình sẽ quay lại mua thêm em để 2 bạn chơi với nhau cho đỡ buồn
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='img-contact' src="https://i.pinimg.com/736x/b1/8a/c5/b18ac5e4327e9f4c166295e7444db884.jpg" />
                    <Card.Body>
                        <Card.Title>Đánh giá của Nhật Quân</Card.Title>
                        <Card.Text>
                            Hôm nay đã 1 tháng hơn bạn cún về mới có dịp gửi feedback. Về bạn cún: xinh xắn khoẻ mạnh, lớn nhanh; ăn khoẻ và rất dễ ăn.Về phía PetShop: tôi rất cảm kích vì lần đầu mua; nên k biết lựa chọn nào tốt. Nhưng mọi thứ chỉnh chu nên quyết định chọn mua ở PetShop. Mọi thứ cần thận, tỉ mỉ và chu đáo đến tận bây giờ. Là khách hàng có nhu cầu và cần tham khảo nên mình quay lại để giúp các bạn có niềm tin từ khách hàng thực tế. Cảm ơn PetShop <FaHeart />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='img-contact' src="https://suckhoedoisong.qltns.mediacdn.vn/Images/thanhthuy/2020/06/03/xu-tri-khi-bi-cho-meo-can1591058702.jpg" />
                    <Card.Body>
                        <Card.Title>Đánh giá của Bích Ngọc</Card.Title>
                        <Card.Text>
                            Chưa bao giờ nuôi cún, nhưng qua nhà bạn chơi thấy đứa bạn nó có e cún xinh quá. Mình tự nhiên thấy thích thú và cảm thấy nuoi 1 e cún cũng rất hay. Hỏi bạn ấy được biết mua của PetShop shop thấy bạn ý gt mua của shop yên tâm lắm bảo hành đầy đủ cún đã được tiêm phòng rồi. Thế là quyết luôn phi thẳng qua shop đón bé samoyed về. Những ngày đầu bé còn nhát giờ nghịch và phá lắm. Cảm ơn shop nha.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <h1 className="contactd">Bạn cũng có thể đánh giá tại đây</h1>
            <h1 className="contactd">----- <MdOutlinePets />----- </h1>
            <div className='form-contact'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nhập email của bạn</Form.Label>
                    <Form.Control type="email" placeholder="Nhập email của bạn" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nhập đánh giá của bạn</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Button>Gửi</Button>
                </Form.Group>
            </Form>
            </div>
            



        </>

    )
}
export default Contact