import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules';
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {
FooterContainer, 
FooterWrap,
FooterLinksContainer, 
FooterLinksWrapper, 
FooterLinkItems, 
FooterLinkTitle, 
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink

} from './footerElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>

                 <FooterLinkItems> 
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                  </FooterLinkItems>

                  <FooterLinkItems> 
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                  </FooterLinkItems>

                  <FooterLinkItems> 
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                  </FooterLinkItems>

                  <FooterLinkItems> 
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">About us</FooterLink>
                  </FooterLinkItems>

              </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to="/" onClick={toggleHome}>
                        World Recipes
                  </SocialLogo>
                  <WebsiteRights>World Recipes ♠ {new Date().getFullYear()} All Rights reserved</WebsiteRights> 
                  <SocialIcons>
                      <SocialIconLink href="/" target="_blank"
                      aria-label="Facebook" >
                          <FaFacebook />
                      </SocialIconLink>

                      <SocialIconLink href="/" target="_blank"
                      aria-label="Instagram" >
                          <FaInstagram />
                      </SocialIconLink>

                      <SocialIconLink href="/" target="_blank"
                      aria-label="Youtube" >
                          <FaYoutube />
                      </SocialIconLink>

                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
