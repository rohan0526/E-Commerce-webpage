import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <StyledCategoryCard to={`/products?category=${encodeURIComponent(category.name)}`}>
      <CategoryImage src={category.image} alt={category.name} />
      <CategoryOverlay />
      <CategoryName>{category.name}</CategoryName>
    </StyledCategoryCard>
  );
};

const StyledCategoryCard = styled(Link)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 180px;
  display: block;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CategoryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
`;

const CategoryName = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

export default CategoryCard;

 