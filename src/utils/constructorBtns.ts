import React from 'react';
import { ExitIcon } from '../components/svg/ExitIcon';
import { ExitZap } from '../components/svg/ExitZap';
import { EvShl } from '../components/svg/EvShl';
import { NapLeft } from '../components/svg/NapLeft';
import { NapRight } from '../components/svg/NapRight';
// import Tel from '../assets/images/tel.svg';
import { Vogn } from '../components/svg/Vogn';
import { PogSp } from '../components/svg/PogSp';
import { PogKran } from '../components/svg/PogKran';
import { PogDrabina } from '../components/svg/PogDrabina';
import { Location } from '../components/svg/Location';
import { ZovnStina } from '../components/svg/ZovnStina';
import { VnutrStina } from '../components/svg/VnutrStina';
import { DvOtvirZ } from '../components/svg/DvOtvirZ';
import { DvOtvirV } from '../components/svg/DvOtvirV';
import { VikZ } from '../components/svg/VikZ';
import { VikV } from '../components/svg/VikV';
import { Shodi } from '../components/svg/Shodi';
import { DeleteIcon } from '../components/svg/Del';
// import { CleanIcon } from '../components/svg/CleanIcon';
import { Tel } from '../components/svg/Tel';
import { CheckIcon } from '../components/svg/CheckIcon';
import { RotateIcon } from '../components/svg/RotateIcon';
import { ExitText } from '../components/textModals/ExitText';
import { ZExitText } from '../components/textModals/ZExitText';
import { NapLeftText } from '../components/textModals/NapLeftText';
import { EvShlText } from '../components/textModals/EvShlText';
import { NapRightText } from '../components/textModals/NapRightText';
import { TelText } from '../components/textModals/TelText';
import { VognText } from '../components/textModals/VognText';
import { PogSpText } from '../components/textModals/PogSpText';
import { PogKranText } from '../components/textModals/PogKranText';
import { LocationText } from '../components/textModals/LocationText';
import { PogDrabinaText } from '../components/textModals/PogDrabinaText';

const Empty = () => null;
export const btnsLeft = [
  {
    title: 'Стіна зовнішня',
    name: 'zovnStina',
    desc: Empty,
    icon: ZovnStina,
    id: 0,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Стіна внутрішня',
    name: 'vnutrStina',
    desc: Empty,
    icon: VnutrStina,
    id: 1,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Дверний отвір у зовнішній стіні',
    name: 'dvOtvirZ',
    desc: Empty,
    icon: DvOtvirZ,
    id: 2,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Дверний отвір у внутрішній стіні',
    name: 'dvOtvirV',
    desc: Empty,
    icon: DvOtvirV,
    id: 3,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Вікно у зовнішній стіні',
    name: 'vikZ',
    desc: Empty,
    icon: VikZ,
    id: 4,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Вікно у внутрішній стіні',
    name: 'vikV',
    desc: Empty,
    icon: VikV,
    id: 5,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Сходи',
    name: 'shodi',
    desc: Empty,
    icon: Shodi,
    id: 6,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Евакуаційний шлях',
    name: 'evSh',
    desc: EvShlText,
    icon: EvShl,
    id: 7,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 70,
  },
  {
    title: 'Вихiд',
    desc: ExitText,
    icon: ExitIcon,
    name: 'exit',
    id: 8,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 0,
  },
  {
    title: 'Запасний вихід',
    name: 'zExit',
    desc: ZExitText,
    icon: ExitZap,
    id: 9,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },

  {
    title: 'Напрямок до виходу ліворуч',
    name: 'nprDoVL',
    desc: NapLeftText,
    icon: NapLeft,
    id: 12,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 20,
  },
  {
    title: 'Напрямок до виходу праворуч',
    name: 'nprDoVP',
    desc: NapRightText,
    icon: NapRight,
    id: 13,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Телефон',
    name: 'tel',
    desc: TelText,
    icon: Tel,
    id: 14,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 30,
  },
  {
    title: 'Вогнегасник',
    name: 'vogn',
    desc: VognText,
    icon: Vogn,
    id: 16,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 0,
  },
  {
    title: 'Пожежний сповіщувач',
    name: 'pogSp',
    desc: PogSpText,
    icon: PogSp,
    id: 17,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 0,
  },
  {
    title: 'Пожежний кран-комплект',
    name: 'pogKran',
    desc: PogKranText,
    icon: PogKran,
    id: 18,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 0,
  },
  {
    title: 'Пожежна драбина',
    name: 'pogDrabina',
    desc: PogDrabinaText,
    icon: PogDrabina,
    id: 19,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 0,
  },
  {
    title: 'Ви перебуваєте тут',
    name: 'location',
    desc: LocationText,
    icon: Location,
    id: 20.2,
    link: 'http://localhost:3000/#/plan',
    positionLeft: 130,
  },
];

export const btnsRight = [
  {
    title: 'Видалити',
    name: 'deleteIcon',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: DeleteIcon,
    id: 18,
    link: '',
  },
  {
    title: 'Перевернуть',
    name: 'rotateIcon',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: RotateIcon,
    id: 19,
    link: '',
  },
  {
    title: 'Примениить',
    name: 'checkIcon',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: CheckIcon,
    id: 20,
    link: '',
  },
  // {
  //   title: 'Jxbcnbnm',
  //   desc:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
  //   icon: CleanIcon,
  //   id: 1,
  //   link: '',
  // },
];
