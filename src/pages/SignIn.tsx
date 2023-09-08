import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from 'react-router-dom'
import { signinUser } from '../utils/authApi'
import { useDispatch } from 'react-redux'
import { signUserGlobal } from '../global/globalState'
const SignIn = () =>{

    const navigate = useNavigate()
    const schema = yup.object({
       
        email:yup.string().required(),
        password:yup.string().required(),
       
       
    })
    
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({
        resolver: yupResolver(schema)
    })
    
    
    const onSubmit = handleSubmit(async (res: any) => {
        const {  email, password } = res
    
        signinUser({  email, password}).then(() => {
            navigate("/sign-in")
        })
    
        // reset()
        // navigate("/sign-in")
    })
    return(
        <div>
        <Container>
        <Main>
        <MainHolder>

        <CircleHolder>
        <Text>SignIn</Text>
        </CircleHolder>

        <InputHolder>

        <EmailHolder>
        <Input placeholder="Email" type="email"/>
        <Error>input email</Error>
        </EmailHolder>
    
        
        <PasswordHolder>
        <Input placeholder="Password" type="password"/>
        <Error>input password</Error>
        </PasswordHolder>
        
        </InputHolder>
        
        <ButtonHolder>
        <Button>SignIn</Button>
      <Link style={{textDecoration: "none"}}
       to="/sign-up">
      <Buttons>SignUp?</Buttons>
      </Link>

        </ButtonHolder>
        </MainHolder>
        </Main>
        </Container>
        </div>
    )
}

export default SignIn



const Error = styled.div`
font-size: 15px;
color:#2D5E58;
// color: white;
position: absolute;
right:0;
padding: 5px;
`;

const Buttons = styled.div`
font-size: 15px;
font-weight: 500;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`;
const Button = styled.div`
font-size: 17px;
font-weight: 500;
background-color: #2D5E58;
border-radius: 5px;
width: 200px;
 height: 20px;
 color: white;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;

`;
const ButtonHolder = styled.div`
margin-top: 30px;
`;
const ConfirmHolder = styled.div`
margin-top: 20px;
width: 300px;
height: 50px;
background-color: #FDFEFF;
border-radius: 7px;
`;
const PasswordHolder = styled.div`
margin-top: 20px;
width: 300px;
height: 50px;
background-color: #FDFEFF;
border-radius: 7px;
`;
const EmailHolder = styled.div`
margin-top: 20px;
width: 300px;
height: 50px;
background-color: #FDFEFF;
border-radius: 7px;
`;
const Input = styled.input`
width:250px;
height: 40px;
border: none;
outline: none;
margin-top: 10px;
border-radius: 7px;


::placeholder{
    color: #2D5E58;
    font-size: 17px;
    font-weight: 600;
    padding:10px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    
}
`;
const NameHolder = styled.div`
width: 300px;
height: 50px;
background-color: #FDFEFF;
border-radius: 7px;
`;
const InputHolder = styled.div`
margin-top: 20px;
`;
const Profile = styled.div`
color: white;
font-size: 15px;
display: flex;
justify-content: center;
font-weight: 600;
margin-top: 15px;
`;
const Circle = styled.div`
height:150px;
width: 150px;
border-radius: 50%;
border: 1px solid white;
margin-top: 50px;
display: flex;
justify-content: center;
// align-items: center;
`;
const Text = styled.div`
color: white;
font-size: 25px;
font-weight: 700;
display: flex;
justify-content: center;
`;
const CircleHolder = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;
const MainHolder = styled.div`
width: 350px;
min-height: 200px;
background-color: #1DBF73;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 3px;
padding: 50px;
margin-top:50px;
position: relative;
`;
const Main = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;


`;
const Container = styled.div`
width: 100%;
height: 100%;
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
`;