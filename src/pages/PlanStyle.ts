import styled from 'styled-components';

export const PlanWrapperS = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const PlanS = styled.div`
  width: 973px;
  min-width: 973px;
`;
export const PlanHeaderS = styled.div`
  background: rgb(83, 83, 83);
  padding: 3px 1.5px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: relative;
`;
export const PlanBodyS = styled.div`
  display: block;
  position: relative;
  --nr: 44; /* number of rows */
  --nc: 52; /* number of columns */
  --b: 1px; /* border length */

  --g: transparent calc(100% - var(--b)), rgba(83, 83, 83, 0.2) 0;
  background: linear-gradient(to right, var(--g)),
    linear-gradient(to bottom, var(--g)), #fff;
  background-size: calc(
        (100% - var(--b) * (var(--nc) - 1)) / var(--nc) + var(--b)
      )
      100%,
    100% calc((100% - var(--b) * (var(--nr) - 1)) / var(--nr) + var(--b));

  width: 100%;
  height: 768px;
  border: 1px solid rgb(83, 83, 83);
  margin-top: 5px;
  /* overflow: hidden; */
`;
export const btnsWrapperS = styled.div`
  display: flex;
`;

export const RightColS = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  h2 {
    margin-top: 0;
    color: #000;
  }
  p {
    color: gray;
  }

  a {
    color: #5387be;
    text-decoration: underline;
  }
`;
export const LeftBtnsWrapperS = styled(btnsWrapperS)``;
export const RightBtnsWrapperS = styled(btnsWrapperS)``;

export const ButtonTitleS = styled.div`
  position: absolute;
  display: none;
  width: auto;
  background: rgb(40, 40, 40);
  padding: 5px 10px;
  top: 100%;
  left: 0;
  color: #e0e0e0;
  font-size: 14px;
  white-space: nowrap;
`;

export const ButtonIconS = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 1.5px;
  align-items: center;
  width: 40px;
  height: 35px;
  background: rgba(40, 40, 40, 0.1);
  cursor: pointer;
  position: relative;
  .trLeft {
    transform: scale(-1, 1);
  }
  img,
  svg {
    max-width: 70%;
    height: auto;
    width: auto;
    height: auto;
    max-height: 70%;

    ellipse,
    path {
      fill: #e0e0e0;
    }
  }
  &:hover {
    background: rgb(40, 40, 40);

    ${ButtonTitleS} {
      display: block;
    }
  }
  &:active {
    background: rgb(0, 0, 0);

    ${ButtonTitleS} {
      display: none;
    }
  }
`;

export const RightBtnsControls = styled.div`
  width: 100%;
`;
export const ColorWrapperControlsS = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BtnColorS = styled.button<{ active?: boolean }>`
  width: 50%;
  background: #f5f5f5;
  border-radius: 3px;
  height: 45px;
  font-size: 15px;
  ${({ active }) =>
    active
      ? `
		background: rgb(40, 40, 40);
		color: white;

	`
      : null}
`;
