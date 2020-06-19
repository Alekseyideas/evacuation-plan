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

export const btnsLeft = [
  {
    title: 'Вихiд',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: ExitIcon,
    name: 'exit',
    id: 1,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Запасний вихід',
    name: 'zExit',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: ExitZap,
    id: 2,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Евакуаційний шлях',
    name: 'evSh',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: EvShl,
    id: 3,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Напрямок до виходу ліворуч',
    name: 'nprDoVL',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: NapLeft,
    id: 4,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Напрямок до виходу праворуч',
    name: 'nprDoVP',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: NapRight,
    id: 5,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Телефон',
    name: 'tel',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: Tel,
    id: 6,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Вогнегасник',
    name: 'vogn',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: Vogn,
    id: 7,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Пожежний сповіщувач',
    name: 'pogSp',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: PogSp,
    id: 8,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Пожежний кран-комплект',
    name: 'pogKran',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: PogKran,
    id: 9,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Пожежна драбина',
    name: 'pogDrabina',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: PogDrabina,
    id: 10,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Ви перебуваєте тут',
    name: 'location',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: Location,
    id: 11,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Стіна зовнішня',
    name: 'zovnStina',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: ZovnStina,
    id: 12,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Стіна внутрішня',
    name: 'vnutrStina',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: VnutrStina,
    id: 13,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Дверний отвір у зовнішній стіні',
    name: 'dvOtvirZ',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: DvOtvirZ,
    id: 14,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Дверний отвір у внутрішній стіні',
    name: 'dvOtvirV',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: DvOtvirV,
    id: 15,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Вікно у зовнішній стіні',
    name: 'vikZ',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: VikZ,
    id: 16,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Вікно у внутрішній стіні',
    name: 'vikV',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: VikV,
    id: 17,
    link: 'http://localhost:3000/#/plan',
  },
  {
    title: 'Сходи',
    name: 'shodi',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: Shodi,
    id: 18,
    link: 'http://localhost:3000/#/plan',
  },
];

export const btnsRight = [
  {
    title: 'Видалити',
    name: 'deleteIcon',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: DeleteIcon,
    id: 1,
    link: '',
  },
  {
    title: 'Примениить',
    name: 'deleteIcon',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente odio et non quae ex dolores ipsa, deserunt placeat magni esse doloribus eligendi aspernatur quod nemo qui repellendus quasi a?',
    icon: DeleteIcon,
    id: 2,
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
