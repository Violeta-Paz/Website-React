import React from 'react'
import { BiWorld } from "react-icons/bi";
import { GiChefToque } from "react-icons/gi";
import { Container,  FormContent, FormH1,  FormWrap, Icon, FormButton } from './welcomeElements'
import { useAuth } from '../context/authContext';


const Welcome = () => {

  const {user, logout, loading} = useAuth()
  console.log(user)


  const handleLogout = async() => {
    try{
      await logout()
    } catch (err){
      console.log(err)
    }
  }

  if (loading) return <h1>loading</h1>



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
                
                    <FormH1>Welcome  {user.email}</FormH1>
                <FormButton onClick={handleLogout}>
                  logout
                </FormButton>
            </FormContent>
        </FormWrap>
    </Container>
      
    </>
  )
}

export default Welcome