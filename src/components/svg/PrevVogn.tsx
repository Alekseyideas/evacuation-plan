import React from 'react';
interface IProps {
  w: number;
  h: number;
}
export const PrevVogn = ({ w, h }: IProps) => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width={w}
      height={h}
      viewBox="0 0 311.811 311.811"
      enableBackground="new 0 0 311.811 311.811"
      style={{ background: '#ED1C24' }}
    >
      <g id="контур" display="none">
        <g display="inline">
          <rect
            x="14.173"
            y="14.174"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="none"
            stroke="#000000"
            strokeMiterlimit="22.9256"
            width="283.465"
            height="283.462"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="none"
            stroke="#000000"
            strokeMiterlimit="22.9256"
            d="M25.157,25.159
			v261.494h261.496V25.159H25.157z M196.701,108.152v106.765v34.72h-62.596v-34.72V108.152v-1.876c0-5.121,5.027-9.312,11.171-9.312
			h12.333V78.488l-8.145,0.064l-24.435,14.452v11.421l-5.816,0.931V85.078l28.62-17.249h9.775v-4.894h16.987v4.894h5.468h1.047
			l-0.007,0.045c4.188,0.319,7.455,2.53,7.455,5.199c0,2.889-3.815,5.244-8.495,5.244c-0.116,0-0.234,0-0.349-0.002v0.002
			l-5.119,0.04v18.607h10.935c6.144,0,11.171,4.19,11.171,9.312V108.152z"
          />
        </g>
      </g>
      <g id="Layer_1">
        <g>
          <rect
            x="14.173"
            y="14.174"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#fff"
            stroke="#000000"
            strokeWidth="0.216"
            strokeMiterlimit="22.9256"
            width="283.465"
            height="283.462"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#ED1C24"
            d="M25.157,25.159h261.496v261.494H25.157V25.159L25.157,25.159z
			 M145.276,96.965c-6.144,0-11.171,4.19-11.171,9.312v1.876v106.765v34.72h62.596v-34.72V108.152v-1.876
			c0-5.121-5.027-9.312-11.171-9.312h-10.935V78.358l5.119-0.04v-0.002c0.116,0.002,0.234,0.002,0.35,0.002
			c4.68,0,8.495-2.355,8.495-5.244c0-2.669-3.267-4.88-7.455-5.199l0.007-0.045h-1.047h-5.468v-4.894h-16.987v4.894h-9.775
			l-28.62,17.249v20.277l5.816-0.931V93.004l24.435-14.452l8.145-0.064v18.477H145.276z"
          />
        </g>
      </g>
    </svg>
  );
};
