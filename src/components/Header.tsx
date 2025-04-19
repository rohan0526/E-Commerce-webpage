import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { totalItems, toggleCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
  
  return (
    <StyledHeader>
      <div className="container">
        <HeaderContent>
          <Logo to="/">ShopHaven</Logo>
          
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
          </Nav>
          
          <SearchForm onSubmit={handleSearchSubmit}>
            <SearchInput 
              type="text" 
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchButton type="submit">
              <FaIcons.FaSearch />
            </SearchButton>
          </SearchForm>
          
          <HeaderActions>
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'light' ? <FaIcons.FaMoon /> : <FaIcons.FaSun />}
            </ThemeToggle>
            
            <CartButton onClick={toggleCart}>
              <FaIcons.FaShoppingCart />
              {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
            </CartButton>
          </HeaderActions>
        </HeaderContent>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: var(--background-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color var(--transition-speed);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    margin: 0.5rem 0;
    width: 100%;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const SearchForm = styled.form`
  display: flex;
  flex: 1;
  max-width: 400px;
  
  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    max-width: 100%;
    margin-top: 0.5rem;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid var(--mid-gray);
  border-right: none;
  border-radius: 4px 0 0 4px;
  background-color: var(--light-gray);
  color: var(--text-color);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: 1px solid var(--primary-color);
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const CartButton = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--primary-color);
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header; 