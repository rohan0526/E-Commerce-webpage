import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { categories } from '../utils/data';

interface FiltersProps {
  selectedCategory: string;
  priceRange: [number, number];
  selectedRating: number;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSelectedRating: (rating: number) => void;
  showFilters: boolean;
  toggleFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  priceRange,
  selectedRating,
  setSelectedCategory,
  setPriceRange,
  setSelectedRating,
  showFilters,
  toggleFilters
}) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const min = Number(e.target.value);
    setPriceRange([min, priceRange[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = Number(e.target.value);
    setPriceRange([priceRange[0], max]);
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating === selectedRating ? 0 : rating);
  };

  return (
    <FiltersContainer>
      <FiltersToggle onClick={toggleFilters}>
        <FaIcons.FaFilter />
        <span>Filters</span>
        <FaIcons.FaChevronDown style={{ transform: showFilters ? 'rotate(180deg)' : 'rotate(0)' }} />
      </FiltersToggle>

      {showFilters && (
        <FiltersContent>
          <FilterGroup>
            <FilterLabel>Category</FilterLabel>
            <CategorySelect 
              value={selectedCategory} 
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </CategorySelect>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Price Range</FilterLabel>
            <PriceInputs>
              <PriceInput
                type="number"
                placeholder="Min"
                value={priceRange[0] > 0 ? priceRange[0] : ''}
                onChange={handleMinPriceChange}
                min="0"
              />
              <PriceSeparator>-</PriceSeparator>
              <PriceInput
                type="number"
                placeholder="Max"
                value={priceRange[1] < Infinity ? priceRange[1] : ''}
                onChange={handleMaxPriceChange}
                min="0"
              />
            </PriceInputs>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Minimum Rating</FilterLabel>
            <StarsContainer>
              {[5, 4, 3, 2, 1].map(rating => (
                <StarRating 
                  key={rating} 
                  active={selectedRating >= rating}
                  onClick={() => handleRatingChange(rating)}
                >
                  <FaIcons.FaStar /> {rating}+
                </StarRating>
              ))}
            </StarsContainer>
          </FilterGroup>
        </FiltersContent>
      )}
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  border-radius: 8px;
  background-color: var(--background-color);
  box-shadow: var(--card-shadow);
  overflow: hidden;
`;

const FiltersToggle = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--background-color);
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1rem;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: var(--light-gray);
  }
`;

const FiltersContent = styled.div`
  padding: 1rem;
  border-top: 1px solid var(--mid-gray);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: var(--text-color);
  font-size: 0.9rem;
`;

const CategorySelect = styled.select`
  padding: 0.5rem;
  border: 1px solid var(--mid-gray);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const PriceInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PriceInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid var(--mid-gray);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  
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

const PriceSeparator = styled.span`
  color: var(--dark-gray);
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

interface StarRatingProps {
  active: boolean;
}

const StarRating = styled.button<StarRatingProps>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  border: 1px solid ${props => props.active ? '#f39c12' : 'var(--mid-gray)'};
  background-color: ${props => props.active ? 'rgba(243, 156, 18, 0.1)' : 'var(--background-color)'};
  color: ${props => props.active ? '#f39c12' : 'var(--text-color)'};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.85rem;
  
  svg {
    color: #f39c12;
  }
  
  &:hover {
    border-color: #f39c12;
  }
`;

export default Filters; 