import React, {useState} from 'react'
import { BiWorld } from "react-icons/bi";
import { GiChefToque } from "react-icons/gi";
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './signupElements'
import { useAuth } from '../context/authContext';
import {  useNavigate } from 'react-router-dom';
import { Alert } from '../alert';
//estado de react usestate

const SignUp = () => {

  const navigate = useNavigate();
  const {signup} = useAuth();
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
     try{
      await signup(user.email, user.password)
      navigate('/welcome')
    } catch (error){
      setError(error.message);
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
                
                    <FormH1>SignUp in your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type="email" name='email'  onChange={handleChange} required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type="password" name='password' onChange={handleChange} required/>
                    <FormButton type='submit' >Continue</FormButton>
                    <Text>Forgot password</Text>
                    {error && <Alert message={error}/> }
                </Form>
                
            </FormContent>
        </FormWrap>
    </Container>
      
    </>
  )
}

export default SignUp