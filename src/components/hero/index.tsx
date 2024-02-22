import * as S from "./styles"

import hero from "../../assets/hero.png"
import Button from "../button"


const Hero = () => (
    <>
        <S.Container>
            <div className="caption">
                <h1>Serenity is<br />inside you, feel it!</h1>
                <p className="opn">Children of the sun, see your time has just begun, searching for your ways, through adventures every day.</p>
                <Button title={"teste"} type={"button"}>Practice With Us</Button>
                <a href="#" className="link">View Programs</a>
            </div>
            <S.Hero>
                <img src={hero} alt="" />
            </S.Hero>
        </S.Container>
    </>
)

export default Hero