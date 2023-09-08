import styled from "styled-components"
import {BsArrowRight} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {AiTwotoneStar} from "react-icons/ai"
import {IoLogoUsd} from "react-icons/io"


export interface iCardProps{
    img?: any
    img1?: any
    userName?: string
    description?: string
    directed?: string
    icon?: any
    
}




const CardProps:React.FC<iCardProps> = ({img, img1, userName,description, directed, icon}) =>{
    return (
        <div>
        <Container>
        <Main>
        
        <Border>
        <Text>
        {directed}  
        <Icons>{icon}</Icons>
        </Text>
        <Card>
        <Image src={img1}/>
        <Icon/>
        <Circle>
        
        <Test>
        <Img src={img1}/>
    {userName}
        </Test>
        <Seo>
        Level 2
        </Seo>
        </Circle>

        <TextHolder>
        <Texts>
        {description}
        </Texts>
        <Num>
        <Star/>
        <div>5.0 
        </div>
        <span>(67)</span>
        </Num>
        <From>
        From
        <Sign/>
        20
        </From>
        </TextHolder>
        </Card>
        </Border>
        </Main>
        </Container>
        </div>
    )
}

export default CardProps


const Sign = styled(IoLogoUsd)``;
const From = styled.div`

font-family::Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:700;
font-size:16px;
line-height:24px;
color:#222325;
display: flex;
align-items: center;
`;
const Star = styled(AiTwotoneStar)``;
const Num = styled.div`
font-family:Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:700;
font-size:14px;
margin-top: 10px;
line-height:21px;
color:#222325;
display: flex;
align-items: center;
`;
const Texts = styled.div`
font-family:Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:600;
font-size:16px;
line-height:24px;
margin-top: 15px;
color:#62646a;

:hover{
    text-decoration: underline;
    cursor: pointer;
}
`;
const TextHolder = styled.div``;
const Seo = styled.div`
line-height:21px;
color:#404145;
font-size: 14px;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:600;
margin-top: 20px;
`;
const Test = styled.div`
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:400;
font-size:16px;
line-height:24px;
color:#62646a;
display: flex;
justify-content: center; 
align-items: center;
gap: 20px;
`;
const Img = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
background-color:green;
object-fit: cover;
transition: all 350ms;;
overflow: hidden;
:hover{
    cursor:pointer;
    transform:scale(1.1);
}
`;
const Circle = styled.div`
display: flex;
justify-content: space-between; 
align-items: center;
margin-top: 10px;
gap: 20px;
`;
const Icon = styled(AiOutlineHeart)`
position: absolute;
top:0;
background-color: green;


`;
const Image = styled.img`
width: 310px;
height:200px;
object-fit: cover;
border-radius: 7px;
position: relative;
transition: all 350ms;
overflow: hidden;
:hover{
    cursor:pointer;
    transform:scale(1.1);
}
`;
const Card = styled.div`
margin: top: 25px;
width: 310px;
height:300px;
padding: 10px;
over-flow: hidden;
position: relative;
transiton: all 350ms;
:hover{
    cursor: pointer;
    img{
        transform: scale(1.1);
    }
}
`;
const Icons = styled(BsArrowRight)`
margin-top:7px;
margin-left:15px;

`;
const Text = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
font-family:Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
fony-weight:700;
font-size:20px;
line-height:26px;
color:#404145;
`;
const Border = styled.div`
border: 1px solid #DADBDD;
height: 500px;
padding: 10px 10px;
`;
const Main = styled.div`
width: 100%;
border-radius: 7px;
`;
const Container = styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;
`;