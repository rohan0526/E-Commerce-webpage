import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <FadeIn>
          <HeroTitle>Welcome to <Highlight>ShopHaven</Highlight></HeroTitle>
        </FadeIn>
        <SlideUp delay={0.2}>
          <HeroSubtitle>
            Discover amazing products at unbeatable prices
          </HeroSubtitle>
        </SlideUp>
        <SlideUp delay={0.4}>
          <HeroText>
            From electronics to fashion, we've got everything you need in one place.
            Enjoy free shipping, easy returns, and excellent customer service.
          </HeroText>
        </SlideUp>
        <SlideUp delay={0.6}>
          <HeroButtons>
            <PrimaryButton to="/products">Shop Now</PrimaryButton>
            <SecondaryButton to="/products?category=Electronics">Featured</SecondaryButton>
          </HeroButtons>
        </SlideUp>
      </HeroContent>
      <HeroImageContainer>
        <SlideIn>
          <HeroImage src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Shopping" />
        </SlideIn>
      </HeroImageContainer>
    </HeroContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FadeIn = styled.div`
  animation: ${fadeIn} 0.8s ease forwards;
`;

interface SlideProps {
  delay: number;
}

const SlideUp = styled.div<SlideProps>`
  opacity: 0;
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: ${props => props.delay}s;
`;

const SlideIn = styled.div`
  opacity: 0;
  animation: ${slideIn} 0.8s ease forwards;
  animation-delay: 0.3s;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Highlight = styled.span`
  color: var(--primary-color);
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: var(--dark-gray);
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 0.8rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const SecondaryButton = styled(Link)`
  padding: 0.8rem 2rem;
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  height: 100%;
  
  @media (max-width: 768px) {
    grid-row: 1;
    max-height: 300px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

export default Hero; 