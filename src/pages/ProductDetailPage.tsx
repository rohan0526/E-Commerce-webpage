import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { products } from '../utils/data';
import { Product } from '../types';
import { formatPrice, generateStarRating } from '../utils/formatters';
import ProductCard from '../components/ProductCard';
import PageContainer from '../components/PageContainer';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const productId = Number(id);
    const foundProduct = products.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products of same category
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== productId)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      // Add product to cart multiple times based on quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  if (loading) {
    return <Loading>Loading product...</Loading>;
  }
  
  if (!product) {
    return (
      <NotFound>
        <h2>Product Not Found</h2>
        <p>Sorry, the product you are looking for does not exist.</p>
        <BackLink to="/products">Back to Products</BackLink>
      </NotFound>
    );
  }
  
  return (
    <PageContainer>
      <BackButton onClick={() => navigate('/products')}>
        <FaIcons.FaArrowLeft /> Back to Products
      </BackButton>
      
      <ProductContainer>
        <ProductImageContainer>
          <ProductImage src={product.image} alt={product.name} />
        </ProductImageContainer>
        
        <ProductInfo>
          <ProductCategory>{product.category}</ProductCategory>
          <ProductName>{product.name}</ProductName>
          
          <RatingContainer>
            <Rating>
              {[...Array(5)].map((_, index) => (
                <FaIcons.FaStar
                  key={index}
                  color={index < Math.round(product.rating) ? '#FFD700' : '#e4e5e9'}
                />
              ))}
              <span>({product.rating}) - reviews</span>
            </Rating>
          </RatingContainer>
          
          <ProductPrice>{formatPrice(product.price)}</ProductPrice>
          
          <ProductDescription>{product.description}</ProductDescription>
          
          <AddToCartSection>
            <QuantityContainer>
              <QuantityLabel>Quantity:</QuantityLabel>
              <QuantityInput 
                type="number" 
                min="1" 
                value={quantity}
                onChange={handleQuantityChange}
              />
            </QuantityContainer>
            
            <AddToCartButton onClick={handleAddToCart}>
              <FaIcons.FaShoppingCart /> Add to Cart
            </AddToCartButton>
          </AddToCartSection>
        </ProductInfo>
      </ProductContainer>
      
      {relatedProducts.length > 0 && (
        <RelatedSection>
          <RelatedTitle>Related Products</RelatedTitle>
          <RelatedGrid>
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </RelatedGrid>
        </RelatedSection>
      )}
    </PageContainer>
  );
};

const Loading = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-color);
  font-size: 1.2rem;
`;

const NotFound = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-color);
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 0;
  margin-bottom: 2rem;
  font-weight: 500;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProductImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductCategory = styled.span`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  width: fit-content;
`;

const ProductName = styled.h1`
  font-size: 2rem;
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
  font-size: 1rem;
`;

const Rating = styled.span`
  color: var(--dark-gray);
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProductPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
`;

const ProductDescription = styled.p`
  line-height: 1.6;
  color: var(--dark-gray);
  margin: 1rem 0;
`;

const AddToCartSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityLabel = styled.label`
  font-weight: 500;
  color: var(--text-color);
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 0.5rem;
  border: 1px solid var(--mid-gray);
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
  
  /* Hide spinner for number inputs */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #27ae60;
  }
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const RelatedSection = styled.section`
  margin-top: 4rem;
`;

const RelatedTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export default ProductDetailPage; 