import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { Product } from '../types';
import { CartContext } from '../context/CartContext';
import { formatPrice, generateStarRating, truncateText } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  
  return (
    <Card>
      <Link to={`/products/${product.id}`}>
        <ImageContainer>
          <ProductImage src={product.image} alt={product.name} />
          <ProductCategory>{product.category}</ProductCategory>
        </ImageContainer>
        
        <ProductContent>
          <ProductName>{truncateText(product.name, 25)}</ProductName>
          
          <RatingContainer>
            <Stars>{generateStarRating(product.rating)}</Stars>
            <Rating>{product.rating.toFixed(1)}</Rating>
          </RatingContainer>
          
          <ProductDescription>
            {truncateText(product.description, 60)}
          </ProductDescription>
          
          <PriceRow>
            <ProductPrice>{formatPrice(product.price)}</ProductPrice>
            <AddToCartButton onClick={handleAddToCart}>
              <FaShoppingCart />
              <span>Add</span>
            </AddToCartButton>
          </PriceRow>
        </ProductContent>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ProductCategory = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--primary-color);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const ProductContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: var(--text-color);
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Stars = styled.div`
  color: #f39c12;
  font-size: 0.8rem;
`;

const Rating = styled.span`
  color: var(--dark-gray);
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProductDescription = styled.p`
  color: var(--dark-gray);
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--primary-color);
`;

const AddToCartButton = styled.button`
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #27ae60;
  }
`;

export default ProductCard; 