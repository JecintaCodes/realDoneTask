import styled from "styled-components"
// import CardProps from "../reUse/CardProps"
import CardProps from "../Components/reUse/CardProps"
import {BsArrowRight} from "react-icons/bs"
import img from "../assets/building/cuild985.jpg"
import img1 from "../assets/building/628.jpg"
import img2 from "../assets/building/972.jpg"
import img3 from "../assets/building/1147.jpg"
import img4 from "../assets/building/974.jpg"
import img5 from "../assets/building/970.jpg"
import img6 from "../assets/building/671.jpg"
import img7 from "../assets/building/677.jpg"
import img8 from "../assets/building/672.jpg"
import img9 from "../assets/building/681.jpg"
import img10 from "../assets/building/628.jpg"
import img11 from "../assets/building/692.jpg"
import img12 from "../assets/building/1063.jpg"
import img13 from "../assets/building/1023.jpg"
import img14 from "../assets/building/1020.jpg"
import img15 from "../assets/building/1019.jpg"
import img16 from "../assets/building/996.jpg"
import img17 from "../assets/building/975.jpg"


const Landing = () =>{
    return(
        <div>
        <Container>
        <Main>

        <Text>Hey there, Onyemaobi</Text>
        <Border>

        <Get>
       Get proposals from the most relevant sellers
   <div>Simply create a project brief and let </div>
        </Get>

        <Create>Create a Brief</Create>

        </Border>

        <Borders>
       <Texts>
       <BigText>Here's what you need for SEO </BigText>
       <SmallText>View Checklist</SmallText>
       </Texts>
        <Boxes>
        <Box>Keyword Reaserch</Box>
        <Box>Search Engine Optimization</Box>
        <Box>Articles and Bolg post</Box>
        <Box>website Conteiner</Box>
        </Boxes>
      
        </Borders>

        <CardHolder>
        <CardProps
        directed="Continue browsing"
        icon={BsArrowRight}
        img={img}
        img1={img}
        userName="casey bumpsteed"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img1}
        img1={img1}
        userName="Jecinta Okoro"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img11}
        img1={img11}
        userName="Emmanuel Richard"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img2}
        img1={img2}
        userName="Austin Destiny"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img10}
        img1={img10}
        userName="Lizzy Uche"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img3}
        img1={img3}
        userName="Elizabeth Anthony"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img9}
        img1={img4}
        userName="Blessing Iwuchukwu"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img4}
        img1={img4}
        userName="Osinachi Madu"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img8}
        img1={img8}
        userName="Godswill Wisdom"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img5}
        img1={img5}
        userName="Onyedikachi Odinaka"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img7}
        img1={img7}
        userName="Somto Logic"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img6}
        img1={img6}
        userName="Akinola Popoola"
        description="I will write SEO optimized food blogs and content"
        />
        </CardHolder>
        <Borderss>
        <CardProps
        img={img17}
        img1={img17}
        userName="Amidat Joseph"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img12}
        img1={img12}
        userName="Joeseph Wisdom"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img16}
        img1={img16}
        userName="Franklyn Travis"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img14}
        img1={img14}
        userName="Okus Francis"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img15}
        img1={img15}
        userName="Chuka Peter"
        description="I will write SEO optimized food blogs and content"
        />
        <CardProps
        img={img13}
        img1={img13}
        userName="Peter Okus"
        description="I will write SEO optimized food blogs and content"
        />
        </Borderss>
        </Main>
        </Container>
        </div>
    )
}

export default Landing



const Borderss = styled.div`
width:100%;
min-height: 300px;
border: 1px solid #DADBDD;
padding: 10px;
display: flex;
flex-wrap: wrap;
gap: 80px;
`;
const CardHolder = styled.div`
margin-top: 30px;
gap: 80px;
display: flex;
flex-wrap: wrap;
`;
const Box = styled.div`
height: 40px;
width:250px;
background-color:#FFFFFF;
padding:7px;
font-family:Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:600;
font-size:16px;
line-height:24px;
color:#222325;
border: 1px solid black;
border-radius: 7px;
display: flex;
jusify-content: center;
align-items: center;

`;
const Boxes = styled.div`
display: flex;
gap: 62px;
margin-top:30px;
`;
const SmallText = styled.div`
font-family: signp
Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 400;
font-size:16px;
line-height:21px;
color:#404145;
text-decoration: underline;

`;
const BigText = styled.div`
font-family:Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-Weight:700;
font-size:20px
Line-hight:36px;
color:#222325;
`;
const Texts = styled.div`
display: flex;
justify-content: space-between;
margin-top: 25px;
`;
const Borders = styled.div`
border: 1px solid #DADBDD;
background-color:#FFFFFF;
min-height: 160px;
margin-top: 30px;
padding: 10px 10px;
border-radius:7px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;
const Create  = styled.div`
background-color:  #E4E5E7;
border-radius: 7px;
padding: 10px 10px;
font-family:Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-Weight:600;
font-size: 16px;
line-height:16px;
color:#404145;
:hover{
    cursor:Pointer;
    background-color: lightgrey;
    
}
`;
const Get = styled.div`
font-Family:"Helvetica Neue", Helvetica, Arial, sans-serif;
font-Weight:700;
font-size: 20px;
line-height:28px;
color:#222325;
display: flex;
flex-direction: column;
align-items: center;

div{  
font-Family:"Helvetica Neue", Helvetica, Arial, sans-serif;
font:Weight:400;
font-size:16px;
line-height:24px;
Color:#222325;
margin-top: 12px;
}

`;
const Border = styled.div`
border: 1px solid #DADBDD;
height: 100px;
margin-top: 30px;
padding: 10px;
border-radius:7px;
display: flex;
justify-content:space-between;
align-items: center;

`;
const Text = styled.div`
font-family:Macan, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 32px;
font-weight:700;
color:#222325
line-height: 45px;
margin-top: 30px;
`;
const Main = styled.div`
width: 95%;
`;
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid black;
`;