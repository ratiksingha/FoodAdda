import * as React from "react";
const SVGComponent = (props) => (
  <svg
    id="downloadMe"
    width={120}
    height={120}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#FF5200"
      d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"
    />
    <text
      x={18}
      y={38}
      fontFamily="Arial, sans-serif"
      fontSize={24}
      fontWeight="bold"
      fill="#FFF"
    >
      {"FA"}
    </text>
    <path
      d="M20 44 Q32 52, 44 44"
      stroke="#FFF"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
export default SVGComponent;
