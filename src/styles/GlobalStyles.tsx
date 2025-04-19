import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #ffffff;
    --text-color: #333333;
    --light-gray: #f5f5f5;
    --mid-gray: #e0e0e0;
    --dark-gray: #888888;
    --danger-color: #e74c3c;
    --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --transition-speed: 0.3s;
  }

  [data-theme='dark'] {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #222222;
    --text-color: #f5f5f5;
    --light-gray: #333333;
    --mid-gray: #444444;
    --dark-gray: #aaaaaa;
    --danger-color: #e74c3c;
    --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color var(--transition-speed), color var(--transition-speed);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  main {
    min-height: 70vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .btn {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: white;
    &:hover {
      background-color: darken(var(--primary-color), 10%);
    }
  }

  .btn-secondary {
    background-color: var(--secondary-color);
    color: white;
    &:hover {
      background-color: darken(var(--secondary-color), 10%);
    }
  }

  .btn-danger {
    background-color: var(--danger-color);
    color: white;
    &:hover {
      background-color: darken(var(--danger-color), 10%);
    }
  }
`;

export default GlobalStyles; 