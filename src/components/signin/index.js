import React, {useState} from 'react'
import { BiWorld } from "react-icons/bi";
import { GiChefToque } from "react-icons/gi";
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './signinElements'
import { useAuth } from '../context/authContext';
import {  useNavigate } from 'react-router-dom';
const SignIn = () => {

  
  const navigate = useNavigate();
  const {login, loginWithGoogle} = useAuth();
  const [error, setError] = useState();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = ({target: {name, value }}) => {
    setUser({...user,[name]:value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/welcome')
    } catch (error){
      setError(error.message);
    }
    
  }

  const handleGoogleSignin = async() => {
    try{

      await loginWithGoogle();
      navigate('/welcome');

    }catch(err){
      setError(err.message)
    }
  }

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/"> 
            
            <BiWorld style={{"fontSize": "25px"}} />
              World
             <GiChefToque style={{"fontSize": "25px"}}/>
              Recipes 
            </Icon>
            <FormContent>
              
                <Form action='#' onSubmit={handleSubmit}>
                  
                    <FormH1>Signin in your account</FormH1>
                    <FormLabel htmlFor='for' >Email</FormLabel>
                    <FormInput type="email" name="email" onChange={handleChange} required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type="password" name="password" onChange={handleChange} required/>
                    <FormButton type='submit' >Continue</FormButton>
                    <br></br>
                    <FormButton onClick={handleGoogleSignin}>SignIn Google</FormButton>
                    <Text>Forgot password</Text>
                    {error && <p>{error}</p>}
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
      
    </>
  )
}

export default SignIn
