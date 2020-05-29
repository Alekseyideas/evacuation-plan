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
} from './PlanStyle';

export const Plan: React.FunctionComponent = () => {
  const btnsLeft = [
    {
      title: 'Вихiд',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
      icon: '',
      id: 1,
      link: 'http://localhost:3000/#/plan',
    },
  ];
  const btnsRight = [
    {
      title: 'Видалити',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
      icon: '',
      id: 1,
      link: '',
    },
  ];

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
                    />
                  );
                })}
              </LeftBtnsWrapperS>
              <RightBtnsWrapperS>
                {btnsRight.map((btn) => {
                  return <ButtonIconS key={btn.id} />;
                })}
              </RightBtnsWrapperS>
            </PlanHeaderS>

            <PlanBodyS />
          </PlanS>
          <RightColS>
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
          </RightColS>
        </PlanWrapperS>
      </div>
    </MainWrapperS>
  );
};
