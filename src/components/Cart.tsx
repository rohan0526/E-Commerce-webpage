import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

const Cart: React.FC = () => {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalPrice 
  } = useContext(CartContext);

  return (
    <CartWrapper isOpen={isCartOpen}>
      <CartOverlay isOpen={isCartOpen} onClick={toggleCart} />
      
      <CartContent isOpen={isCartOpen}>
        <CartHeader>
          <CartTitle>Your Cart ({cartItems.length})</CartTitle>
          <CloseButton onClick={toggleCart}>
            <FaIcons.FaTimes />
          </CloseButton>
        </CartHeader>
        
        {cartItems.length === 0 ? (
          <EmptyCart>
            <p>Your cart is empty</p>
            <Link to="/products" onClick={toggleCart}>
              Continue shopping
            </Link>
          </EmptyCart>
        ) : (
          <>
            <CartItems>
              {cartItems.map(item => (
                <CartItem key={item.product.id}>
                  <CartItemImage src={item.product.image} alt={item.product.name} />
                  
                  <CartItemContent>
                    <CartItemName>{item.product.name}</CartItemName>
                    <CartItemPrice>{formatPrice(item.product.price)}</CartItemPrice>
                    
                    <CartItemActions>
                      <QuantityControl>
                        <QuantityButton onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                          <FaIcons.FaMinus />
                        </QuantityButton>
                        <QuantityValue>{item.quantity}</QuantityValue>
                        <QuantityButton onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                          <FaIcons.FaPlus />
                        </QuantityButton>
                      </QuantityControl>
                      
                      <RemoveButton onClick={() => removeFromCart(item.product.id)}>
                        <FaIcons.FaTrash />
                      </RemoveButton>
                    </CartItemActions>
                  </CartItemContent>
                </CartItem>
              ))}
            </CartItems>
            
            <CartFooter>
              <CartTotal>
                <span>Total:</span>
                <span>{formatPrice(totalPrice)}</span>
              </CartTotal>
              
              <CartActions>
                <ClearButton onClick={clearCart}>
                  Clear Cart
                </ClearButton>
                <CheckoutButton to="/checkout" onClick={toggleCart}>
                  Checkout
                </CheckoutButton>
              </CartActions>
            </CartFooter>
          </>
        )}
      </CartContent>
    </CartWrapper>
  );
};

interface CartProps {
  isOpen: boolean;
}

const CartWrapper = styled.div<CartProps>`
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  transition: visibility 0.3s ease;
`;

const CartOverlay = styled.div<CartProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const CartContent = styled.div<CartProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  background-color: var(--background-color);
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--mid-gray);
`;

const CartTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-color);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  gap: 1rem;
  text-align: center;
  
  p {
    color: var(--dark-gray);
    margin-bottom: 1rem;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--mid-gray);
`;

const CartItemImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
`;

const CartItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CartItemName = styled.h3`
  font-size: 1rem;
  margin: 0 0 0.5rem;
  color: var(--text-color);
`;

const CartItemPrice = styled.span`
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const CartItemActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  background: var(--light-gray);
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  font-size: 0.7rem;
  cursor: pointer;
  
  &:hover {
    background: var(--mid-gray);
  }
`;

const QuantityValue = styled.span`
  font-weight: 500;
  color: var(--text-color);
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--danger-color);
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    opacity: 0.8;
  }
`;

const CartFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid var(--mid-gray);
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-color);
`;

const CartActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ClearButton = styled.button`
  flex: 1;
  padding: 0.8rem;
  background: var(--light-gray);
  color: var(--text-color);
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: var(--mid-gray);
  }
`;

const CheckoutButton = styled(Link)`
  flex: 2;
  padding: 0.8rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #2980b9;
  }
`;

export default Cart; 