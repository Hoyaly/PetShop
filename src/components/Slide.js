import Carousel from 'react-bootstrap/Carousel';
import '../css/Slide.css'

const Slide = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img className='imgslide' src='https://bizweb.dktcdn.net/thumb/large/100/295/484/themes/853540/assets/slide-img2.png?1686063741983'/>
                    <Carousel.Caption>
                        <h1>PET SHOP</h1>
                        <p>Mua, bán, chăm sóc, hỗ trợ tư vấn nhiệt tình!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='imgslide' src='https://bizweb.dktcdn.net/100/295/484/themes/853540/assets/banner3_3.jpg?1686063741983'/>
                    <Carousel.Caption>
                        <h3>Mua đồ cho chó cưng của bạn nàooo!!</h3>
                        <p>Rất nheièu sản phẩm ưu đãi.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='imgslide' src='https://bizweb.dktcdn.net/100/295/484/themes/853540/assets/banner3_2.jpg?1686063741983'/>
                    <Carousel.Caption>
                        <h3>Cùng mua sắm cho bé mèo nhé!!</h3>
                        <p>
                            Bé mèo gấtt iu :v 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Slide;