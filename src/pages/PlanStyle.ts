import styled from 'styled-components';

export const PlanWrapperS = styled.div`
  display: flex;
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
`;
export const PlanBodyS = styled.div`
  display: block;
  width: 100%;
  height: 768px;
  border: 1px solid rgb(83, 83, 83);
  margin-top: 5px;
`;
export const btnsWrapperS = styled.div`
  display: flex;
`;

export const RightColS = styled.div`
  padding-left: 20px;
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
export const ButtonIconS = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 1.5px;
  align-items: center;
  width: 35px;
  height: 30px;
  background: rgba(40, 40, 40, 0.1);
  cursor: pointer;

  &:hover {
    background: rgb(40, 40, 40);
  }
`;
