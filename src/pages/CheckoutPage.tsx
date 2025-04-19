import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaShoppingBag } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import PageContainer from '../components/PageContainer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const CheckoutPage: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);
      clearCart();
      
      // Redirect to home after success
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }, 2000);
  };
  
  if (cartItems.length === 0 && !orderSuccess) {
    return (
      <PageContainer>
        <EmptyCart>
          <EmptyCartIcon>
            <FaShoppingBag />
          </EmptyCartIcon>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <ShopNowButton to="/products">Shop Now</ShopNowButton>
        </EmptyCart>
      </PageContainer>
    );
  }
  
  if (orderSuccess) {
    return (
      <PageContainer>
        <SuccessContainer>
          <CheckmarkContainer>
            <SuccessCheckmark />
          </CheckmarkContainer>
          <SuccessTitle>Order Placed Successfully!</SuccessTitle>
          <SuccessMessage>
            Thank you for your purchase. Your order has been placed successfully.
            We'll send you a confirmation email shortly.
          </SuccessMessage>
          <SuccessInfo>You will be redirected to the homepage shortly...</SuccessInfo>
        </SuccessContainer>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <CheckoutContainer>
        <PageTitle>Checkout</PageTitle>
        
        <CheckoutLayout>
          <FormSection>
            <Form onSubmit={handleSubmit}>
              <FormTitle>Shipping Information</FormTitle>
              
              <FormRow>
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormInput 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormInput 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <FormLabel>Email Address</FormLabel>
                <FormInput 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Address</FormLabel>
                <FormInput 
                  type="text" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <FormLabel>City</FormLabel>
                  <FormInput 
                    type="text" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>State</FormLabel>
                  <FormInput 
                    type="text" 
                    name="state" 
                    value={formData.state} 
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>ZIP Code</FormLabel>
                  <FormInput 
                    type="text" 
                    name="zipCode" 
                    value={formData.zipCode} 
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormTitle>Payment Information</FormTitle>
              
              <FormGroup>
                <FormLabel>Name on Card</FormLabel>
                <FormInput 
                  type="text" 
                  name="cardName" 
                  value={formData.cardName} 
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Card Number</FormLabel>
                <FormInput 
                  type="text" 
                  name="cardNumber" 
                  value={formData.cardNumber} 
                  onChange={handleChange}
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <FormLabel>Expiration Date</FormLabel>
                  <FormInput 
                    type="text" 
                    name="expDate" 
                    value={formData.expDate} 
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>CVV</FormLabel>
                  <FormInput 
                    type="text" 
                    name="cvv" 
                    value={formData.cvv} 
                    onChange={handleChange}
                    placeholder="123"
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <SubmitButton type="submit" disabled={isProcessing}>
                {isProcessing ? 'Processing...' : `Place Order (${formatPrice(totalPrice)})`}
              </SubmitButton>
            </Form>
          </FormSection>
          
          <OrderSummary>
            <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
            
            <OrderItems>
              {cartItems.map(item => (
                <OrderItem key={item.product.id}>
                  <OrderItemImage src={item.product.image} alt={item.product.name} />
                  <OrderItemInfo>
                    <OrderItemName>{item.product.name}</OrderItemName>
                    <OrderItemPrice>
                      {formatPrice(item.product.price)} x {item.quantity}
                    </OrderItemPrice>
                  </OrderItemInfo>
                  <OrderItemTotal>
                    {formatPrice(item.product.price * item.quantity)}
                  </OrderItemTotal>
                </OrderItem>
              ))}
            </OrderItems>
            
            <OrderTotals>
              <OrderTotal>
                <span>Subtotal:</span>
                <span>{formatPrice(totalPrice)}</span>
              </OrderTotal>
              <OrderTotal>
                <span>Shipping:</span>
                <span>{formatPrice(0)}</span>
              </OrderTotal>
              <OrderTotal>
                <span>Tax:</span>
                <span>{formatPrice(totalPrice * 0.07)}</span>
              </OrderTotal>
              <OrderTotalFinal>
                <span>Total:</span>
                <span>{formatPrice(totalPrice + (totalPrice * 0.07))}</span>
              </OrderTotalFinal>
            </OrderTotals>
          </OrderSummary>
        </CheckoutLayout>
      </CheckoutContainer>
    </PageContainer>
  );
};

const CheckoutContainer = styled.div`
  padding-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;

const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--mid-gray);
  color: var(--text-color);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color);
`;

const FormInput = styled.input`
  padding: 0.8rem;
  border: 1px solid var(--mid-gray);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;
  
  &:hover:not(:disabled) {
    background-color: #2980b9;
  }
  
  &:disabled {
    background-color: var(--mid-gray);
    cursor: not-allowed;
  }
`;

const OrderSummary = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 2rem;
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

const OrderSummaryTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--mid-gray);
  color: var(--text-color);
`;

const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 0.5rem;
`;

const OrderItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const OrderItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
`;

const OrderItemInfo = styled.div`
  flex: 1;
`;

const OrderItemName = styled.p`
  margin: 0 0 0.3rem;
  font-weight: 500;
  color: var(--text-color);
`;

const OrderItemPrice = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--dark-gray);
`;

const OrderItemTotal = styled.span`
  font-weight: 500;
  color: var(--text-color);
`;

const OrderTotals = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-top: 1px solid var(--mid-gray);
  padding-top: 1.5rem;
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-color);
`;

const OrderTotalFinal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  padding-top: 0.8rem;
  border-top: 1px dashed var(--mid-gray);
  color: var(--text-color);
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-color);
`;

const EmptyCartIcon = styled.div`
  font-size: 4rem;
  color: var(--mid-gray);
  margin-bottom: 1rem;
`;

const ShopNowButton = styled(Link)`
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const checkmark = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  animation: ${scaleUp} 0.5s ease-in-out;
`;

const CheckmarkContainer = styled.div`
  margin-bottom: 2rem;
`;

const SuccessCheckmark = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #27ae60;
  stroke-miterlimit: 10;
  box-shadow: 0 0 0 #27ae60;
  animation: ${scaleUp} 0.5s ease-in-out;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #27ae60;
    border-radius: 50%;
    top: 0;
    left: 0;
  }
  
  &:after {
    content: '';
    width: 25px;
    height: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    border-left: 4px solid white;
    border-bottom: 4px solid white;
    animation: ${checkmark} 0.3s ease-in-out 0.2s forwards;
  }
`;

const SuccessTitle = styled.h2`
  font-size: 2rem;
  color: #27ae60;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: var(--text-color);
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const SuccessInfo = styled.p`
  color: var(--dark-gray);
  font-size: 0.9rem;
`;

export default CheckoutPage; 