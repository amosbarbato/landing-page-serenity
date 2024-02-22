
import { ButtonContainer } from "./styles"

export type Props = {
    title: string
    type: 'button'
    onClick?: () => void
    children: string | string []
}

const Button = ({ title, type, onClick, children}: Props) => {
    return (
        <>
            <ButtonContainer 
                title={title}
                type={type}
                onClick={onClick}
            >
                {children}
            </ButtonContainer>
        </>
    )
}

export default Button