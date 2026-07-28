import React from 'react';

const Logo = ({ size = 44, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    aria-hidden="true"
  >
    <polygon
      points="50,4 89,27 89,73 50,96 11,73 11,27"
      fill="#0a192f"
      stroke="#64ffda"
      strokeWidth="5"
    />
    <text
      x="50"
      y="61"
      textAnchor="middle"
      fontFamily="'Roboto Mono', 'SFMono-Regular', Consolas, monospace"
      fontSize="32"
      fontWeight="700"
      fill="#64ffda"
    >
      PS
    </text>
  </svg>
);

export default Logo;
