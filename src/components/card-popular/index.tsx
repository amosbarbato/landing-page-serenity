import { CardContainer } from "./styles"


type Props = {
    title: string
    image: string
    author: string
}

const Card = ({
    title,
    image,
    author    
}: Props) => {

    return (
        <CardContainer>
            <img src={image} alt={title} />
            <h5 className="opn">{title}</h5>
            <p className="opn">{author}</p>
        </CardContainer>
    )
}

export default Card
