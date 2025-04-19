import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import { products } from '../utils/data';
import { Product } from '../types';
import PageContainer from '../components/PageContainer';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(true);
  
  // Get search params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    if (searchParam) {
      setSearchTerm(searchParam);
    }
    
    setLoading(false);
  }, [searchParams]);
  
  // Filter products when filter state changes
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by rating
    if (selectedRating > 0) {
      result = result.filter(product => product.rating >= selectedRating);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, selectedRating, searchTerm]);
  
  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };
  
  if (loading) {
    return <Loading>Loading products...</Loading>;
  }
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>
          {selectedCategory 
            ? `${selectedCategory} Products`
            : searchTerm
              ? `Search results for "${searchTerm}"`
              : 'All Products'
          }
        </PageTitle>
        <ResultsCount>
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </ResultsCount>
      </PageHeader>
      
      <ProductsLayout>
        <FiltersColumn>
          <Filters
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            selectedRating={selectedRating}
            setSelectedCategory={setSelectedCategory}
            setPriceRange={setPriceRange}
            setSelectedRating={setSelectedRating}
            showFilters={showFilters}
            toggleFilters={toggleFilters}
          />
        </FiltersColumn>
        
        <ProductsColumn>
          {filteredProducts.length === 0 ? (
            <NoResults>
              <p>No products found matching your criteria.</p>
              <ResetButton onClick={() => {
                setSelectedCategory('');
                setPriceRange([0, Infinity]);
                setSelectedRating(0);
                setSearchTerm('');
              }}>
                Reset Filters
              </ResetButton>
            </NoResults>
          ) : (
            <ProductsGrid>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductsGrid>
          )}
        </ProductsColumn>
      </ProductsLayout>
    </PageContainer>
  );
};

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 0.5rem;
  color: var(--text-color);
`;

const ResultsCount = styled.p`
  color: var(--dark-gray);
  font-size: 0.9rem;
  margin: 0;
`;

const ProductsLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FiltersColumn = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ProductsColumn = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Loading = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-color);
  font-size: 1.2rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--dark-gray);
`;

const ResetButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  
  &:hover {
    background-color: #2980b9;
  }
`;

export default ProductsPage; 