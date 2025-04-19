import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    rating: 4.5,
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.'
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    rating: 4.8,
    description: 'Latest smartphone with 6.7" display, 128GB storage, and triple camera system.'
  },
  {
    id: 3,
    name: 'Laptop',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    rating: 4.7,
    description: 'Powerful laptop with 16GB RAM, 512GB SSD, and dedicated graphics card.'
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    rating: 4.2,
    description: 'Smart watch with fitness tracking, heart rate monitoring, and GPS.'
  },
  {
    id: 5,
    name: 'Cotton T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Clothing',
    rating: 4.1,
    description: 'Comfortable cotton t-shirt available in multiple colors and sizes.'
  },
  {
    id: 6,
    name: 'Denim Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Clothing',
    rating: 4.3,
    description: 'Classic denim jeans with straight fit and durable fabric.'
  },
  {
    id: 7,
    name: 'Coffee Maker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1606483956061-46a898dce538?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Home & Kitchen',
    rating: 4.6,
    description: 'Programmable coffee maker with 12-cup capacity and built-in grinder.'
  },
  {
    id: 8,
    name: 'Blender',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Home & Kitchen',
    rating: 4.0,
    description: 'High-speed blender for smoothies, soups, and more with multiple speed settings.'
  },
  {
    id: 9,
    name: 'Bestselling Novel',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Books',
    rating: 4.9,
    description: 'Award-winning novel from a bestselling author that will keep you on the edge of your seat.'
  },
  {
    id: 10,
    name: 'Cookbook',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Books',
    rating: 4.4,
    description: 'Collection of 100+ recipes for beginners and experienced cooks alike.'
  },
  {
    id: 11,
    name: 'Wireless Earbuds',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    rating: 4.3,
    description: 'Compact wireless earbuds with charging case and water resistance.'
  },
  {
    id: 12,
    name: 'Hooded Sweatshirt',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Clothing',
    rating: 4.2,
    description: 'Warm and cozy hooded sweatshirt perfect for colder weather.'
  }
]; 