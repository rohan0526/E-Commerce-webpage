import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterTitle>ShopHaven</FooterTitle>
            <FooterText>
              Your one-stop destination for all your shopping needs. Quality products, great prices, and excellent service.
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/checkout">Checkout</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Connect With Us</FooterTitle>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaIcons.FaFacebook />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaIcons.FaTwitter />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaIcons.FaInstagram />
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaIcons.FaGithub />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <CopyrightText>&copy; {currentYear} ShopHaven. All rights reserved.</CopyrightText>
        </FooterBottom>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--light-gray);
  padding: 3rem 0 1.5rem;
  transition: background-color var(--transition-speed);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const FooterText = styled.p`
  color: var(--dark-gray);
  line-height: 1.6;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: var(--dark-gray);
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--dark-gray);
  font-size: 1.2rem;
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterBottom = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid var(--mid-gray);
  text-align: center;
`;

const CopyrightText = styled.p`
  color: var(--dark-gray);
  font-size: 0.9rem;
`;

export default Footer; 