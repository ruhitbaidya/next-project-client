const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="40"
    viewBox="0 0 100 40"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ff5252", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#c62828", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="f1" x="0" y="0">
        <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#888" />
      </filter>
    </defs>
    <text
      x="5"
      y="30"
      fontFamily="Arial, sans-serif"
      fontSize="30"
      fontWeight="bold"
      fill="url(#grad1)"
      filter="url(#f1)"
    >
      R
    </text>
    <text
      x="30"
      y="30"
      fontFamily="Arial, sans-serif"
      fontSize="20"
      fontWeight="normal"
      fill="#ff5252"
    >
      Business
    </text>
  </svg>
);

export default Logo;
