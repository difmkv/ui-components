import { SvgComponentProps } from "./typings";

export const LogoSvgComponent: React.FC<SvgComponentProps> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 60 75"
    >
      <path d="M33.14,32.87c1.32,0,2.4-1.07,2.4-2.39s-1.08-2.4-2.4-2.4s-2.39,1.08-2.39,2.4S31.82,32.87,33.14,32.87z" />
      <path d="M11.28,43.24l-5.44,4.47c-0.29,0.24-0.42,0.61-0.35,0.97c-0.01,0.02-0.01,0.03-0.01,0.05V54c0,0.55,0.44,1,1,1h46.8  c0.55,0,1-0.45,1-1v-5.27c0-0.05,0-0.09-0.01-0.13c0.04-0.33-0.09-0.67-0.36-0.89l-4.49-3.69c0.21-0.27,0.44-0.54,0.67-0.81  c1.08-1.3,2.31-2.77,3.12-4.67c1.16-2.73,1.31-5.74,1.31-8.06C54.52,16.43,43.09,5,29.04,5C20.49,5,12.56,9.25,7.81,16.38  c-0.01,0.02-0.02,0.04-0.03,0.06c-0.04,0.07-0.07,0.14-0.09,0.21c-0.01,0.04-0.02,0.09-0.03,0.14c-0.03,0.19,0,0.38,0.08,0.55  c0.03,0.1,0.09,0.19,0.17,0.27c0.05,0.05,0.1,0.1,0.17,0.14l0.01,0.01c0.02,0.02,0.05,0.04,0.07,0.05l3.56,1.97  c-1.99,3.22-3.05,6.89-3.05,10.7c0,4.59,1.53,8.96,4.33,12.53h-1.09C11.69,43.01,11.46,43.09,11.28,43.24z M33.14,26.08  c2.42,0,4.4,1.97,4.4,4.4c0,2.42-1.98,4.39-4.4,4.39s-4.39-1.97-4.39-4.39C28.75,28.05,30.72,26.08,33.14,26.08z M10.68,30.48  c0-3.47,0.98-6.81,2.81-9.73l1.75,0.97c-1.67,2.62-2.56,5.63-2.56,8.76c0,0.55,0.45,1,1,1s1-0.45,1-1c0-2.79,0.8-5.47,2.31-7.79  l8.14,4.49c-0.42,1.02-0.65,2.13-0.65,3.3c0,4.04,2.77,7.43,6.52,8.39c-2.31,0.96-4.66,2.1-6.16,4.14h-9.19  C12.45,39.59,10.68,35.16,10.68,30.48z" />
    </svg>
  );
};