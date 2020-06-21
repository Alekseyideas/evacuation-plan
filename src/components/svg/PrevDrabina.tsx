import React from 'react';
interface IProps {
  w: number;
  h: number;
}
export const PrevDrabina = ({ w, h }: IProps) => {
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
          <polygon
            fill="none"
            stroke="#000000"
            strokeMiterlimit="22.9256"
            points="13.801,14.385 297.265,14.385 297.265,297.847 
			13.801,297.847 13.801,14.385 		"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="none"
            stroke="#000000"
            strokeMiterlimit="10"
            d="M24.785,25.369h261.496
			v261.494H24.785V25.369L24.785,25.369z M95.552,42.929h11.721v10.538H209.16V42.929h11.721V272.63H209.16v-10.538H107.273v10.538
			H95.552V42.929L95.552,42.929z M209.16,254.567v-42.749H107.273v42.749H209.16L209.16,254.567z M209.16,204.292v-42.749H107.273
			v42.749H209.16L209.16,204.292z M209.16,154.017v-42.749H107.273v42.749H209.16L209.16,154.017z M209.16,103.742V60.993H107.273
			v42.749H209.16L209.16,103.742z"
          />
        </g>
      </g>
      <g id="Слой_1">
        <g>
          <polygon
            fill="#fff"
            stroke="#000000"
            strokeWidth="0.216"
            strokeMiterlimit="22.9256"
            points="13.801,14.385 297.265,14.385 
			297.265,297.847 13.801,297.847 13.801,14.385 		"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#ED1C24"
            d="M24.785,25.369h261.496v261.494H24.785V25.369L24.785,25.369z
			 M95.552,42.929h11.721v10.538H209.16V42.929h11.721V272.63H209.16v-10.538H107.273v10.538H95.552V42.929L95.552,42.929z
			 M209.16,254.567v-42.749H107.273v42.749H209.16L209.16,254.567z M209.16,204.292v-42.749H107.273v42.749H209.16L209.16,204.292z
			 M209.16,154.017v-42.749H107.273v42.749H209.16L209.16,154.017z M209.16,103.742V60.993H107.273v42.749H209.16L209.16,103.742z"
          />
        </g>
      </g>
    </svg>
  );
};
