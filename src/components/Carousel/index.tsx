import Carousel from 'react-bootstrap/Carousel';
import { Button } from './styles';
export default function CarouselMain() {
    const link = "https://api.whatsapp.com/send?phone=5581982687667&text=Ol%C3%A1%2C%20tudo%20bem%20Kennedy%3F%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20apartamento%20da%20direcional%20engenharia."

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ width: '100%' }}
                    src="/back.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={link}><Button>Mais informações</Button></a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    style={{ width: '100%' }}
                    src="/back.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={link}><Button>Mais informações</Button></a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    style={{ width: '100%' }}
                    src="/back.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={link}><Button>Mais informações</Button></a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}