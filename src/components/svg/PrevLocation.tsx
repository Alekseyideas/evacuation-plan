import React from 'react';
import styled from 'styled-components';
interface IProps {
  w: number;
  h: number;
}
export const PrevLocation = ({ w, h }: IProps) => {
  return (
    <svg
      version="1.1"
      width={w}
      height={h}
      viewBox="0 0 340.157 340.157"
      // style={{ background: '#fff' }}
    >
      <g id="контур_1_" display="none">
        <g display="inline">
          <path
            fill="none"
            stroke="#000000"
            strokeMiterlimit="22.9256"
            d="M146.083,42.306c10.978-19.014,38.422-19.014,49.4,0
			l64.523,111.757l64.523,111.757c10.978,19.014-2.745,42.781-24.7,42.781H170.782H41.737c-21.955,0-35.678-23.767-24.7-42.781
			L81.56,154.063L146.083,42.306z"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeMiterlimit="10"
            d="M314.277,271.738L185.232,48.224
			c-3.016-5.223-8.417-8.342-14.449-8.342c-6.032,0-11.433,3.119-14.449,8.342L27.288,271.738
			c-3.015,5.223-3.015,11.461,0.001,16.684c3.015,5.224,8.416,8.342,14.449,8.342h258.091c6.032,0,11.433-3.118,14.449-8.342
			C317.293,283.199,317.293,276.961,314.277,271.738z M293.658,278.772H47.907c-1.736,0-2.821-1.879-1.953-3.383L168.829,62.565
			c0.868-1.503,3.038-1.503,3.906,0L295.61,275.39C296.478,276.893,295.394,278.772,293.658,278.772z"
          />
        </g>
      </g>
      <g id="Слой_3">
        <g>
          <path
            display="none"
            opacity="0.5"
            fill="#D1D2D2"
            d="M155.948,48.874c11.104-19.233,38.865-19.233,49.969,0l65.267,113.045
			l65.267,113.045c11.104,19.233-2.776,43.275-24.985,43.275H180.933H50.399c-22.208,0-36.089-24.041-24.985-43.275l65.267-113.045
			L155.948,48.874z"
          />
          <g>
            <path
              fill="#F4F4F4"
              stroke="#000000"
              strokeWidth="0.216"
              strokeMiterlimit="22.9256"
              d="M146.083,42.306
				c10.978-19.014,38.422-19.014,49.4,0l64.523,111.757l64.523,111.757c10.978,19.014-2.745,42.781-24.7,42.781H170.782H41.737
				c-21.955,0-35.678-23.767-24.7-42.781L81.56,154.063L146.083,42.306z"
            />
            <path
              fill="#E31E26"
              d="M314.277,271.738L185.232,48.224c-3.016-5.223-8.417-8.342-14.449-8.342
				c-6.032,0-11.433,3.119-14.449,8.342L27.288,271.738c-3.015,5.223-3.015,11.461,0.001,16.684
				c3.015,5.224,8.416,8.342,14.449,8.342h258.091c6.032,0,11.433-3.118,14.449-8.342
				C317.293,283.199,317.293,276.961,314.277,271.738z M293.658,278.772H47.907c-1.736,0-2.821-1.879-1.953-3.383L168.829,62.565
				c0.868-1.503,3.038-1.503,3.906,0L295.61,275.39C296.478,276.893,295.394,278.772,293.658,278.772z"
            />
            <path
              d="M293.658,278.772H47.907c-1.736,0-2.821-1.879-1.953-3.383L168.829,62.565c0.868-1.503,3.038-1.503,3.906,0
				L295.61,275.39C296.478,276.893,295.394,278.772,293.658,278.772z"
            />
            <g display="none">
              <g display="inline">
                <g>
                  <circle fill="#171717" cx="170.782" cy="132.226" r="18.904" />
                </g>
                <g>
                  <circle fill="#171717" cx="170.782" cy="221.59" r="10.15" />
                </g>
                <g>
                  <polygon
                    fill="#171717"
                    points="151.878,132.226 160.825,223.556 180.805,223.123 189.686,132.226 						"
                  />
                </g>
              </g>
              <g display="inline">
                <circle fill="#171717" cx="170.782" cy="253.578" r="12.245" />
              </g>
            </g>
            <radialGradient
              id="SVGID_1_"
              cx="308.9263"
              cy="293.5297"
              r="412.5484"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
              <stop offset="0.1131" style={{ stopColor: '#BEBEBE' }} />
              <stop offset="0.2259" style={{ stopColor: '#848484' }} />
              <stop offset="0.3337" style={{ stopColor: '#555555' }} />
              <stop offset="0.4357" style={{ stopColor: '#313131' }} />
              <stop offset="0.5304" style={{ stopColor: '#161616' }} />
              <stop offset="0.6151" style={{ stopColor: '#070707' }} />
              <stop offset="0.6816" style={{ stopColor: '#010101' }} />
            </radialGradient>
            <path
              display="none"
              fill="url(#SVGID_1_)"
              d="M39.313,261.388c93.704,0,172.627-63.269,196.391-149.417l-40.221-69.665
				c-10.978-19.014-38.422-19.014-49.4,0L81.56,154.063L20.113,260.491C26.434,261.082,32.837,261.388,39.313,261.388z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const WrapperS = styled.div`
  position: relative;
  background-color: orange;
  text-align: left;
  width: 10em;
  height: 10em;
  border-top-right-radius: 30%;
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);

  &::before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &::after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: inherit;
    width: 100%;
    height: 100%;
  }
`;
