import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../utils/data';
import PageContainer from '../components/PageContainer';

const HomePage: React.FC = () => {
  // Get featured products (high ratings)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  
  return (
    <div>
      <Hero />
      <PageContainer>
        <Section>
          <SectionHeader>
            <SectionTitle>Shop by Category</SectionTitle>
            <ViewAllLink to="/products">View All</ViewAllLink>
          </SectionHeader>
          
          <CategoriesGrid>
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </CategoriesGrid>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionTitle>Featured Products</SectionTitle>
            <ViewAllLink to="/products">View All</ViewAllLink>
          </SectionHeader>
          
          <ProductsGrid>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductsGrid>
        </Section>
        
        <BannerSection>
          <BannerContent>
            <BannerTitle>Summer Sale</BannerTitle>
            <BannerSubtitle>Up to 50% off on selected items</BannerSubtitle>
            <BannerButton to="/products">Shop Now</BannerButton>
          </BannerContent>
        </BannerSection>
        
        <Section>
          <SectionHeader>
            <SectionTitle>Why Choose Us</SectionTitle>
          </SectionHeader>
          
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>🚚</FeatureIcon>
              <FeatureTitle>Free Shipping</FeatureTitle>
              <FeatureText>Free shipping on all orders over $50</FeatureText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>⚡</FeatureIcon>
              <FeatureTitle>Fast Delivery</FeatureTitle>
              <FeatureText>Get your products within 2-3 business days</FeatureText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureTitle>Easy Returns</FeatureTitle>
              <FeatureText>30-day easy return policy</FeatureText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🛡️</FeatureIcon>
              <FeatureTitle>Secure Payment</FeatureTitle>
              <FeatureText>Your data is protected with us</FeatureText>
            </FeatureCard>
          </FeaturesGrid>
        </Section>
      </PageContainer>
    </div>
  );
};

const Section = styled.section`
  margin: 4rem 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--text-color);
  margin: 0;
`;

const ViewAllLink = styled(Link)`
  color: var(--primary-color);
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const BannerSection = styled.section`
  margin: 4rem 0;
  background-image: url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
  color: white;
  
  @media (max-width: 576px) {
    padding: 0 1.5rem;
  }
`;

const BannerTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 0.5rem;
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 0 0 1.5rem;
  max-width: 500px;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const BannerButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  width: fit-content;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: var(--text-color);
`;

const FeatureText = styled.p`
  margin: 0;
  color: var(--dark-gray);
`;

export default HomePage; 