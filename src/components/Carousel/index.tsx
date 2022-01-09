import Carousel from 'react-bootstrap/Carousel';
import { Button } from './styles';
export default function CarouselMain() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ width: '100%' }}
                    src="/back.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Button>Mais informações</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    style={{ width: '100%' }}
                    src="/back.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Button>Mais informações</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    style={{ width: '100%' }}
                    src="/back.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Button>Mais informações</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}