type LogoProps = {
  className?: string;
  height?: number;
};

export const TurboLogoCondensed = ({
  height = 32,
  className = "",
}: LogoProps) => (
  <svg
    className={className}
    width="32"
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9309 7.33936C11.1933 7.33936 7.33887 11.1938 7.33887 15.9314C7.33887 20.669 11.1933 24.5234 15.9309 24.5234C20.6685 24.5234 24.5229 20.669 24.5229 15.9314C24.5229 11.1938 20.6685 7.33936 15.9309 7.33936ZM15.9309 20.3778C13.4749 20.3778 11.4845 18.3874 11.4845 15.9314C11.4845 13.4754 13.4749 11.485 15.9309 11.485C18.3869 11.485 20.3773 13.4754 20.3773 15.9314C20.3773 18.3874 18.3869 20.3778 15.9309 20.3778Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6509 5.92821V2.72021C23.6237 3.09301 29.1629 8.86581 29.1629 15.9314C29.1629 22.997 23.6237 28.7682 16.6509 29.1426V25.9346C21.8477 25.5634 25.9629 21.221 25.9629 15.9314C25.9629 10.6418 21.8477 6.29941 16.6509 5.92821ZM8.35333 22.4914C6.97573 20.901 6.08773 18.8754 5.92933 16.6514H2.71973C2.88613 19.7634 4.13093 22.5874 6.08133 24.7618L8.35173 22.4914H8.35333ZM15.2109 29.1426V25.9346C12.9853 25.7762 10.9597 24.8898 9.36935 23.5106L7.09895 25.781C9.27495 27.733 12.0989 28.9762 15.2093 29.1426H15.2109Z"
      fill="url(#paint0_linear_967_9283)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_967_9283"
        x1="17.1694"
        y1="4.578"
        x2="4.16465"
        y2="17.5828"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset="1" stopColor="#FF1E56" />
      </linearGradient>
    </defs>
  </svg>
);

const Turbo = ({ height = 32, className = "" }: LogoProps) => (
  <svg
    className={className}
    width="112"
    height={height}
    viewBox="0 0 112 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48.2623 11.2944V8.24418H33.5623V11.2944H39.1116V21.4374H42.7131V11.2944H48.2623Z"
      fill="white"
    />
    <path
      d="M56.568 21.6396C61.0882 21.6396 63.5688 19.3427 63.5688 15.5574V8.24418H59.9673V15.2083C59.9673 17.3214 58.8648 18.5158 56.568 18.5158C54.2711 18.5158 53.1686 17.3214 53.1686 15.2083V8.24418H49.5671V15.5574C49.5671 19.3427 52.0477 21.6396 56.568 21.6396Z"
      fill="white"
    />
    <path
      d="M69.0819 17.0642H72.665L75.4948 21.4374H79.6292L76.4319 16.6783C78.2327 16.0352 79.3352 14.6019 79.3352 12.6542C79.3352 9.82443 77.222 8.24418 74.0064 8.24418H65.4804V21.4374H69.0819V17.0642ZM69.0819 14.2161V11.2577H73.8227C75.0905 11.2577 75.7888 11.8089 75.7888 12.7461C75.7888 13.6281 75.0905 14.2161 73.8227 14.2161H69.0819Z"
      fill="white"
    />
    <path
      d="M81.0109 21.4374H90.4372C93.3772 21.4374 95.0677 20.0409 95.0677 17.7073C95.0677 16.1454 94.0755 15.0797 92.8995 14.6019C93.708 14.2161 94.7002 13.2973 94.7002 11.8457C94.7002 9.51206 93.0465 8.24418 90.1249 8.24418H81.0109V21.4374ZM84.4654 13.4076V11.1658H89.7574C90.7496 11.1658 91.3009 11.5517 91.3009 12.2867C91.3009 13.0217 90.7496 13.4076 89.7574 13.4076H84.4654ZM84.4654 16.1087H90.0881C91.062 16.1087 91.5949 16.5864 91.5949 17.3031C91.5949 18.0197 91.062 18.4974 90.0881 18.4974H84.4654V16.1087Z"
      fill="white"
    />
    <path
      d="M103.873 8.02368C99.2613 8.02368 95.9354 10.9086 95.9354 14.8408C95.9354 18.7731 99.2613 21.6579 103.873 21.6579C108.486 21.6579 111.793 18.7731 111.793 14.8408C111.793 10.9086 108.486 8.02368 103.873 8.02368ZM103.873 11.1474C106.299 11.1474 108.118 12.5807 108.118 14.8408C108.118 17.1009 106.299 18.5342 103.873 18.5342C101.448 18.5342 99.6288 17.1009 99.6288 14.8408C99.6288 12.5807 101.448 11.1474 103.873 11.1474Z"
      fill="white"
    />
    <g clipPath="url(#clip0_214_3808)">
      <g filter="url(#filter0_d_214_3808)">
        <path
          d="M13.9398 6.42181C9.79441 6.42181 6.42181 9.79441 6.42181 13.9398C6.42181 18.0852 9.79441 21.4578 13.9398 21.4578C18.0852 21.4578 21.4578 18.0852 21.4578 13.9398C21.4578 9.79441 18.0852 6.42181 13.9398 6.42181ZM13.9398 17.8304C11.7908 17.8304 10.0492 16.0888 10.0492 13.9398C10.0492 11.7908 11.7908 10.0492 13.9398 10.0492C16.0888 10.0492 17.8304 11.7908 17.8304 13.9398C17.8304 16.0888 16.0888 17.8304 13.9398 17.8304Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5698 5.187V2.38C20.671 2.7062 25.5178 7.7574 25.5178 13.9398C25.5178 20.1222 20.671 25.172 14.5698 25.4996V22.6926C19.117 22.3678 22.7178 18.5682 22.7178 13.9398C22.7178 9.3114 19.117 5.5118 14.5698 5.187ZM7.3094 19.6798C6.104 18.2882 5.327 16.5158 5.1884 14.5698H2.38C2.5256 17.2928 3.6148 19.7638 5.3214 21.6664L7.308 19.6798H7.3094ZM13.3098 25.4996V22.6926C11.3624 22.554 9.59002 21.7784 8.19842 20.5716L6.21182 22.5582C8.11582 24.2662 10.5868 25.354 13.3084 25.4996H13.3098Z"
          fill="url(#paint0_linear_214_3808)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_214_3808"
        x="-1.62"
        y="2.38"
        width="31.1378"
        height="31.1196"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_214_3808"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_214_3808"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_214_3808"
        x1="15.0235"
        y1="4.00556"
        x2="3.64431"
        y2="15.3847"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset="1" stopColor="#FF1E56" />
      </linearGradient>
      <clipPath id="clip0_214_3808">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Turbo;
