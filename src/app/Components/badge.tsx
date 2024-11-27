const Badge = () => {
    return (
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="#ff00ff"
          stroke="none"
          strokeWidth="2"
          style={{ fill: "#ff00ff" }}
        />
  
        {/* Text around the circle */}
        <text
          fontSize="12"
          fontFamily="Arial, sans-serif"
          fill="black"
          textAnchor="middle"
        >
          <textPath
            href="#textcircle"
            startOffset="0"
            method="align"
            spacing="auto"
          >
            STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED
          </textPath>
        </text>
  
        {/* Arrow in the center */}
        <g transform="translate(100, 100)">
          <path
            d="M -10 0 L 10 0 M 0 -30 L 0 40"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  };
  
  export default Badge;
  