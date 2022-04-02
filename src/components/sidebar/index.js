import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarWrap, SidebarLink, SidebarRoute} from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink onClick={toggle} to="about">
                About
              </SidebarLink>
              <SidebarLink onClick={toggle} to="discover">
                Discover
              </SidebarLink>
              <SidebarLink onClick={toggle} to="services">
                Services
              </SidebarLink>
              <SidebarLink onClick={toggle} to="Sign Up">
                Sign Up
              </SidebarLink>
            </SidebarMenu>
            <SidebarWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SidebarWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
