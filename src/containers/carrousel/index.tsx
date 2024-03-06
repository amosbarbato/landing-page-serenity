import { useState } from "react";

import * as S from "./styles"
import prev from "../../assets/Vector1.png";
import next from "../../assets/Vector.png";


const carouselData = [
    {
        imageUrl: '../src/assets/model1.png',
        text: 'Practicing yoga with Serenity changed my life!',
        model: 'Kate Castle',
        career: 'Model'
    },
    {
        imageUrl: '../src/assets/model2.png',
        text: 'Easy access to all yoga trainings. Yoga helped me become a better person',
        model: 'Paula Drake',
        career: 'Actor'
    },
    {
        imageUrl: '../src/assets/model3.png',
        text: 'Yoga is both attractive and highly adaptable. Thank you! Serenity.',
        model: 'Edith Hunt',
        career: 'Painter'
    }
]


const Carousel: React.FC = () => {
    const [active, setActive] = useState(0);

    const nextSlide = () => {
        setActive((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActive((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    return (
        <S.Container>
            {carouselData.map((slide, index) => (
                <S.Slide key={index} active={index === active}>
                    <img src={slide.imageUrl} alt={`Slide ${index}`} />
                    <div className="caption">
                        <div className="title">
                            <span>“</span>
                            <h2>{slide.text}</h2>
                        </div>
                        <p className="opn">
                            {slide.model} <br />
                            <span>{slide.career}</span>
                        </p>
                    </div>
                </S.Slide>
            ))}
            <S.Button onClick={prevSlide}><img src={prev} alt="Voltar" /></S.Button>
            <S.Button onClick={nextSlide}><img src={next} alt="Avançar" /></S.Button>
        </S.Container>
    );
}

export default Carousel