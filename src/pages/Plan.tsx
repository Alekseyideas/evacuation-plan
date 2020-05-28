import * as React from 'react';
import { MainWrapperS } from '../global/styles';
import {
  PlanWrapperS,
  PlanHeaderS,
  PlanS,
  ButtonIconS,
  LeftBtnsWrapperS,
  PlanBodyS,
  RightBtnsWrapperS,
} from './PlanStyle';

export const Plan: React.FunctionComponent = () => {
  return (
    <MainWrapperS>
      <div className="container">
        <PlanWrapperS>
          <PlanS>
            <PlanHeaderS>
              <LeftBtnsWrapperS>
                <ButtonIconS />
                <ButtonIconS />
              </LeftBtnsWrapperS>
              <RightBtnsWrapperS>
                <ButtonIconS />
              </RightBtnsWrapperS>
            </PlanHeaderS>

            <PlanBodyS />
          </PlanS>
        </PlanWrapperS>
      </div>
    </MainWrapperS>
  );
};
