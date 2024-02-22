import * as S from "./styles"

import logo from "../../assets/SERENITY.svg"


const Nav = () => (
    <div className="container">
        <S.Container>
            <div className="logo">
                <img src={logo} alt="Serenity"/>
            </div>

            <nav className="navbar">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Classes</a></li>
                <li><a href="">Instructors</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Login</a></li>
                
            </nav>
        </S.Container>
    </div>
)

export default Nav