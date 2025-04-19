/**
 * Format a price as USD currency
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

/**
 * Generate star rating UI strings
 */
export const generateStarRating = (rating: number): string => {
  // Round to nearest half
  const roundedRating = Math.round(rating * 2) / 2;
  let stars = '';
  
  // Full stars
  for (let i = 0; i < Math.floor(roundedRating); i++) {
    stars += '★';
  }
  
  // Half star
  if (roundedRating % 1 !== 0) {
    stars += '½';
  }
  
  // Empty stars
  const emptyStars = 5 - Math.ceil(roundedRating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  
  return stars;
};

/**
 * Truncate text to a specific length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}; 