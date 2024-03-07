import * as S from "./styles"

import hero from "../../assets/hero.png"
import Button from "../button"


const Hero = () => (
    <div className="container flex">
        <S.Container>
            <S.Details>
                <h1>Serenity is<br />inside you, feel it!</h1>
                <p className="opn">Children of the sun, see your time has just begun, searching for your ways, through adventures every day.</p>
                <Button title={"teste"} type={"button"}>Practice With Us</Button>
                <a href="#" className="link">View Programs</a>
            </S.Details>
            <S.Hero>
                <img src={hero} alt="" />
            </S.Hero>
        </S.Container>
    </div>
)

export default Hero