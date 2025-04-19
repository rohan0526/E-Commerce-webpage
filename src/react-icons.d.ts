declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  export const FaShoppingCart: IconType;
  export const FaShoppingBag: IconType;
  export const FaStar: IconType;
  export const FaCheckCircle: IconType;
  export const FaTimes: IconType;
  export const FaPlus: IconType;
  export const FaMinus: IconType;
  export const FaTrash: IconType;
  export const FaArrowLeft: IconType;
  export const FaSearch: IconType;
  export const FaMoon: IconType;
  export const FaSun: IconType;
  export const FaFilter: IconType;
  export const FaChevronDown: IconType;
  export const FaFacebook: IconType;
  export const FaTwitter: IconType;
  export const FaInstagram: IconType;
  export const FaGithub: IconType;
}

declare module 'react-icons' {
  import React from 'react';
  export interface IconType extends React.FC<React.SVGProps<SVGSVGElement>> {}
} 