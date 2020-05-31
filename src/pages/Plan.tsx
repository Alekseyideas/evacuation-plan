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
  RightColS,
  ButtonTitleS,
  RightBtnsControls,
  ColorWrapperControlsS,
  BtnColorS,
} from './PlanStyle';
import { btnsLeft, btnsRight } from '../utils/constructorBtns';

export const Plan: React.FunctionComponent = () => {
  const [currentBtn, setCurrentBtn] = React.useState<
    typeof btnsLeft[0] | null
  >();
  return (
    <MainWrapperS>
      <div className="container">
        <PlanWrapperS>
          <PlanS>
            <PlanHeaderS>
              <LeftBtnsWrapperS>
                {btnsLeft.map((btn) => {
                  return (
                    <ButtonIconS
                      onMouseEnter={() => {
                        setCurrentBtn(btn);
                      }}
                      onMouseLeave={() => {
                        setCurrentBtn(null);
                      }}
                      key={btn.id}
                    >
                      {typeof btn.icon === 'string' ? (
                        <img src={btn.icon} alt="icon" />
                      ) : (
                        <btn.icon />
                      )}
                      <ButtonTitleS>{btn.title}</ButtonTitleS>
                    </ButtonIconS>
                  );
                })}
              </LeftBtnsWrapperS>
              <RightBtnsWrapperS>
                {btnsRight.map((btn) => {
                  return (
                    <ButtonIconS
                      onMouseEnter={() => {
                        setCurrentBtn(btn);
                      }}
                      onMouseLeave={() => {
                        setCurrentBtn(null);
                      }}
                      key={btn.id}
                    >
                      {typeof btn.icon === 'string' ? (
                        <img src={btn.icon} alt="icon" />
                      ) : (
                        <btn.icon />
                      )}
                      <ButtonTitleS>{btn.title}</ButtonTitleS>
                    </ButtonIconS>
                  );
                })}
              </RightBtnsWrapperS>
            </PlanHeaderS>

            <PlanBodyS />
          </PlanS>
          <RightColS>
            <div>
              <h2>{currentBtn?.title}</h2>
              <p>{currentBtn?.desc}</p>
              {currentBtn?.link ? (
                <p>
                  Детальна iнформацiя: <br />{' '}
                  <a
                    href={currentBtn.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {currentBtn.link}
                  </a>
                </p>
              ) : null}
            </div>
            <RightBtnsControls>
              <ColorWrapperControlsS>
                <BtnColorS active>Колiр</BtnColorS>
                <BtnColorS>Чорно-бiлий</BtnColorS>
              </ColorWrapperControlsS>

              <button
                className="btn btn-def"
                style={{ width: '100%', marginTop: '10px' }}
              >
                Друкувати
              </button>
            </RightBtnsControls>
          </RightColS>
        </PlanWrapperS>
      </div>
    </MainWrapperS>
  );
};
